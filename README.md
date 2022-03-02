Flask ve OpenLayer ile Web Map Uygulaması (Docker-based)

Uygulama Harita Görünümü

<img src='/flask/static/images/Adana.png'>

<img src='/flask/static/images/Amsterdam.png'>

docker-compose ile container network oluşturma

1. Her container için Dockerfile dosyası bulunmaktadır.

2. Her container'i kapsayan docker-compose.yml dosyası bulunmaktadır.

3. "docker-compose build" komutu ile ilgili image dosyalarını oluşturunuz. 
   - Build işlemi sırasında yaml dosyası içinde belirtilen volume varsa "docker volume create --name=geoserver-data" ve "docker volume create --name=postgres_data_g" komutlarını uygulayınız. Eğer sistemde daha önceden eklemiş ilgili volume varsa  "docker volume prune" ile volume'leri siliniz. (Aksi halde ilgili veriler güncellenmemiş olacaktır. )
	 - Flask uygulamasının çalışabilmesi için app.py dosyası içinde host='0.0.0.0' olarak belirtilmiş olmalıdır.

4. "docker-compose up -d"  komutu ile containerları çalıştırabilirsiniz. 
   "docker-compose down" ile containerları durdurabilirsiniz. 
   
backupfiles içerisinde geoserver data_dir dosyası ve postgis backup dosyası bulunmaktadır. 

1. Build işlemi öncesinde: Flask folder'ı altındanki javascript folder'i içerisine bing key içeren config.js dosyası ve bu dosya içerisine de bing key içeren aşağıdaki obje eklenmelidir.
var config = { 
    bingKey: "yourbingkey"
}

2. Build işlemi öncesinde: Geoserver container'i oluştuktan sonra ilgili container içindeki katman ve style'ler tutan data_dir dosyasının backupfiles içindeki ile değiştirilmesi gerekmektedir.

3. Build işlemi sonrasında: PostGIS container'i oluştuktan sonra PGADMIN ile erişilip 'getirdb' adında database oluşmuş olacaktır. backupfiles içindeki backup dosyasını restore yapınız. 

  İlgili dosyayı unzip yapınız ve geoserver folder'ı altına taşıyınız. Dockerfile içindeki kopyalama komutları data_dir içinden ilgili dosyaları container içerisine kopyalayacaktır. 
  
  localhost'ta çalışan geoserver (http://localhost:8090/geoserver/web/) için ilgili datastore configurasyonlarının aşağıdaki gibi olduğundan emin olup yeniden kaydedin (Enabled tıklı değilse, enabled yapınız.)  

  <img src='/flask/static/images/GeoServerStoreConnection.png'>
   
Bu işlemler sonrasında uygulama (http://localhost:5000 üzerinde çalışıyor olacaktır. 
