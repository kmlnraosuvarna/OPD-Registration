const cacheName = 'opdbill-20200616-19';

const urlsToCache = [
    '/User Interface/Assets/img/Brand_Logo.png',       
    '/User Interface/Assets/redmond/jquery-ui-1.7.1.custom.css',
    '/User Interface/Assets/iconfont/css/animation.css', 
    '/User Interface/Assets/iconfont/css/fontello.css', 
    '/User Interface/Assets/css/SuToaster.css',
    '/User Interface/Assets/bedicons/style.css',
    '/User Interface/Assets/css/Theme1Style.css',
    '/User Interface/Assets/css/color1.css',
    '/User Interface/Assets/tooltipster/tooltipster.bundle.min.css',
    '/User Interface/Assets/css/shortcut.css', 
    '/User Interface/Assets/lis/styles.css',
     '/User Interface/Assets/Jtblcss/OP_Quick_Grid.css',
	'/User Interface/Assets/js/angular.min.js',
    '/User Interface/Assets/js/jquery.js',
    '/User Interface/Assets/js/underscore.min.js',
    '/User Interface/Assets/js/Theme1.js',
    '/User Interface/Assets/js/json.js',
    '/User Interface/Assets/js/lookup.js',
    '/User Interface/JSScript/NurseStationScripts/NsStationAutoArrowSelection.js',
    '/User Interface/JSScript/DashBoardScripts/AutoCompletion.js',
    '/User Interface/Assets/js/Global.js',
    '/User Interface/Assets/js/FileSaver.js',
    '/User Interface/Assets/js/ExtendedJScript.js',
    '/User Interface/Assets/js/Suvarnatable.js',    
    '/User Interface/js/jquery.webcam.js',
    '/User Interface/JSScript/CorporateScripts/AutoArrowSelection.js',
    '/User Interface/JSScript/PaymentScript.js',
    '/User Interface/JSScript/AgeCalScript_new.js',
    '/User Interface/JSScript/Transaction.js',
    '/User Interface/JSScript/CompanyPolicies.js',
    '/User Interface/JSScript/jquery.ui.core.min.js',
    '/User Interface/JSScript/CorporateScripts/jquery.ui.datepicker.js',
    '/User Interface/JSScript/DashBoardScripts/TextBoxAutoCompletion.js',
    '/User Interface/JSScript/date.js',
    '/User Interface/JSScript/FrontOfficeScripts/Changes/PatientOptions.js',
     '/User Interface/Assets/tooltipster/tooltipster.bundle.min.js', 
    '/User Interface/Private/FrontOffice/OPDBillNew.aspx',
    '/User Interface/JSScript/FrontOfficeScripts/ServicesGridNew.js'

];


//?ID=Opd%20Registration%20And%20Billing%20New&DOC_ID=2354&DOC_TYPE=REPORT
 
self.addEventListener('install', event => {

    //console.log('INSTALL INVOKING.....');
    self.skipWaiting();

    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(urlsToCache)),
    );
});

self.addEventListener('activate', event => {
    event.waitUntil((async() => {
        //const keys = await caches.keys();
        //const jobs = keys.map(key => key !== cacheName ? caches.delete(key) : Promise.resolve());
        //return Promise.all(jobs);

        return true;

    })());
});

self.addEventListener('fetch', event => {
    event.respondWith((async() => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) return cachedResponse;

        try {
            const response = await fetch(event.request);
            return response;
        } catch (err) {
            const url = new URL(event.request.url);

            const pathname = url.pathname;
            const filename = pathname.substr(1 + pathname.lastIndexOf('/')).split(/\#|\?/g)[0];
            const extensions = ['.html', '.css', '.js', '.json', '.png', '.ico', '.svg', '.xml','.aspx'];

            if (url.origin === location.origin && !extensions.some(ext => filename.endsWith(ext))) {
                const cachedIndex = await caches.match('/');
                if (cachedIndex) return cachedIndex;
            }

            throw err;
        }
    })());
});