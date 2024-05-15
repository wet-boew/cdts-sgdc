# Releasing (for developers)

This guide is intended for developers working on CDTS who have permission to deploy a release.

The release will be done twice; one for ssl-templates and one on canada.ca. The initial preparation wil be the same, however.

## Update WET

The first step of releasing will be to update WET to the latest version.
1. Create an issue on Github relating to the WET changes you are about to make. Create a branch you will work on, off of master.
2. Locally, switch to your newly created working branch and delete all the content found under **public/wet/wet-boew**.
3. Go to https://github.com/wet-boew/GCWeb/releases and download the latest WET release. The zip folder to download is *themes-dist-XX.X.X-gcweb.zip*. This can be found under the Assets section.
4. Unzip this folder and copy the following folders to **public/wet/wet-boew** in your CDTS repository.
    - ajax
    - img
    - GCWeb/assets
    - GCWeb/css
    - GCWeb/fonts
    - GCWeb/js
5. Copy the content of the following folders to their respective folders in **public/wet/wet-boew**.
    - wet-boew/assets
    - wet-boew/css
    - wet-boew/fonts
    - wet-boew/js
6. Now that WET has been updated, run all the tests locally. Also, go through all the samples pages manually and visually inspect each page. When everything looks ready, commit and push your code, open a pull request and submit for review.

## Update the menu and footer files

Update the external files (menus, footer) by downloading them from their source web sites. Go to the root of your CDTS directory, open git-bash and run `npm run update-extfiles`. Run `npm run test` to make sure no errors have been introduced with the updated links. Commit and push these changes.

## Update the Changelog

Update the changelog with all the fixes and changes that were done for that release. Commit and push your change, open a pull request and submit for review. Once the PR is merged, the release can now be done.

## Releasing on intranet

1. To release on the intranet (cdts.service.canada.ca), we have to push our final build files to the production repository containing all the previous CDTS versions. Start by cloning the following repository: https://github.com/wet-boew/cdts-sgdc-dist.git
2. Go back to the root of your CDTS directory, open git-bash and run `npm run build-prod`.
3. Copy the version folder from **dist/app/cls/WET/gcweb**. Go to your newly cloned repository and paste the folder to **dist/app/cls/WET/gcweb**.
4. Repeat step 3 for gcintranet.
5. Commit and push these changes and create a pull request.
6. Once the pull request has been merged, go to https://dev.azure.com/. Click on the CDTS project and go to pipelines. Select the cdts pipeline (under *Recently run pipelines*).
7. Click the *Run pipelines* button on the top right and a side menu will show. Under *Branch/tag* dropdown option, select *update-build-agent* and then click the *Run* button.
8. Once the pipeline has successfully ran, you can verify the release on https://cdts.service.canada.ca/app/cls/WET/gcweb/vX_X_XX/cdts/samples/

## Releasing on canada.ca

1. To release on canada.ca, we have to push our final build files to the production repository managed by Service Canada. Start by forking the following repository: https://github.com/ServiceCanada/gcci-design-cdts
2. Go back to the root of your CDTS directory, open git-bash and run `npx grunt --stack build-prod --cdts_samples_cdnenv=canada`.
3. Copy the version folder from **dist/app/cls/WET/gcweb**. Go to your newly forked repository and paste the folder to **gcci-design-cdts/jcr_root/etc/designs/canada/cdts/gcweb**.
4. Commit and push these changes and create a pull request. Note the pull request URL and send an email to one of the WET contacts asking to merge this PR and note the PR URL in the email.
5. The member of the WET team merging the PR will notify you once the build is in staging. They will ask for your approval. To test, go to the root of your CDTS repository, open git-bash and run `npx grunt --stack build-prod --cdts_samples_cdnenv=https://canada-aem-s3-stage.adobecqms.net/etc/designs/canada/cdts/gcweb/vX_X_XX/`. This will point your sample pages to the staging environment. You should now be able to test the sample pages locally.
6. Once you are satisfied, reply back to the email confirming that everything looks good to go. They will notify you once the release is done.

## Update the documentation
1. The CDTS [documentation site](https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html) needs to be updated. Start by cloning the following repository:  https://github.com/cenw-wscoe/sgdc-cdts
2. The following changes are required:
    - Update the version in **ajax/data.json**
    - Go to **docs/index-en.html**. We maintain the last 3 versions. Therefore, under the *Current CDTS supported versions* section, add the release notes for the latest WET and remove the last version.
    - Do the same thing for the *Supported Dependecies* section
    - Update the static files. Copy the static files from your CDTS repository **dist/app/cls/WET/gcweb/vX_X_XX/cdts/static** and put them in a zip folder. Place that zip folder into your documentation repository **GCWeb/static**. Perform this step for GCIntranet as well. After, go back to **docs/index-en.html**. Under the *Static pages (version/run)* section, add a link that points to the static files of the latest version and remove the link that points to the static files of the oldest version (the fourth last version in this case).
3. Create a release on https://github.com/wet-boew/cdts-sgdc/releases.

## Send the email
The last step of the version release is letting the clients know that the release is done. A sample email can be found in the CDTS GD mailbox. The email should be sent to the 'CDTS Release' Contacts group.

## Next Steps

### .NET and Java Templates
Once the CDTS release is done, the next step is to update the [.NET Templates](https://gccode.ssc-spc.gc.ca/iitb-dgiit/sds/GOCWebTemplates/DotNetTemplates) and [Java Templates](https://gccode.ssc-spc.gc.ca/iitb-dgiit/sds/GOCWebTemplates/JavaTemplates). The CDTS changelog should give an idea of what changes are required for the templates.

### Run version
Usually, the run version is released anywhere from 1 to 2 months after the initial release once all the bugs have been sorted out. For canada.ca, simply replace the wet-en.js and wet-fr.js files found in the run folder. The path for the run folder is **jcr_root/etc/designs/canada/cdts/gcweb/rn/cdts/compiled**. After copying the files over, complete the remaining steps (4-6) listed above under the *Releasing on canada.ca* section.
