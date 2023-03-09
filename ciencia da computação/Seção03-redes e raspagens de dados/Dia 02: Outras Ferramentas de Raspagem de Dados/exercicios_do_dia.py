# Exercício 1:
# Com o Selenium, faça uma requisição para o endpoint “https://quotes.toscrape.com/“
#  e imprima a primeira citação que aparece na página.
from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.firefox()


def scrape(url):
    firefox.get(url)
    quote = firefox.find_element(By.CLASS_NAME, "text").get_attribute("innerHTML")

    print(quote)


scrape("https://quotes.toscrape.com/")


# Exercício 2:
# Imprima todos os parágrafos da página
# “https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/“.
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

options = Options
options.add_argument("--headless")

firefox = webdriver.Firefox(options=Options)


def scrape(url):
    firefox.get(url)
    paragraphs = firefox.find_elements(By.TAG_NAME, "p")

    for paragraph in paragraphs:
        print(paragraph.text)


scrape(
    "https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"
)


# Exercício 3:
#  Utilizando a ferramenta Selenium, no site “https://diolinux.com.br/“,
# faça a extração dos campos título, link para o post, trecho exibido de cada post da página inicial.
from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.firefox()


def scrape(url):
    firefox.get(url)

    posts = []
    for post in firefox.find_elements(By.CLASS_NAME, "post-outer"):
        new_item = dict()
        new_item["title"] = (
            post.find_element(By.CLASS_NAME, "entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )
        new_item["link"] = (
            post.find_element(By.CLASS_NAME, "entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
        new_item["excerpt"] = post.find_element(
            By.CLASS_NAME, "entry-excerpt"
        ).get_attribute("innerHTML")
        posts.append(new_item)
    return posts


print("https://diolinux.com.br/")


# Exercício 4:
# Com o Beautiful Soup, faça a extração de todos os links da página “https://pt.wikipedia.org/wiki/Rock_in_Rio”
import requests
from bs4 import BeautifulSoup

html = requests.get("https://pt.wikipedia.org/wiki/Rock_in_Rio")

URL = "https://pt.wikipedia.org"
html = requests.get(f"{URL}/wiki/Rock_in_Rio")

page = html.text
bs_page = BeautifulSoup(page, "html.parser")


def create_url(url: str, urn: str) -> str:
    """Creates an URL from a URN and a URI

    Parameters
    ----------
    url : str
        Universal Resource Locator
    urn : str
        Universal Resource Name

    Returns
    -------
    str
        Universal Resource Identifier (URL)
    """

    url = url[:-1] if url[-1] == "/" else url
    urn = urn[1:] if urn[0] == "/" else urn
    return f"{url}/{urn}"


def transform_wiki_links(link: str) -> str:
    return link if link[:4] == "http" else create_url(URL, link)


links = [
    transform_wiki_links(anchor["href"])
    for anchor in bs_page.findAll("a")
    if anchor.get("href") is not None
]

for link in links:
    print(link)
