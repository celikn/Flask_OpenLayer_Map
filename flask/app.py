from flask import Flask
from flask import render_template

app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"

app.jinja_env.globals['config'] = 'config.js'

@app.route('/')
def home():
   return render_template('index.html')



if __name__ == '__main__':
    ##app.run(debug=True,port=5000)  #in virtualenv
    app.run(debug=True,port=5000,host='0.0.0.0')  #in docker
