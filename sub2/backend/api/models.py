from django.utils import timezone
from django.db import models


class Store(models.Model):
    store_id = models.IntegerField(primary_key=True)
    store_name = models.CharField(max_length=50)
    branch = models.CharField(max_length=20, null=True)
    area = models.CharField(max_length=50, null=True)
    tel = models.CharField(max_length=20, null=True)
    address = models.CharField(max_length=200, null=True)
    latitude = models.FloatField(max_length=10, null=True)
    longitude = models.FloatField(max_length=10, null=True)

    def __str__(self):
        return self.store_name


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=500, null=True)
    token = models.CharField(max_length=500, blank=True)
    name = models.CharField(max_length=50, null=True)
    password = models.CharField(max_length=100, null=True)
    gender = models.IntegerField()
    born_year = models.CharField(max_length=50)
    profileimg = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    store_id = models.ForeignKey('Store', on_delete=models.CASCADE, null=True)
    category = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.category


class Bhour(models.Model):
    store_id = models.ForeignKey('Store', on_delete=models.CASCADE)
    type = models.IntegerField()
    week_type = models.IntegerField()
    mon = models.IntegerField()
    tue = models.IntegerField()
    wed = models.IntegerField()
    thu = models.IntegerField()
    fri = models.IntegerField()
    sat = models.IntegerField()
    sun = models.IntegerField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    etc = models.TextField(max_length=100, blank=True)

    def __str__(self):
        return self.store_id


class Menu(models.Model):
    menu_id = models.AutoField(primary_key=True)
    store_id = models.ForeignKey('Store', on_delete=models.CASCADE)
    menu = models.CharField(max_length=200, null=True)
    price = models.IntegerField()

    def __str__(self):
        return self.menu_id


class Review(models.Model):
    review_id = models.AutoField(primary_key=True)
    store_id = models.ForeignKey('Store', on_delete=models.CASCADE)
    user_id = models.ForeignKey('User', on_delete=models.CASCADE)
    total_score = models.IntegerField(null=True)
    content = models.TextField(blank=True)
    reg_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.review_id
