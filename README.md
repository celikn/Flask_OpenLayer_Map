Flask ve OpenLayer ile Web Map Uygulaması (Docker-based)

Uygulama Harita Görünümü

<img src='/flask/static/images/Adana.png'>

<img src='/flask/static/images/Amsterdam.png'>

docker-compose ile container network oluşturma

1. Her container için Dockerfile dosyası bulunmaktadır.

2. Her container'i kapsayan docker-compose.yml dosyası bulunmaktadır.

3. "docker-compose build" komutu ile ilgili image dosyalarını oluşturunuz. 
    - Build işlemi sırasında yaml dosyası içinde belirtilen volume varsa "docker volume create --name geoserver-data" komutunu uygulayınız.
	 - Flask uygulamasının çalışabilmesi için app.py dosyası içinde host='0.0.0.0' olarak belirtilmiş olmalıdır.

4. "docker-compose up"  komutu ile containerları çalıştırabilirsiniz. 
   "docker-compose down" ile containerları durdurabilirsiniz. 
   

backupfiles içerisinde geoserver data_dir dosyası ve postgis backup dosyası bulunmaktadır. 

1. Geoserver container'i oluştuktan sonra ilgili container içindeki katman ve style'ler tutan data_dir dosyasının backupfiles içindeki ile değiştirilmesi gerekmektedir.

  İlgili dosyayı unzip yapınız.  "docker cp container_id:/data_dir/.  /opt/geoserver/data_dir" komutu ile gerekli style ve katmanları kopyalayabilirsiniz.  

2. PostGIS container'i oluştuktan sonra PGADMIN ile erişilip 'getirdb' adında database oluşturun ve backupfiles içindeki backup dosyasını restore yapınız. 



(Not: javascript folder'i içerisinde bing key içeren config.js dosyası ve içerisine bing key içeren aşağıdaki obje eklenmelidir.)
var config = { 
    bingKey: "yourbingkey"
}

Bu işlemler sonrasında uygulama localhost:5000 üzerinde çalışıyor olacaktır. 
