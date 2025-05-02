from .models import Usuario
from rest_framework import serializers
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = Usuario
        fields = [
            'id',
            'email',
            'username',
            'password',
            'tel_usua',
            'first_name',
            'last_name',
            'rol'
        ]
        
    def validate_tel_usua(self, value):
        if not value:
            raise serializers.ValidationError("El campo 'tel_usua' es obligatorio.")
        if Usuario.objects.filter(tel_usua=value).exists():
            raise serializers.ValidationError("Este número de teléfono ya está registrado.")
        return value