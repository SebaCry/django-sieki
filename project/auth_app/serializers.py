from .models import Usuario
from rest_framework import serializers
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = [
            'id',
            'email',
            'username',
            'tel_usua',
            'first_name',
            'last_name',
            'rol'
        ]
        extra_kwargs = {
                'password' : {'write_only' : True}
            }
        
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)