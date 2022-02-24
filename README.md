Flask microservis ve OpenLayer Haritası 

docker-compose ile container network oluşturma 

1. Her container için Docker dosyasını oluştur.

2. Her container'i kapsayan docker-compose.yml dosyasını oluştur.

3. "docker-compose build" komutu ile ilgili image dosyalarını oluştur. 
     - Build işlemi sırasında yaml dosyası içinde belirtilen volume varsa "docker volume create --name=volume-data"  komutunu uygula
	 - Flask uygulamasının çalışabilmesi için app.py dosyası içinde host='0.0.0.0' olarak belirtilmiş olmalı. 

4. "docker-compose up"  komutu ile containerları çalıştır. 
   "docker-compose down" ile containerları durdurabilirsin. 
   
