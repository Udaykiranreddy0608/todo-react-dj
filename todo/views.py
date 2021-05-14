# todo/views.py
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

class TodoView(viewsets.ModelViewSet):      
    serializer_class = TodoSerializer       
    queryset = Todo.objects.all()      
   