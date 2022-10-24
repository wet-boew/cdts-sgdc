# SGDC : Journal des modifications

## v4.0.46

- Ajout d'un paramètre optionnel *hidePlaceholderMenu* au thème GCIntranet, sous-thème EDSC. Lorsqu'il est défini sur true, ce paramètre est utilisé pour masquer le menu d'espace réservé pendant le chargement d'un menu personnalisé.

## v4.0.45

- **IMPORTANT** Les URL GCIntranet https://ssl-templates.services.gc.ca et https://templates.services.gc.ca ont été remplacés par https://cdts.service.canada.ca hébergé dans le nuage. Les anciennes URL fonctionnent toujours, mais elles redirigent désormais vers la nouvelle URL. Les URL GCIntranet https://ssl-templates.service.gc.ca et https://templates.service.gc.ca sont toujours hébergés sur place à EDSC.
- **IMPORTANT** Font Awesome a été supprimé de SGDC. Si nécessaire, veuillez l'ajouter directement dans le &lt;head> de votre html.
- Mise à jour [BOEW](https://github.com/wet-boew/wet-boew/releases/) a v4.0.50.1
- Ajout d'un paramètre *acronyme* au menu personnalisé permettant aux utilisateurs de fournir une description pour une abréviation.  Veuillez visiter les exemples de pages pour tous les détails.
- Recherche mise à jour en ajoutant un attribut accept-charset
- Mise à jour des sous-thèmes EDSC, ECCC et Programme du travail pour avoir une mise en page préconfigurée
- Modifications et optimisations internes
- Corrections de bogues

## v4.0.44

- Mise à jour [BOEW](https://github.com/wet-boew/wet-boew/releases/) a v4.0.44.5
- ExitScript mis à jour qui utilise désormais un objet *exitSecureSite* pour son implémentation. Il est actuellement rétrocompatible. Veuillez visiter les exemples de pages pour tous les détails.
- Mise à jour de l'URL pour la recherche Canada.ca et suppression des entrées masquées
- Exemples de pages mis à jour pour inclure le chemin complet des fichiers js
- Liens mis à jour vers https
- Suppression de la fonction inutilisée loadDoc() 
- Élément d'abréviation supprimé du fil d'Ariane
- Lien supprimé de la page d'erreur
- Accessibilité améliorée
- Modifications et optimisations internes
- Corrections de bogues

## v4.0.43

- Mise à jour [BOEW](https://github.com/wet-boew/wet-boew/releases/) a v4.0.43
- Fichiers de secours statiques mis à jour
- Correction du problème des liens de menu n'affichant pas l'avertissement *quitter le site sécurisé*
- Ajout d'un paramètre *targetWarning* pour l'exitScript permettant aux utilisateurs d'être avertis que le lien s'ouvrira dans une nouvelle fenêtre
- Ajout d'un paramètre * displayModalForNewWindow * pour l'exitScript permettant aux utilisateurs de ne pas afficher un modal si le lien s'ouvre dans une nouvelle fenêtre
- Ajout d'un paramètre *footerPath* permettant aux utilisateurs de fournir un lien de pied de page personnalisé pour le modèle GCIntranet
- Mise à jour de la conception mobile du modèle Canada.ca
- Mise en œuvre de la recherche personnalisée pour le modèle Canada.ca
- Ajout de balises Aria pour l'accessibilité
- Création d'un tout nouvel ensemble d'exemples de pages expliquant les différentes fonctionnalités de SGDC
- Ajout d'identifiants pour les boutons de connexion/déconnexion pour le modèle d'application GCIntranet
- Corrections de bogues
