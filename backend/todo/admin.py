from django.contrib import admin
from .models import Todo, Tag, TodoTag

class TodoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Todo._meta.fields]
    # For many-to-many fields (like tags), you need a custom method
    list_display += ['display_tags']
    
    def display_tags(self, obj):
        return ", ".join([tag.name for tag in obj.tags.all()])
    display_tags.short_description = 'Tags'

class TagAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Tag._meta.fields]

class TodoTagAdmin(admin.ModelAdmin):
    list_display = [field.name for field in TodoTag._meta.fields]
    
# Register your models here.
admin.site.register(Todo, TodoAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(TodoTag, TodoTagAdmin)