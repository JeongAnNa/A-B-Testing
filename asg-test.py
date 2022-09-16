from locust import HttpUser, task

class HelloWorldUser(HttpUser):
    @task(2)
    def index(self):
        self.client.get('')
    @task(1)
    def health(self):
        self.client.get('health')