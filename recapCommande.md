### Déffinitions et exemples des commandes Unix vu dans la vidéo :
# grep
La commande grep permet de rechercher des expressions régulières dans un fichier ou dans un ensemble de fichiers.

Exemple : grep "motif" fichier.txt

Cette commande va afficher toutes les lignes du fichier fichier.txt contenant le motif spécifié.
---------------------------

# sort
La commande sort permet de trier les lignes d'un fichier dans l'ordre alphabétique ou numérique.

Exemple : sort fichier.txt

Cette commande va trier les lignes du fichier fichier.txt par ordre alphabétique.
---------------------------

# wc
La commande wc permet de compter le nombre de lignes, de mots et de caractères dans un fichier.

Exemple : wc fichier.txt

Cette commande va afficher le nombre de lignes, de mots et de caractères dans le fichier fichier.txt.
---------------------------

# <, > et <<, >> (les chevrons = input, output)
Les symboles < et > permettent de rediriger l'entrée et la sortie d'une commande vers des fichiers.

Exemple : commande < fichier_entree.txt > fichier_sortie.txt

Cette commande va exécuter la commande commande en utilisant le fichier fichier_entree.txt comme entrée et en enregistrant la sortie dans le fichier fichier_sortie.txt.

Les symboles << et >> permettent de rediriger l'entrée et la sortie d'une commande vers des fichiers en ajoutant ou en concaténant le contenu.

Exemple :

bash
Copy code
commande << EOF >> fichier.txt
ligne1
ligne2
ligne3
EOF
Cette commande va exécuter la commande commande en utilisant les lignes spécifiées comme entrée et en ajoutant la sortie à la fin du fichier fichier.txt.
---------------------------

# Commandes de gestionnaires de paquet RPM
Le gestionnaire de paquet RPM permet d'installer, de supprimer et de mettre à jour des paquets sur les distributions Linux basées sur RPM, comme Red Hat, CentOS et Fedora.

Exemples : rpm -i package.rpm

Cette commande va installer le paquet package.rpm.

rpm -e package
Cette commande va supprimer le paquet package.

rpm -U package.rpm
Cette commande va mettre à jour le paquet package.rpm s'il est déjà installé.
---------------------------

# DPKG
Le gestionnaire de paquet DPKG permet d'installer, de supprimer et de mettre à jour des paquets sur les distributions Linux basées sur Debian, comme Ubuntu et Debian.

Exemples : dpkg -i package.deb
Cette commande va installer le paquet package.deb.

dpkg -r package
Cette commande va supprimer le paquet package.

dpkg -P package
Cette commande va supprimer complètement le paquet package.
---------------------------

PACMAN
Le gestionnaire de paquet PACMAN permet d'installer, de supprimer et de mettre à jour des paquets sur les distributions Linux basées sur Arch, comme Manjaro et Arch Linux.

Exemples : pacman -S package
Cette commande va installer le paquet package.

pacman -Rs
Cette commande va désinstaller un packet et toutes ses dépendances ;

Il est important de noter que cette commande peut potentiellement désinstaller des packages importants et causer des problèmes dans le système, il est donc recommandé de faire attention aux packages qui sont supprimés et de vérifier les avertissements avant de continuer.
---------------------------

## Exemples plus pousser :

# Exemples d'association de commandes
Recherche de fichiers dans le répertoire /usr/bin/ contenant une chaîne de caractères spécifique
La commande grep permet de rechercher une chaîne de caractères dans un fichier ou un ensemble de fichiers. Nous pouvons l'utiliser pour rechercher des fichiers contenant une chaîne de caractères spécifique dans le répertoire /usr/bin/.

commandes: cd /usr/bin/
grep -rnw . -e "string"

cd /usr/bin/ : change le répertoire courant en /usr/bin/.
grep : commande de recherche.
-rnw : option de recherche récursive dans le répertoire courant.
. : indique que la recherche doit être effectuée à partir du répertoire courant.
-e "string" : spécifie la chaîne de caractères à rechercher.
---------------------------

# Tri d'un fichier dans l'ordre décroissant et affichage du nombre de lignes
La commande sort permet de trier les lignes d'un fichier. Nous pouvons l'utiliser pour trier un fichier dans l'ordre décroissant et afficher le nombre de lignes avec la commande wc.

commandes: sort -r file.txt | wc -l

sort : commande de tri.
-r : option de tri inverse, tri en ordre décroissant.
file.txt : fichier à trier.
| : redirige la sortie de la commande sort vers l'entrée de la commande wc.
wc -l : commande qui compte le nombre de lignes.
---------------------------

# Copie de la sortie d'une commande vers un fichier
La commande > permet de rediriger la sortie d'une commande vers un fichier. Nous pouvons l'utiliser pour copier la sortie d'une commande dans un fichier.

commandes: ls -l > listing.txt

ls -l : commande qui affiche la liste des fichiers et des répertoires avec des détails.
">" : redirige la sortie de la commande ls vers le fichier listing.txt.
---------------------------

# Ajout de contenu dans un fichier existant
La commande >> permet d'ajouter du contenu à un fichier existant. Nous pouvons l'utiliser pour ajouter des informations à un fichier de configuration, comme le fichier .bashrc.

commandes: echo "export PATH=$PATH:/new/directory" >> ~/.bashrc

echo : commande qui affiche du texte à l'écran.
"export PATH=$PATH:/new/directory" : texte à ajouter dans le fichier .bashrc.
">>" : ajoute le texte à la fin du fichier .bashrc.
~/.bashrc : fichier de configuration du shell Bash.
---------------------------

# Utilisation d'expressions régulières pour rechercher une chaîne de caractères
La commande grep peut utiliser des expressions régulières pour effectuer des recherches plus avancées. Nous pouvons l'utiliser pour rechercher une chaîne de caractères qui commence par un caractère spécifique dans un fichier.

commandes: grep "^a" file.txt

^a : expression régulière qui recherche les chaînes de caractères.