javascript:(function()%7B(function()%20%7Bvar%20a%20%3D%20window.open('about%3Ablank').document%3Ba.write('%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3Ctitle%3ESave%20State%3C%2Ftitle%3E%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%22%20%2F%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E')%3Ba.close()%3Bvar%20b%20%3D%20a.body.appendChild(a.createElement('pre'))%3Bb.style.overflow%20%3D%20'auto'%3Bb.style.whiteSpace%20%3D%20'pre-wrap'%3Bb.style.wordBreak%20%3D%20'break-word'%3Bb.appendChild(a.createTextNode(btoa(JSON.stringify(window.localStorage))))%3B%7D)()%7D)()