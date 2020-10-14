function clickA() {
    $(document.body).on("click", "a", function (ev) {        
        exitWarning(ev, this.href);
    })
}

function exitWarning(ev, h) {
    var
    hh = getHost(h),
    hu = getHost(document.URL),
    o = document.querySelector('script[data-id="exitScript"]'),
    e = o.getAttribute("data-token").toLowerCase(),
    d = o.getAttribute("data-token-domains").toLowerCase(),
    dm = (o.getAttribute("data-token-modal").toLowerCase()=='true');

    // Same Hosts or Exception Domains
    if ((hh == hu) || (d.replace(/ /g, "").split(",").indexOf(hh) > -1))
    {
        ev.preventDefault();
        self.location = encodeURI(h)
    }
    else 
    { // Different hosts
        if (dm) 
        { //display modal is true
            // Pop the modal
            $("#sExitModalLink").trigger(
                "open.wb-lbx",
                //[
                    [{
                        src: "#sExitModal",
                        type: "inline"
                    }]
                //]
            );
        
            ev.preventDefault() //Stop event propagation
        
            $("#sExitModal").on("click", "#eOK", function () {
                if (e == "undefined" || e.length < 1)
                    self.location = encodeURI(h)
                else
                    self.location = encodeURI(e + "?targetUrl=") + encodeURIComponent(h);
            });

        } 
        else 
        { //display modal is false
            if (e == "undefined" || e.length < 1) 
            {
                ev.preventDefault();
                self.location = encodeURI(h)
            }
            else 
            {
                ev.preventDefault();  
                self.location = encodeURI(e + "?targetUrl=") + encodeURIComponent(h);
            }
        }
    }
}

//Todo: Remove subDomain (www, www1, etc...)
function getHost(u) {
    var ho;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (u.indexOf("//") > -1) {
        ho = u.split('/')[2];
    }
    else {
        ho = u.split('/')[0];
    }

    //find & remove port number
    ho = ho.split(':')[0];
    //find & remove "?"
    ho = ho.split('?')[0];

    return ho.toLowerCase();
}
