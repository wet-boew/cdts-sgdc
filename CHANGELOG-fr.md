# SGDC : Journal des modifications

## v5.0.2

- Mise à jour [BOEW](https://github.com/wet-boew/wet-boew/releases/) a v4.0.81.

## v5.0.1

- Mise à jour [BOEW](https://github.com/wet-boew/wet-boew/releases/) a v4.0.79.
- Modifications et optimisations internes
- Corrections de bogues

## v5.0.0

- **IMPORTANT** **RUPTURE DE COMPATIBILITÉ** Exitscript n'utilise plus targetUrl dans le cadre de la chaîne de requête pour transmettre le lien de destination. Veuillez visiter la [page d'exemple](https://cdts.service.canada.ca/app/cls/WET/gcweb/v5_0_0/cdts/samples/exitscript-fr.html) pour tous les détails.
- Remplacement du bouton « Signaler un problème » par le nouvel outil de rétroaction sur la page. L'outil de rétroaction sur la page est facultatif et sera masqué à moins qu'il ne soit explicitement activé et que d'autres conditions sont remplies. Veuillez visiter la [page d'exemple](https://cdts.service.canada.ca/app/cls/WET/gcweb/v5_0_0/cdts/samples/feedback-and-share-fr.html) pour plus d’informations.
- Mise à jour [BOEW](https://github.com/wet-boew/wet-boew/releases/) a v4.0.70.1.
- Modifications et optimisations internes
- Corrections de bogues

## v4.1.0

- Introduction d'une nouvelle façon de référencer **OPTIONNEL** le SGDC qui evite aux clients le besoin d'utiliser `document.write`, d'avoir à appeler plusieurs fonctions du SGDC et optionellement le besoin pour des scripts directs sur la page. **La rétrocompatibilité aux fonctions séparées du SGDC est préservée.** Pour plus de détails, consulter la documentation pour [GCWeb](https://cenw-wscoe.github.io/sgdc-cdts/docs/internet-fr.html) and [GCIntranet](https://cenw-wscoe.github.io/sgdc-cdts/docs/intranet-fr.html) ainsi que les [pages d'examples correspondantes](https://github.com/wet-boew/cdts-sgdc/blob/master/public/gcweb/samples/nodoc-write-fr.html) (les autres exemples de pages utilisent toujours document.write et seront mis à jour plus tard).
- Ajout du support pour "Sub Resource Integrity (SRI)"
  - Le SGDC peut maintenant inclure les valeurs SRI lors de l'inclusion de sous-libraries et fichiers internes sur la page.  Ceci est contrôlé par le paramètre `sriEnabled` dans l'appel à "refTop", "refFooter" ou la nouvelle fonction "setup".
  - Pour les clients qui veulent utiliser SRI pour référencer le SGDC, les valeurs pour les fichiers publiques sont disponible pour [GCWeb](https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_1_0/cdts/SRI-INFO.md) et [GCIntranet](https://cdts.service.canada.ca/app/cls/WET/gcintranet/v4_1_0/cdts/SRI-INFO.md).
- Mise à jour [BOEW](https://github.com/wet-boew/wet-boew/releases/) a v4.0.63.
- Modifications et optimisations internes
- Corrections de bogues

## v4.0.47

- **IMPORTANT** Le pied de page du site GCWeb a été mis à jour pour refléter les changements introduits dans la version 4 du pied de page WET. Ces changements seront appliqués automatiquement. Pour plus d'informations, veuillez consulter la documentation WET : https://wet-boew.github.io/GCWeb/sites/footers/footers-en.html
- Mise à jour [BOEW](https://github.com/wet-boew/wet-boew/releases/) a v4.0.56.5.
- Modifications et optimisations internes
- Corrections de bogues

## v4.0.46

- Mise à jour [BOEW](https://github.com/wet-boew/wet-boew/releases/) a v4.0.55
- Ajout d'un paramètre optionnel *hidePlaceholderMenu* au thème GCIntranet, sous-thème EDSC. Lorsqu'il est défini sur true, ce paramètre est utilisé pour masquer le menu d'espace réservé pendant le chargement d'un menu personnalisé.
- Modifications et optimisations internes
- Corrections de bogues

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
