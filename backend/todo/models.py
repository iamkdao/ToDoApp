from django.db import models

# Create your models here.
class Tag(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=120)
    description = models.TextField()
    date = models.DateTimeField()
    completed = models.BooleanField(default=False)
    tags = models.ManyToManyField(Tag, through='TodoTag', blank=True)
    
    def __str__(self):
        return self.title
    
class TodoTag(models.Model):
    todo = models.ForeignKey(Todo, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('todo', 'tag')