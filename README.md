# todo-react-dj

A Simple TODO app buit using ReactJS and Django

## Heroku

### Deployment

#### Setting up heroku environment

Create app in heroku 
link existing git repo to heroku app to deploy on push 
add build pack nodejs 
add buils pack python 

```
heroku create todo-react-dj
heroku git:remote -a todo-react-dj
heroku buildpacks:add --index 1 heroku/nodejs
heroku buildpacks:add --index 2 heroku/python
```

#### Heroku cli scale and status

```
heroku ps 
heroku ps:scale web=0
```

## React App


#### install 

```
brew install node 
npm install --global yarn
```

#### Build

```
yarn build
```

#### Start React project

```
yarn start 
```

## Django App

### Install Django

Reference link to install [Django](https://docs.djangoproject.com/en/3.2/howto/windows/)

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
py manage.py migrate or if migrations are not ready run `py manage.py makemigrations`
py manage.py runserver
```
### Running django project

```
source /venv/Scripts/activate
python manage.py runserver
```


### References

[Heroku Docs](https://devcenter.heroku.com/articles/how-heroku-works)

[Django](https://docs.djangoproject.com/en/3.2/howto/windows/)

https://dev.to/mdrhmn/deploying-react-django-app-using-heroku-2gfa

https://github.com/mdrhmn/react-dj-todoapp