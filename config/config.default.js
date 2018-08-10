'use strict';

exports.keys = '12345678';

exports.sofaRpc = {
  server: {
    selfPublish: false,
    namespace: 'com.alipay.sofa.rpc.test',
  },
};

exports.mosn = {
  proxyPort: 12220,
  // antShareCloud: false,
  // dataCenter: null,
  // zone: null,
  // registryEndpoint: null,
  // accessKey: null,
  // secretKey: null,
};
