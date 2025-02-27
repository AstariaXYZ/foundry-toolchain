const os = require("os");

function normalizeVersionName(version) {
  return version.replace(/^nightly-[0-9a-f]{40}$/, "nightly");
}

function mapArch(arch) {
  const mappings = {
    x32: "386",
    x64: "amd64",
  };

  return mappings[arch] || arch;
}

function getDownloadObject(version) {
  const platform = os.platform();
  const filename = `foundry_${normalizeVersionName(version)}_${platform}_${mapArch(os.arch())}`;
  const extension = platform === "win32" ? "zip" : "tar.gz";
  const url = `https://github.com/foundry-rs/foundry/releases/download/nightly-87bc53fc6c874bd4c92d97ed180b949e3a36d78c/${filename}.${extension}`;

  return {
    url,
    binPath: ".",
  };
}

module.exports = {
  getDownloadObject,
};
