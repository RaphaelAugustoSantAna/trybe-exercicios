# Exercício 1:
# Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu conteúdo de forma legível.

import requests

response = requests.get("https://httpbin.org/encoding/utf8 ")
print(response.text)


# Exercício 2:
# Faça uma requisição ao recurso usuários da API do Github (https://api.github.com/users),
# exibindo o username e url de todos os usuários retornados.

import requests

response = requests.get("https://api.github.com/users")
users = response.json()
for user in users:
    print(f"{user['login']} {user['url']}")


# Exercício 3:
# Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP
#  como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador.
# Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers
# e verifique se foi bem sucedida.

import requests

response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
assert "bot detected" not in response.text


#  Exercício 4:
# Baseando-se em uma página contendo detalhes sobre um livro
# (http://books.toscrape.com/catalogue/the-grand-design_405/index.html),
# faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.

import requests
import parsel

URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()

print(title, price, description, cover, sep=",")
