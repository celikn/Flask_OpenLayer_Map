FROM python:3.7-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
# RUN apt update && apt install -y python3-pip
# RUN pip install --upgrade setuptools
# NOTE: the 2 RUN above are the 2 latest attempts to find a solution by using a RUN line.
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "-m" , "flask", "app", "--host=0.0.0.0"]