from django.shortcuts import render
from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import TodoSerializer, TagSerializer, TodoTagSerializer
from .models import Todo, Tag, TodoTag

# Create your views here.
class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

    @action(detail=False, methods=['GET'], url_path='by-tag/<int:tag_id>')
    def by_tag(self, request, tag_id=None):
        todos = self.get_queryset().filter(tags__id=tag_id)
        serializer = self.get_serializer(todos, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        todo = serializer.save()
        
        # Handle tag associations
        tag_ids = request.data.get('tag_ids', [])
        if tag_ids:
            todo.tags.add(*tag_ids)
        
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all().order_by('name')
    serializer_class = TagSerializer
    
class TodoTagViewSet(mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    mixins.ListModelMixin,
                    viewsets.GenericViewSet):
    queryset = TodoTag.objects.all()
    serializer_class = TodoTagSerializer

    def create(self, request, *args, **kwargs):
        todo_id = request.data.get('todo')
        tag_id = request.data.get('tag')
        
        if TodoTag.objects.filter(todo_id=todo_id, tag_id=tag_id).exists():
            return Response(
                {"detail": "This tag is already assigned to the todo."},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        return super().create(request, *args, **kwargs)

    @action(detail=False, methods=['DELETE'], url_path='remove')
    def remove_tag(self, request):
        todo_id = request.data.get('todo')
        tag_id = request.data.get('tag')

        try:
            todo_tag = TodoTag.objects.get(todo=todo_id, tag=tag_id)
            todo_tag.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except TodoTag.DoesNotExist:
            return Response(
                {'detail': 'This tag is not assigned to the task.'},
                status=status.HTTP_404_NOT_FOUND,
            )