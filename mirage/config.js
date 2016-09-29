export default function() {

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/packages/:package', (schema, request) => {
    var packageName = request.params.package;

    let packages = {
      'huayra-tpm': {
        package: 'huayra-tpm',
        versions: [
          {
            version: '2.0.0.116-7',
            distribution: 'brisa',
            archs: ['i386', 'source']
          },
          {
            version: '2.0.0.117-3',
            distribution: 'torbellino',
            archs: ['i386', 'amd64', 'source']
          },
        ]
      }
    };

    return packages[packageName];
  });


  /**
   * Mediante esta ruta se espera un json con los detalles de un paquete
   * dada una distribución y un nombre de paquete.
   *
   * Por ejemplo:
   *
   *    GET /packages/brisa/huayra-tpm
   */
  this.get('/packages/:distro/:packageName', (schema, request) => {
    var distro = request.params.distro;
    var packageName = request.params.packageName;

    var data = {
      torbellino: {
        'huayra-tpm': {
          'versions': [
            {
              'Architecture': 'amd64',
              'Version': '2.0.0.117-3',
              'Size': '2763726',
              'Installed-Size': '10368',
              'Filename': 'pool/non-free/h/huayra-tpm/huayra-tpm_2.0.0.117-3_amd64.deb'
            },
            {
              'Architecture': 'i386',
              'Version': '2.0.0.117-3',
              'Size': '2191802',
              'Installed-Size': '8980',
              'Filename': 'pool/non-free/h/huayra-tpm/huayra-tpm_2.0.0.117-3_i386.deb'
            }
          ],

          'striderURL': 'http://ci.huayragnulinux.com.ar/huayralinux/huayra-curriculum',
          'striderJobURL': 'http://ci.huayragnulinux.com.ar/huayralinux/huayra-curriculum/job/57e2c6cd5c172f2c7a3af1e3',
          'repoURL': 'https://github.com/HuayraLinux/huayra-ritmos',
          'repoPackageURL': 'https://github.com/HuayraLinux/pkg-huayra-ritmos',
          'lastCommitURL': 'https://github.com/HuayraLinux/huayra-ritmos/commit/7140769dccb21d9f71641150cca0dd83ebda00f9',

          'Maintainer': 'Miguel Angel Garcia <miguel.garcia@gmail.com>',
          'Depends': [
            {
              'Package': 'python',
              'Version': {
                'Text': '(>=2.6.6-7~)',
                'Relation': '>=',
                'Version': '2.6.6-7~'
              },
              'Alternatives': [{
                'Package': 'jython',
                'Version': {
                  'Text': '(=2.5.3)',
                  'Relation': '=',
                  'Version': '2.5.3'
                }
              }]
            },
            {
              'Package': 'python',
              'Version': {
                'Text': '(<<2.8)',
                'Relation': '<<',
                'Version': '2.8'
              },
              'Alternatives': []
            },
            {
              'Package': 'python-pygame',
              'Alternatives': []
            }
          ],
          'Conflicts': [
            { 'Package': 'libtdagent' },
            { 'Package': 'tdagent' }
          ],
          'Priority': 'extra',
          'Section': 'non-free/utils',

          'Description': 'Libraries and Agent of Theft Deterrent',
        }
      },
      brisa: {
        'huayra-tpm': {
          'versions': [
            {
              'Architecture': 'amd64',
              'Version': '2.0.0.117-3',
              'Size': '2763726',
              'Installed-Size': '10368',
              'Filename': 'pool/non-free/h/huayra-tpm/huayra-tpm_2.0.0.117-3_amd64.deb'
            },
            {
              'Architecture': 'i386',
              'Version': '2.0.0.117-3',
              'Size': '2191802',
              'Installed-Size': '8980',
              'Filename': 'pool/non-free/h/huayra-tpm/huayra-tpm_2.0.0.117-3_i386.deb'
            }
          ],

          'striderURL': 'http://ci.huayragnulinux.com.ar/huayralinux/huayra-curriculum',
          'striderJobURL': 'http://ci.huayragnulinux.com.ar/huayralinux/huayra-curriculum/job/57e2c6cd5c172f2c7a3af1e3',
          'repoURL': 'https://github.com/HuayraLinux/huayra-ritmos',
          'repoPackageURL': 'https://github.com/HuayraLinux/pkg-huayra-ritmos',
          'lastCommitURL': 'https://github.com/HuayraLinux/huayra-ritmos/commit/7140769dccb21d9f71641150cca0dd83ebda00f9',

          'Maintainer': 'Miguel Angel Garcia <miguel.garcia@gmail.com>',
          'Depends': [
            {
              'Package': 'python',
              'Version': {
                'Text': '(>=2.6.6-7~)',
                'Relation': '>=',
                'Version': '2.6.6-7~'
              },
              'Alternatives': [{
                'Package': 'jython',
                'Version': {
                  'Text': '(=2.5.3)',
                  'Relation': '=',
                  'Version': '2.5.3'
                }
              }]
            },
            {
              'Package': 'python',
              'Version': {
                'Text': '(<<2.8)',
                'Relation': '<<',
                'Version': '2.8'
              },
              'Alternatives': []
            },
            {
              'Package': 'python-pygame',
              'Alternatives': []
            }
          ],
          'Conflicts': [
            { 'Package': 'libtdagent' },
            { 'Package': 'tdagent' }
          ],
          'Priority': 'extra',
          'Section': 'non-free/utils',

          'Description': 'Libraries and Agent of Theft Deterrent',
        }
      }
    };

    return data[distro][packageName];
  });

  this.get('/distributions/:distro/packages', (schema, request) => {
    var distro = request.params.distro;

    var data = {
      'torbellino': [
        {
          Package: 'huayra-tpm',
          Component: 'non-free',
          versions: [
            {
              Architecture: 'i386',
              Version: '2.0.0.117-3'
            },
            {
              Architecture: 'amd64',
              Version: '2.0.0.117-3'
            },
            {
              Architecture: 'source',
              Version: '2.0.0.117-3'
            }
          ]
        },
      ],

      'brisa': [
        {
          Package: 'huayra-tpm',
          Component: 'non-free',
          Versions: [
            {
              Architecture: 'i386',
              Version: '2.0.0.116-7'
            },
            {
              Architecture: 'amd64',
              Version: '2.0.0.116-7'
            },
            {
              Architecture: 'source',
              Version: '2.0.0.116-7'
            }
          ]
        },
      ]
    };

    return data[distro];
  });


  this.get('/distributions', () => {
    return [
      {
        Origin: 'Huayra',
        Label: 'huayra-brisa',
        Codename: 'brisa',
        Architectures: 'i386 amd64 source',
        Components: 'main contrib non-free',
        UDebComponents: 'main',
        Description: 'Repositorio Antiguo Estable de Huayra',
      },
      {
        Origin: 'Huayra',
        Label: 'huayra-torbellino',
        Codename: 'torbellino',
        Suite: 'unstable',
        Architectures: 'i386 amd64 source',
        Components: 'main contrib non-free',
        UDebComponents: 'main',
        Description: 'Repositorio EN desarrollo de Huayra',
      },
    ];
  });
}
