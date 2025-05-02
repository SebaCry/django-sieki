from .models import Usuario
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import UserSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    data = {
        'id' : user.id,
        'username' : user.username,
        'email' : user.email,
        'is_active' : user.is_active,
        'is_staff' : user.is_staff,
        'date_joined' : user.date_joined
    }
    return Response(data)


@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(serializer.validated_data['password'])
        user.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_user(request):
    user = request.data.get('username')
    password = request.data.get('password')
    try:
        user = Usuario.objects.get(username=user)
        if user.check_password(password):
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh' : str(refresh),
                'access' : str(refresh.access_token)
            })
        else:
            return Response({
                'error' : 'Invalid credentials'
            }, status=status.HTTP_401_UNAUTHORIZED)
    except Usuario.DoesNotExist:
        return Response({
            'error' : "User doen't exist"
        }, status=status.HTTP_404_NOT_FOUND)
    


# Create your views here.
