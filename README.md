# todo-react-dj
A Simple TODO app buit using ReactJS and Django

### Heroku 

#### Deployment 

```
heroku create todo-react-dj
heroku git:remote -a todo-react-dj
heroku buildpacks:add --index 1 heroku/nodejs
```
#### Heroku cli scale and status 

```
heroku ps 
heroku ps:scale web=0
```

### React App

#### Build 

```
yarn build
```

#### Start React project 

```
yarn start 
```

### Django App

#### Install Djanogo 

[Django](https://docs.djangoproject.com/en/3.2/howto/windows/)

```
py -m pip install Django
py -m venv venv
source venv/Scripts/activate
py -m pip install --upgrade pip
pip3 install pipenv
pip install -r requirements.txt
```
To test the Django app - 

```
py manage.py startapp todo
py manage.py migrate
py manage.py runserver
```


### References for developing app
[Heroku Docs](https://devcenter.heroku.com/articles/how-heroku-works)