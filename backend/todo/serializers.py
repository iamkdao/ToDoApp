from rest_framework import serializers
from .models import Todo, Tag, TodoTag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class TodoSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    
    class Meta:
        model = Todo
        fields = '__all__'

class TodoTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoTag
        fields = '__all__'
