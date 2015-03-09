export default function (message) {

  var digest = forge.md.md5.create();

  digest.update(message);
  return digest.digest().toHex();
};
