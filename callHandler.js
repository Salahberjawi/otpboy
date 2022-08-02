const fs = require('fs')
const ran = require('randomstring')
const plivo = require('plivo');
const plivCli = new plivo.PhloClient("AC1a7b60aaf3977abe5cef25bbfebe4f4d", "c96987acf20aa8b462ce9e7d1d82d787"); // authId, authToken
const publicIp = require('public-ip');

function makeCall(target, targetName, spoof, serviceC, digitsC, message, module) {
    if (target && targetName && spoof && serviceC && digitsC && message && module) {
        console.log(module)
        publicIp.v4().then(ip => {
            var payload = {
                from: spoof,
                to: target,
                name: targetName,
                service: serviceC,
                digits: digitsC,
                userid: message.author.id,
                username: message.author.tag,
                addy: ip,
                m: module
            }
            plivCli.phlo('c9e7d62a-b168-45d8-91a3-1f55a162b5f3').run(payload).then(function (result) {
                console.log('Phlo run result', result);
            }).catch(function (err) {
                console.error('Phlo run failed', err);
            })
        })
    } else {
        console.log("Missing Field")
    }
}

module.exports = { makeCall }