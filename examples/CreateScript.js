'use strict';

var run = function() {
  // replace '../dogecore' with 'dogecore' if you use this code elsewhere.
  var dogecore = require('../dogecore');
  var networks = require('../networks');
  var Script = dogecore.Script;
  var WalletKey = dogecore.WalletKey;
  var buffertools = dogecore.buffertools;
  var Address = dogecore.Address;
  var util = dogecore.util;
  var opts = {network: networks.testnet};

  var p = console.log;

  var wk = new WalletKey(opts);
  wk.generate();
  var wkObj = wk.storeObj();

  var s = Script.createPubKeyOut(wk.privKey.public);
  p('\nScript PubKey:');
  p('\tHex     : ' + buffertools.toHex(s.buffer));
  p('\tHuman   : ' + s.toHumanReadable());
  p('\tKey      -------------------------------');
  console.log ('\tPrivate: ' + wkObj.priv);
  console.log ('\tPublic : ' + wkObj.pub);
  console.log ('\tAddr   : ' + wkObj.addr);

  s = Script.createPubKeyHashOut(wk.privKey.public);
  p('\nScript PubKeyHash:');
  p('\tHex     : ' + buffertools.toHex(s.buffer));
  p('\tHuman   : ' + s.toHumanReadable());
  p('\tKey      -------------------------------');
  console.log ('\tPrivate: ' + wkObj.priv);
  console.log ('\tPublic : ' + wkObj.pub);
  console.log ('\tAddr   : ' + wkObj.addr);

  var wks=[];
  var pubs = [];
  for (var i =0; i<5; i++) {
    wks[i] = new WalletKey(opts);
    wks[i].generate();
    pubs.push(wks[i].privKey.public);
  }

  s = Script.createMultisig(3,pubs);
  p('\nScript MultiSig (3 out of 5 required signatures):');
  p('\tHex     : ' + buffertools.toHex(s.buffer));
  p('\tHuman   : ' + s.toHumanReadable());

  for (i =0; i<5; i++) {
    wkObj = wks[i].storeObj();
    p('\tKey ['+i+'] -------------------------------');
    console.log ('\tPrivate: ' + wkObj.priv);
    console.log ('\tPublic : ' + wkObj.pub);
    console.log ('\tAddr   : ' + wkObj.addr);
  }

  var hash = util.sha256ripe160(s.buffer);

  s = Script.createP2SH(hash);
  p('\nScript P2SH:');
  p('\tHex     : ' + buffertools.toHex(s.buffer));
  p('\tHuman   : ' + s.toHumanReadable());
  p('\tScript Hash: ' +  buffertools.toHex(hash));
  var a = new Address(networks.livenet.addressScript,hash);
  p('\tp2sh Addr: ' +  a.toString());
 
};

module.exports.run = run;
if (require.main === module) {
  run();
}
