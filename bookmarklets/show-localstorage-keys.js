javascript:(function()%7B!function()%7Bvar%20a%3Dwindow.open(%22about%3Ablank%22).document%3Ba.write('%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3Ctitle%3ESave%20State%3C%2Ftitle%3E%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%22%20%2F%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E')%2Ca.close()%3Bvar%20b%3Da.body.appendChild(a.createElement(%22pre%22))%3Bb.style.overflow%3D%22auto%22%2Cb.style.whiteSpace%3D%22pre-wrap%22%2Cb.style.wordBreak%3D%22break-word%22%3Bvar%20c%3D%7B%7D%3BObject.keys(window.localStorage).map(function(a)%7Bc%5Ba%5D%3D!0%7D)%3Bvar%20d%3DJSON.stringify(c)%3Bb.appendChild(a.createTextNode(d))%7D()%7D)()%3B