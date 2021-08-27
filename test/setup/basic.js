const basicPage = require('../pageobjects/basic.page');
const generateTestFile = require('../../TestFileGenerator.js');

describe('Create the basic gcweb and gcintranet test pages', () => {
    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-basic-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-basic-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-basic-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-basic-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-app-basic-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-app-basic-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-app-basic-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-app-basic-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });
});