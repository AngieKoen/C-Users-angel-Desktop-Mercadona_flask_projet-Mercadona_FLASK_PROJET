# MARCADONA_FLASK_PROJET

Test 1ère création étudiant web app Mercadona_FLASK_PROJET sur Vscode, via mon PC Windows avec le profil 'businessdevops7@gmail.com'
Voici la structure de mon projet :

Mercadona_flask_projet/
Catalogue               #  images produits
app.py                  # Point d'entrée de l'application Flask
models.py               # Définition du modèle de base de données (Sqlite.3)
templates
index.html              # Template principal de l'application (Fichier racine du projet) 
script
styles.css              # Fichiers CSS, JS,Setting JSON 
requirements.txt        # Liste des dépendances du projet
README.md               # Documentation du projet/Autres documents Projet Flask en général


Mon projet est une application web utilisant Flask et SQLAlchemy pour gérer ma base de données de produits (Catalogue). J'ai décidé d'utiliser SQLAlchemy car c'est un outil essentiel pour les développeurs Python qui travaillent avec des bases de données, et il simplifie les intéractions avec les bases de données tout en offrant une grande flexibilité et de puissantes fonctionnalités de gestion des données.

## Prérequis
Avant de lancer l'application, il faut s'assurer d'avoir installé les éléments suivants :
 
- [Python 3.x](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installation/)

## Installation

1/Créez un environnement virtuel:   

python -m venv venv
# Pour Windows
venv\Scripts\activate
# Pour macOS/Linux
source venv/bin/activate

2/ Ouvrez le terminal ou l'invite de commande et naviguez vers le répertoire où se trouve le fichier 'app.py' : 

from flask import Flask
app = Flask(__name__)
@app.route('/')
def index():
    return "Hello world !"
if __name__ == "__main__":
    app.run()

Afin de vérifier si Flask fonctionne, éxutez le script suivant en s'assurant que l'environnement virtuel est activé :

pip install flask;

3/Il faut absolument installer également les dépendances suivantes:

-Flask
-Flask-SQLAlchemy

4/Pour initialiser ma base de données, vous pouvez utiliser le shell Flask. Voici les étapes à suivre :
Ouvrez le terminal et activez votre environnement virtuel si ce n'est pas déjà fait.
Lancez un 'flash shell' Python, parce qu'au niveau de la configuration de ma base de données, mon application utilise SQLite par défaut.


5/Assurer-vous que l'environnement virtuel soit activé pour pouvoir lancer l'application, en exécutant la commande : 
'''bash  : flask run

6/ Par défaut, mon application est accessible à l'adresse http://127.0.0.1:5000/.

