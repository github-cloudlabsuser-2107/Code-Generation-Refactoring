import requests

def get_weather(api_key, city):
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        print(f"Datos meteorológicos de {city}:")
        print(f"Temperatura: {data['main']['temp']}°C")
        print(f"Descripción: {data['weather'][0]['description']}")
    else:
        print(f"Error al obtener datos: {response.status_code}")

if __name__ == "__main__":
    api_key = '1068859d4e02710de2471406195bed30'  # Reemplaza 'TU_API_KEY' con tu API Key de OpenWeatherMap
    city = 'Madrid'  # Puedes cambiar 'Madrid' por cualquier otra ciudad
    get_weather(api_key, city)