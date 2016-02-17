!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","2"], [], function($__System) {

!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(s),i=(r[1].split(",")[n]||"require").replace(p,""),t=c[i]||(c[i]=new RegExp(u+i+a,"g"));t.lastIndex=0;for(var o,f=[];o=t.exec(e);)f.push(o[2]||o[3]);return f}function r(e,n,i,t){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var f=o.get(e);return f.__useDefault?f["default"]:f}throw new TypeError("Invalid require")}for(var l=[],u=0;u<e.length;u++)l.push(o["import"](e[u],t));Promise.all(l).then(function(e){n&&n.apply(null,e)},i)}function i(i,t,l){"string"!=typeof i&&(l=t,t=i,i=null),t instanceof Array||(l=t,t=["require","exports","module"].splice(0,l.length)),"function"!=typeof l&&(l=function(e){return function(){return e}}(l)),void 0===t[t.length-1]&&t.pop();var u,a,s;-1!=(u=f.call(t,"require"))&&(t.splice(u,1),i||(t=t.concat(n(l.toString(),u)))),-1!=(a=f.call(t,"exports"))&&t.splice(a,1),-1!=(s=f.call(t,"module"))&&t.splice(s,1);var p={name:i,deps:t,execute:function(n,i,f){for(var p=[],c=0;c<t.length;c++)p.push(n(t[c]));f.uri=f.id,f.config=function(){},-1!=s&&p.splice(s,0,f),-1!=a&&p.splice(a,0,i),-1!=u&&p.splice(u,0,function(e,i,t){return"string"==typeof e&&"function"!=typeof i?n(e):r.call(o,e,i,t,f.id)});var d=l.apply(-1==a?e:i,p);return"undefined"==typeof d&&f&&(d=f.exports),"undefined"!=typeof d?d:void 0}};if(i)d.anonDefine||d.isBundle?(d.anonDefine&&d.anonDefine.name&&o.registerDynamic(d.anonDefine.name,d.anonDefine.deps,!1,d.anonDefine.execute),d.anonDefine=null):d.anonDefine=p,d.isBundle=!0,o.registerDynamic(i,p.deps,!1,p.execute);else{if(d.anonDefine)throw new TypeError("Multiple defines for anonymous module");d.anonDefine=p}}function t(n){d.anonDefine=null,d.isBundle=!1;var r=e.module,t=e.exports,o=e.define;return e.module=void 0,e.exports=void 0,e.define=i,function(){e.define=o,e.module=r,e.exports=t}}var o=$__System,f=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,u="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",a="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",s=/\(([^\)]*)\)/,p=/^\s+|\s+$/g,c={};i.amd={};var d={isBundle:!1,anonDefine:null};o.set("@@amd-helpers",o.newModule({createDefine:t,require:r,define:i,lastModule:d})),o.amdDefine=i,o.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic("3", ["@node/util", "@node/fs", "4", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var util = $__require('@node/util'),
      fs = $__require('@node/fs'),
      Store = $__require('4');
  function LookupStore(opts) {
    Store.call(this, opts);
  }
  LookupStore.TYPE = 'fslookup';
  util.inherits(LookupStore, Store);
  Store.mix(LookupStore, {
    keys: function() {
      return [];
    },
    get: function(key) {
      return fs.readFileSync(key, 'utf8');
    },
    hasKey: function(key) {
      var stats;
      try {
        stats = fs.statSync(key);
        return stats.isFile();
      } catch (ex) {
        return false;
      }
    },
    set: function(key) {
      if (!this.hasKey(key)) {
        throw new Error('Attempt to set contents for non-existent file [' + key + '] on a fslookup store');
      }
      return key;
    }
  });
  module.exports = LookupStore;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6", ["@node/util", "@node/path", "@node/os", "@node/fs", "7", "4", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var util = $__require('@node/util'),
      path = $__require('@node/path'),
      os = $__require('@node/os'),
      fs = $__require('@node/fs'),
      mkdirp = $__require('7'),
      Store = $__require('4');
  function makeTempDir() {
    var dir = path.join(os.tmpDir ? os.tmpDir() : (process.env.TMPDIR || '/tmp'), 'ts' + new Date().getTime());
    mkdirp.sync(dir);
    return dir;
  }
  function TmpStore(opts) {
    opts = opts || {};
    this.tmp = opts.tmp || makeTempDir();
    this.map = {};
    this.seq = 0;
    this.prefix = 't' + new Date().getTime() + '-';
  }
  TmpStore.TYPE = 'tmp';
  util.inherits(TmpStore, Store);
  Store.mix(TmpStore, {
    generateTmpFileName: function() {
      this.seq += 1;
      return this.prefix + this.seq + '.tmp';
    },
    set: function(key, contents) {
      var tmpFile = this.generateTmpFileName();
      fs.writeFileSync(tmpFile, contents, 'utf8');
      this.map[key] = tmpFile;
    },
    get: function(key) {
      var tmpFile = this.map[key];
      if (!tmpFile) {
        throw new Error('Unable to find tmp entry for [' + tmpFile + ']');
      }
      return fs.readFileSync(tmpFile, 'utf8');
    },
    hasKey: function(key) {
      return !!this.map[key];
    },
    keys: function() {
      return Object.keys(this.map);
    },
    dispose: function() {
      var map = this.map;
      Object.keys(map).forEach(function(key) {
        fs.unlinkSync(map[key]);
      });
      this.map = {};
    }
  });
  module.exports = TmpStore;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8", ["@node/path", "@node/util", "9", "a", "b", "c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      util = $__require('@node/util'),
      Report = $__require('9'),
      FileWriter = $__require('a'),
      TreeSummarizer = $__require('b'),
      utils = $__require('c');
  function CloverReport(opts) {
    Report.call(this);
    opts = opts || {};
    this.projectRoot = process.cwd();
    this.dir = opts.dir || this.projectRoot;
    this.file = opts.file || this.getDefaultConfig().file;
    this.opts = opts;
  }
  CloverReport.TYPE = 'clover';
  util.inherits(CloverReport, Report);
  function asJavaPackage(node) {
    return node.displayShortName().replace(/\//g, '.').replace(/\\/g, '.').replace(/\.$/, '');
  }
  function asClassName(node) {
    return node.fullPath().replace(/.*[\\\/]/, '');
  }
  function quote(thing) {
    return '"' + thing + '"';
  }
  function attr(n, v) {
    return ' ' + n + '=' + quote(v) + ' ';
  }
  function branchCoverageByLine(fileCoverage) {
    var branchMap = fileCoverage.branchMap,
        branches = fileCoverage.b,
        ret = {};
    Object.keys(branchMap).forEach(function(k) {
      var line = branchMap[k].line,
          branchData = branches[k];
      ret[line] = ret[line] || [];
      ret[line].push.apply(ret[line], branchData);
    });
    Object.keys(ret).forEach(function(k) {
      var dataArray = ret[k],
          covered = dataArray.filter(function(item) {
            return item > 0;
          }),
          coverage = covered.length / dataArray.length * 100;
      ret[k] = {
        covered: covered.length,
        total: dataArray.length,
        coverage: coverage
      };
    });
    return ret;
  }
  function addClassStats(node, fileCoverage, writer) {
    fileCoverage = utils.incrementIgnoredTotals(fileCoverage);
    var metrics = node.metrics,
        branchByLine = branchCoverageByLine(fileCoverage),
        fnMap,
        lines;
    writer.println('\t\t\t<file' + attr('name', asClassName(node)) + attr('path', node.fullPath()) + '>');
    writer.println('\t\t\t\t<metrics' + attr('statements', metrics.lines.total) + attr('coveredstatements', metrics.lines.covered) + attr('conditionals', metrics.branches.total) + attr('coveredconditionals', metrics.branches.covered) + attr('methods', metrics.functions.total) + attr('coveredmethods', metrics.functions.covered) + '/>');
    fnMap = fileCoverage.fnMap;
    lines = fileCoverage.l;
    Object.keys(lines).forEach(function(k) {
      var str = '\t\t\t\t<line' + attr('num', k) + attr('count', lines[k]),
          branchDetail = branchByLine[k];
      if (!branchDetail) {
        str += ' type="stmt" ';
      } else {
        str += ' type="cond" ' + attr('truecount', branchDetail.covered) + attr('falsecount', (branchDetail.total - branchDetail.covered));
      }
      writer.println(str + '/>');
    });
    writer.println('\t\t\t</file>');
  }
  function walk(node, collector, writer, level, projectRoot) {
    var metrics,
        totalFiles = 0,
        totalPackages = 0,
        totalLines = 0,
        tempLines = 0;
    if (level === 0) {
      metrics = node.metrics;
      writer.println('<?xml version="1.0" encoding="UTF-8"?>');
      writer.println('<coverage' + attr('generated', Date.now()) + 'clover="3.2.0">');
      writer.println('\t<project' + attr('timestamp', Date.now()) + attr('name', 'All Files') + '>');
      node.children.filter(function(child) {
        return child.kind === 'dir';
      }).forEach(function(child) {
        totalPackages += 1;
        child.children.filter(function(child) {
          return child.kind !== 'dir';
        }).forEach(function(child) {
          Object.keys(collector.fileCoverageFor(child.fullPath()).l).forEach(function(k) {
            tempLines = k;
          });
          totalLines += Number(tempLines);
          totalFiles += 1;
        });
      });
      writer.println('\t\t<metrics' + attr('statements', metrics.lines.total) + attr('coveredstatements', metrics.lines.covered) + attr('conditionals', metrics.branches.total) + attr('coveredconditionals', metrics.branches.covered) + attr('methods', metrics.functions.total) + attr('coveredmethods', metrics.functions.covered) + attr('elements', metrics.lines.total + metrics.branches.total + metrics.functions.total) + attr('coveredelements', metrics.lines.covered + metrics.branches.covered + metrics.functions.covered) + attr('complexity', 0) + attr('packages', totalPackages) + attr('files', totalFiles) + attr('classes', totalFiles) + attr('loc', totalLines) + attr('ncloc', totalLines) + '/>');
    }
    if (node.packageMetrics) {
      metrics = node.packageMetrics;
      writer.println('\t\t<package' + attr('name', asJavaPackage(node)) + '>');
      writer.println('\t\t\t<metrics' + attr('statements', metrics.lines.total) + attr('coveredstatements', metrics.lines.covered) + attr('conditionals', metrics.branches.total) + attr('coveredconditionals', metrics.branches.covered) + attr('methods', metrics.functions.total) + attr('coveredmethods', metrics.functions.covered) + '/>');
      node.children.filter(function(child) {
        return child.kind !== 'dir';
      }).forEach(function(child) {
        addClassStats(child, collector.fileCoverageFor(child.fullPath()), writer);
      });
      writer.println('\t\t</package>');
    }
    node.children.filter(function(child) {
      return child.kind === 'dir';
    }).forEach(function(child) {
      walk(child, collector, writer, level + 1, projectRoot);
    });
    if (level === 0) {
      writer.println('\t</project>');
      writer.println('</coverage>');
    }
  }
  Report.mix(CloverReport, {
    synopsis: function() {
      return 'XML coverage report that can be consumed by the clover tool';
    },
    getDefaultConfig: function() {
      return {file: 'clover.xml'};
    },
    writeReport: function(collector, sync) {
      var summarizer = new TreeSummarizer(),
          outputFile = path.join(this.dir, this.file),
          writer = this.opts.writer || new FileWriter(sync),
          projectRoot = this.projectRoot,
          that = this,
          tree,
          root;
      collector.files().forEach(function(key) {
        summarizer.addFileCoverageSummary(key, utils.summarizeFileCoverage(collector.fileCoverageFor(key)));
      });
      tree = summarizer.getTreeSummary();
      root = tree.root;
      writer.on('done', function() {
        that.emit('done');
      });
      writer.writeFile(outputFile, function(contentWriter) {
        walk(root, collector, contentWriter, 0, projectRoot);
        writer.done();
      });
    }
  });
  module.exports = CloverReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d", ["@node/path", "@node/util", "9", "a", "b", "c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      util = $__require('@node/util'),
      Report = $__require('9'),
      FileWriter = $__require('a'),
      TreeSummarizer = $__require('b'),
      utils = $__require('c');
  function CoberturaReport(opts) {
    Report.call(this);
    opts = opts || {};
    this.projectRoot = process.cwd();
    this.dir = opts.dir || this.projectRoot;
    this.file = opts.file || this.getDefaultConfig().file;
    this.opts = opts;
  }
  CoberturaReport.TYPE = 'cobertura';
  util.inherits(CoberturaReport, Report);
  function asJavaPackage(node) {
    return node.displayShortName().replace(/\//g, '.').replace(/\\/g, '.').replace(/\.$/, '');
  }
  function asClassName(node) {
    return node.fullPath().replace(/.*[\\\/]/, '');
  }
  function quote(thing) {
    return '"' + thing + '"';
  }
  function attr(n, v) {
    return ' ' + n + '=' + quote(v) + ' ';
  }
  function branchCoverageByLine(fileCoverage) {
    var branchMap = fileCoverage.branchMap,
        branches = fileCoverage.b,
        ret = {};
    Object.keys(branchMap).forEach(function(k) {
      var line = branchMap[k].line,
          branchData = branches[k];
      ret[line] = ret[line] || [];
      ret[line].push.apply(ret[line], branchData);
    });
    Object.keys(ret).forEach(function(k) {
      var dataArray = ret[k],
          covered = dataArray.filter(function(item) {
            return item > 0;
          }),
          coverage = covered.length / dataArray.length * 100;
      ret[k] = {
        covered: covered.length,
        total: dataArray.length,
        coverage: coverage
      };
    });
    return ret;
  }
  function addClassStats(node, fileCoverage, writer, projectRoot) {
    fileCoverage = utils.incrementIgnoredTotals(fileCoverage);
    var metrics = node.metrics,
        branchByLine = branchCoverageByLine(fileCoverage),
        fnMap,
        lines;
    writer.println('\t\t<class' + attr('name', asClassName(node)) + attr('filename', path.relative(projectRoot, node.fullPath())) + attr('line-rate', metrics.lines.pct / 100.0) + attr('branch-rate', metrics.branches.pct / 100.0) + '>');
    writer.println('\t\t<methods>');
    fnMap = fileCoverage.fnMap;
    Object.keys(fnMap).forEach(function(k) {
      var name = fnMap[k].name,
          hits = fileCoverage.f[k];
      writer.println('\t\t\t<method' + attr('name', name) + attr('hits', hits) + attr('signature', '()V') + '>');
      writer.println('\t\t\t\t<lines>' + '<line' + attr('number', fnMap[k].line) + attr('hits', fileCoverage.f[k]) + '/>' + '</lines>');
      writer.println('\t\t\t</method>');
    });
    writer.println('\t\t</methods>');
    writer.println('\t\t<lines>');
    lines = fileCoverage.l;
    Object.keys(lines).forEach(function(k) {
      var str = '\t\t\t<line' + attr('number', k) + attr('hits', lines[k]),
          branchDetail = branchByLine[k];
      if (!branchDetail) {
        str += attr('branch', false);
      } else {
        str += attr('branch', true) + attr('condition-coverage', branchDetail.coverage + '% (' + branchDetail.covered + '/' + branchDetail.total + ')');
      }
      writer.println(str + '/>');
    });
    writer.println('\t\t</lines>');
    writer.println('\t\t</class>');
  }
  function walk(node, collector, writer, level, projectRoot) {
    var metrics;
    if (level === 0) {
      metrics = node.metrics;
      writer.println('<?xml version="1.0" ?>');
      writer.println('<!DOCTYPE coverage SYSTEM "http://cobertura.sourceforge.net/xml/coverage-04.dtd">');
      writer.println('<coverage' + attr('lines-valid', metrics.lines.total) + attr('lines-covered', metrics.lines.covered) + attr('line-rate', metrics.lines.pct / 100.0) + attr('branches-valid', metrics.branches.total) + attr('branches-covered', metrics.branches.covered) + attr('branch-rate', metrics.branches.pct / 100.0) + attr('timestamp', Date.now()) + 'complexity="0" version="0.1">');
      writer.println('<sources>');
      writer.println('\t<source>' + projectRoot + '</source>');
      writer.println('</sources>');
      writer.println('<packages>');
    }
    if (node.packageMetrics) {
      metrics = node.packageMetrics;
      writer.println('\t<package' + attr('name', asJavaPackage(node)) + attr('line-rate', metrics.lines.pct / 100.0) + attr('branch-rate', metrics.branches.pct / 100.0) + '>');
      writer.println('\t<classes>');
      node.children.filter(function(child) {
        return child.kind !== 'dir';
      }).forEach(function(child) {
        addClassStats(child, collector.fileCoverageFor(child.fullPath()), writer, projectRoot);
      });
      writer.println('\t</classes>');
      writer.println('\t</package>');
    }
    node.children.filter(function(child) {
      return child.kind === 'dir';
    }).forEach(function(child) {
      walk(child, collector, writer, level + 1, projectRoot);
    });
    if (level === 0) {
      writer.println('</packages>');
      writer.println('</coverage>');
    }
  }
  Report.mix(CoberturaReport, {
    synopsis: function() {
      return 'XML coverage report that can be consumed by the cobertura tool';
    },
    getDefaultConfig: function() {
      return {file: 'cobertura-coverage.xml'};
    },
    writeReport: function(collector, sync) {
      var summarizer = new TreeSummarizer(),
          outputFile = path.join(this.dir, this.file),
          writer = this.opts.writer || new FileWriter(sync),
          projectRoot = this.projectRoot,
          that = this,
          tree,
          root;
      collector.files().forEach(function(key) {
        summarizer.addFileCoverageSummary(key, utils.summarizeFileCoverage(collector.fileCoverageFor(key)));
      });
      tree = summarizer.getTreeSummary();
      root = tree.root;
      writer.on('done', function() {
        that.emit('done');
      });
      writer.writeFile(outputFile, function(contentWriter) {
        walk(root, collector, contentWriter, 0, projectRoot);
        writer.done();
      });
    }
  });
  module.exports = CoberturaReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e", ["@node/path", "c", "a", "@node/util", "9", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      objectUtils = $__require('c'),
      Writer = $__require('a'),
      util = $__require('@node/util'),
      Report = $__require('9');
  function JsonSummaryReport(opts) {
    this.opts = opts || {};
    this.opts.dir = this.opts.dir || process.cwd();
    this.opts.file = this.opts.file || this.getDefaultConfig().file;
    this.opts.writer = this.opts.writer || null;
  }
  JsonSummaryReport.TYPE = 'json-summary';
  util.inherits(JsonSummaryReport, Report);
  Report.mix(JsonSummaryReport, {
    synopsis: function() {
      return 'prints a summary coverage object as JSON to a file';
    },
    getDefaultConfig: function() {
      return {file: 'coverage-summary.json'};
    },
    writeReport: function(collector, sync) {
      var outputFile = path.resolve(this.opts.dir, this.opts.file),
          writer = this.opts.writer || new Writer(sync),
          that = this;
      var summaries = [],
          finalSummary;
      collector.files().forEach(function(file) {
        summaries.push(objectUtils.summarizeFileCoverage(collector.fileCoverageFor(file)));
      });
      finalSummary = objectUtils.mergeSummaryObjects.apply(null, summaries);
      writer.on('done', function() {
        that.emit('done');
      });
      writer.writeFile(outputFile, function(contentWriter) {
        contentWriter.println("{");
        contentWriter.write('"total":');
        contentWriter.write(JSON.stringify(finalSummary));
        collector.files().forEach(function(key) {
          contentWriter.println(",");
          contentWriter.write(JSON.stringify(key));
          contentWriter.write(":");
          contentWriter.write(JSON.stringify(objectUtils.summarizeFileCoverage(collector.fileCoverageFor(key))));
        });
        contentWriter.println("}");
      });
      writer.done();
    }
  });
  module.exports = JsonSummaryReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f", ["@node/path", "a", "@node/util", "9", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      Writer = $__require('a'),
      util = $__require('@node/util'),
      Report = $__require('9');
  function JsonReport(opts) {
    this.opts = opts || {};
    this.opts.dir = this.opts.dir || process.cwd();
    this.opts.file = this.opts.file || this.getDefaultConfig().file;
    this.opts.writer = this.opts.writer || null;
  }
  JsonReport.TYPE = 'json';
  util.inherits(JsonReport, Report);
  Report.mix(JsonReport, {
    synopsis: function() {
      return 'prints the coverage object as JSON to a file';
    },
    getDefaultConfig: function() {
      return {file: 'coverage-final.json'};
    },
    writeReport: function(collector, sync) {
      var outputFile = path.resolve(this.opts.dir, this.opts.file),
          writer = this.opts.writer || new Writer(sync),
          that = this;
      writer.on('done', function() {
        that.emit('done');
      });
      writer.writeFile(outputFile, function(contentWriter) {
        var first = true;
        contentWriter.println("{");
        collector.files().forEach(function(key) {
          if (first) {
            first = false;
          } else {
            contentWriter.println(",");
          }
          contentWriter.write(JSON.stringify(key));
          contentWriter.write(":");
          contentWriter.write(JSON.stringify(collector.fileCoverageFor(key)));
        });
        contentWriter.println("}");
      });
      writer.done();
    }
  });
  module.exports = JsonReport;
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("10", ["exports", "module"], function(exports, module) {
  'use strict';
  function SafeString(string) {
    this.string = string;
  }
  SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return '' + this.string;
  };
  module.exports = SafeString;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("11", ["exports", "12", "13", "14"], function(exports, _utils, _exception, _base) {
  'use strict';
  exports.__esModule = true;
  exports.checkRevision = checkRevision;
  exports.template = template;
  exports.wrapProgram = wrapProgram;
  exports.resolvePartial = resolvePartial;
  exports.invokePartial = invokePartial;
  exports.noop = noop;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _Exception = _interopRequireDefault(_exception);
  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = _base.COMPILER_REVISION;
    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
            compilerVersions = _base.REVISION_CHANGES[compilerRevision];
        throw new _Exception['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
      } else {
        throw new _Exception['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
      }
    }
  }
  function template(templateSpec, env) {
    if (!env) {
      throw new _Exception['default']('No environment passed to template');
    }
    if (!templateSpec || !templateSpec.main) {
      throw new _Exception['default']('Unknown template object: ' + typeof templateSpec);
    }
    templateSpec.main.decorator = templateSpec.main_d;
    env.VM.checkRevision(templateSpec.compiler);
    function invokePartialWrapper(partial, context, options) {
      if (options.hash) {
        context = _utils.extend({}, context, options.hash);
        if (options.ids) {
          options.ids[0] = true;
        }
      }
      partial = env.VM.resolvePartial.call(this, partial, context, options);
      var result = env.VM.invokePartial.call(this, partial, context, options);
      if (result == null && env.compile) {
        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
        result = options.partials[options.name](context, options);
      }
      if (result != null) {
        if (options.indent) {
          var lines = result.split('\n');
          for (var i = 0,
              l = lines.length; i < l; i++) {
            if (!lines[i] && i + 1 === l) {
              break;
            }
            lines[i] = options.indent + lines[i];
          }
          result = lines.join('\n');
        }
        return result;
      } else {
        throw new _Exception['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
      }
    }
    var container = {
      strict: function strict(obj, name) {
        if (!(name in obj)) {
          throw new _Exception['default']('"' + name + '" not defined in ' + obj);
        }
        return obj[name];
      },
      lookup: function lookup(depths, name) {
        var len = depths.length;
        for (var i = 0; i < len; i++) {
          if (depths[i] && depths[i][name] != null) {
            return depths[i][name];
          }
        }
      },
      lambda: function lambda(current, context) {
        return typeof current === 'function' ? current.call(context) : current;
      },
      escapeExpression: _utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      fn: function fn(i) {
        var ret = templateSpec[i];
        ret.decorator = templateSpec[i + '_d'];
        return ret;
      },
      programs: [],
      program: function program(i, data, declaredBlockParams, blockParams, depths) {
        var programWrapper = this.programs[i],
            fn = this.fn(i);
        if (data || depths || blockParams || declaredBlockParams) {
          programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = wrapProgram(this, i, fn);
        }
        return programWrapper;
      },
      data: function data(value, depth) {
        while (value && depth--) {
          value = value._parent;
        }
        return value;
      },
      merge: function merge(param, common) {
        var obj = param || common;
        if (param && common && param !== common) {
          obj = _utils.extend({}, common, param);
        }
        return obj;
      },
      noop: env.VM.noop,
      compilerInfo: templateSpec.compiler
    };
    function ret(context) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var data = options.data;
      ret._setup(options);
      if (!options.partial && templateSpec.useData) {
        data = initData(context, data);
      }
      var depths = undefined,
          blockParams = templateSpec.useBlockParams ? [] : undefined;
      if (templateSpec.useDepths) {
        if (options.depths) {
          depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
        } else {
          depths = [context];
        }
      }
      function main(context) {
        return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
      }
      main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
      return main(context, options);
    }
    ret.isTop = true;
    ret._setup = function(options) {
      if (!options.partial) {
        container.helpers = container.merge(options.helpers, env.helpers);
        if (templateSpec.usePartial) {
          container.partials = container.merge(options.partials, env.partials);
        }
        if (templateSpec.usePartial || templateSpec.useDecorators) {
          container.decorators = container.merge(options.decorators, env.decorators);
        }
      } else {
        container.helpers = options.helpers;
        container.partials = options.partials;
        container.decorators = options.decorators;
      }
    };
    ret._child = function(i, data, blockParams, depths) {
      if (templateSpec.useBlockParams && !blockParams) {
        throw new _Exception['default']('must pass block params');
      }
      if (templateSpec.useDepths && !depths) {
        throw new _Exception['default']('must pass parent depths');
      }
      return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
  }
  function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    function prog(context) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var currentDepths = depths;
      if (depths && context !== depths[0]) {
        currentDepths = [context].concat(depths);
      }
      return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
    }
    prog = executeDecorators(fn, prog, container, depths, data, blockParams);
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
  }
  function resolvePartial(partial, context, options) {
    if (!partial) {
      if (options.name === '@partial-block') {
        partial = options.data['partial-block'];
      } else {
        partial = options.partials[options.name];
      }
    } else if (!partial.call && !options.name) {
      options.name = partial;
      partial = options.partials[partial];
    }
    return partial;
  }
  function invokePartial(partial, context, options) {
    options.partial = true;
    if (options.ids) {
      options.data.contextPath = options.ids[0] || options.data.contextPath;
    }
    var partialBlock = undefined;
    if (options.fn && options.fn !== noop) {
      options.data = _base.createFrame(options.data);
      partialBlock = options.data['partial-block'] = options.fn;
      if (partialBlock.partials) {
        options.partials = _utils.extend({}, options.partials, partialBlock.partials);
      }
    }
    if (partial === undefined && partialBlock) {
      partial = partialBlock;
    }
    if (partial === undefined) {
      throw new _Exception['default']('The partial ' + options.name + ' could not be found');
    } else if (partial instanceof Function) {
      return partial(context, options);
    }
  }
  function noop() {
    return '';
  }
  function initData(context, data) {
    if (!data || !('root' in data)) {
      data = data ? _base.createFrame(data) : {};
      data.root = context;
    }
    return data;
  }
  function executeDecorators(fn, prog, container, depths, data, blockParams) {
    if (fn.decorator) {
      var props = {};
      prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
      _utils.extend(prog, props);
    }
    return prog;
  }
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("15", ["exports", "module", "14", "10", "13", "12", "11", "16"], function(exports, module, _handlebarsBase, _handlebarsSafeString, _handlebarsException, _handlebarsUtils, _handlebarsRuntime, _handlebarsNoConflict) {
  'use strict';
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _SafeString = _interopRequireDefault(_handlebarsSafeString);
  var _Exception = _interopRequireDefault(_handlebarsException);
  var _noConflict = _interopRequireDefault(_handlebarsNoConflict);
  function create() {
    var hb = new _handlebarsBase.HandlebarsEnvironment();
    _handlebarsUtils.extend(hb, _handlebarsBase);
    hb.SafeString = _SafeString['default'];
    hb.Exception = _Exception['default'];
    hb.Utils = _handlebarsUtils;
    hb.escapeExpression = _handlebarsUtils.escapeExpression;
    hb.VM = _handlebarsRuntime;
    hb.template = function(spec) {
      return _handlebarsRuntime.template(spec, hb);
    };
    return hb;
  }
  var inst = create();
  inst.create = create;
  _noConflict['default'](inst);
  inst['default'] = inst;
  module.exports = inst;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("17", ["exports"], function(exports) {
  "use strict";
  var handlebars = (function() {
    var parser = {
      trace: function trace() {},
      yy: {},
      symbols_: {
        "error": 2,
        "root": 3,
        "program": 4,
        "EOF": 5,
        "program_repetition0": 6,
        "statement": 7,
        "mustache": 8,
        "block": 9,
        "rawBlock": 10,
        "partial": 11,
        "partialBlock": 12,
        "content": 13,
        "COMMENT": 14,
        "CONTENT": 15,
        "openRawBlock": 16,
        "rawBlock_repetition_plus0": 17,
        "END_RAW_BLOCK": 18,
        "OPEN_RAW_BLOCK": 19,
        "helperName": 20,
        "openRawBlock_repetition0": 21,
        "openRawBlock_option0": 22,
        "CLOSE_RAW_BLOCK": 23,
        "openBlock": 24,
        "block_option0": 25,
        "closeBlock": 26,
        "openInverse": 27,
        "block_option1": 28,
        "OPEN_BLOCK": 29,
        "openBlock_repetition0": 30,
        "openBlock_option0": 31,
        "openBlock_option1": 32,
        "CLOSE": 33,
        "OPEN_INVERSE": 34,
        "openInverse_repetition0": 35,
        "openInverse_option0": 36,
        "openInverse_option1": 37,
        "openInverseChain": 38,
        "OPEN_INVERSE_CHAIN": 39,
        "openInverseChain_repetition0": 40,
        "openInverseChain_option0": 41,
        "openInverseChain_option1": 42,
        "inverseAndProgram": 43,
        "INVERSE": 44,
        "inverseChain": 45,
        "inverseChain_option0": 46,
        "OPEN_ENDBLOCK": 47,
        "OPEN": 48,
        "mustache_repetition0": 49,
        "mustache_option0": 50,
        "OPEN_UNESCAPED": 51,
        "mustache_repetition1": 52,
        "mustache_option1": 53,
        "CLOSE_UNESCAPED": 54,
        "OPEN_PARTIAL": 55,
        "partialName": 56,
        "partial_repetition0": 57,
        "partial_option0": 58,
        "openPartialBlock": 59,
        "OPEN_PARTIAL_BLOCK": 60,
        "openPartialBlock_repetition0": 61,
        "openPartialBlock_option0": 62,
        "param": 63,
        "sexpr": 64,
        "OPEN_SEXPR": 65,
        "sexpr_repetition0": 66,
        "sexpr_option0": 67,
        "CLOSE_SEXPR": 68,
        "hash": 69,
        "hash_repetition_plus0": 70,
        "hashSegment": 71,
        "ID": 72,
        "EQUALS": 73,
        "blockParams": 74,
        "OPEN_BLOCK_PARAMS": 75,
        "blockParams_repetition_plus0": 76,
        "CLOSE_BLOCK_PARAMS": 77,
        "path": 78,
        "dataName": 79,
        "STRING": 80,
        "NUMBER": 81,
        "BOOLEAN": 82,
        "UNDEFINED": 83,
        "NULL": 84,
        "DATA": 85,
        "pathSegments": 86,
        "SEP": 87,
        "$accept": 0,
        "$end": 1
      },
      terminals_: {
        2: "error",
        5: "EOF",
        14: "COMMENT",
        15: "CONTENT",
        18: "END_RAW_BLOCK",
        19: "OPEN_RAW_BLOCK",
        23: "CLOSE_RAW_BLOCK",
        29: "OPEN_BLOCK",
        33: "CLOSE",
        34: "OPEN_INVERSE",
        39: "OPEN_INVERSE_CHAIN",
        44: "INVERSE",
        47: "OPEN_ENDBLOCK",
        48: "OPEN",
        51: "OPEN_UNESCAPED",
        54: "CLOSE_UNESCAPED",
        55: "OPEN_PARTIAL",
        60: "OPEN_PARTIAL_BLOCK",
        65: "OPEN_SEXPR",
        68: "CLOSE_SEXPR",
        72: "ID",
        73: "EQUALS",
        75: "OPEN_BLOCK_PARAMS",
        77: "CLOSE_BLOCK_PARAMS",
        80: "STRING",
        81: "NUMBER",
        82: "BOOLEAN",
        83: "UNDEFINED",
        84: "NULL",
        85: "DATA",
        87: "SEP"
      },
      productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
      performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
        var $0 = $$.length - 1;
        switch (yystate) {
          case 1:
            return $$[$0 - 1];
            break;
          case 2:
            this.$ = yy.prepareProgram($$[$0]);
            break;
          case 3:
            this.$ = $$[$0];
            break;
          case 4:
            this.$ = $$[$0];
            break;
          case 5:
            this.$ = $$[$0];
            break;
          case 6:
            this.$ = $$[$0];
            break;
          case 7:
            this.$ = $$[$0];
            break;
          case 8:
            this.$ = $$[$0];
            break;
          case 9:
            this.$ = {
              type: 'CommentStatement',
              value: yy.stripComment($$[$0]),
              strip: yy.stripFlags($$[$0], $$[$0]),
              loc: yy.locInfo(this._$)
            };
            break;
          case 10:
            this.$ = {
              type: 'ContentStatement',
              original: $$[$0],
              value: $$[$0],
              loc: yy.locInfo(this._$)
            };
            break;
          case 11:
            this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
            break;
          case 12:
            this.$ = {
              path: $$[$0 - 3],
              params: $$[$0 - 2],
              hash: $$[$0 - 1]
            };
            break;
          case 13:
            this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
            break;
          case 14:
            this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
            break;
          case 15:
            this.$ = {
              open: $$[$0 - 5],
              path: $$[$0 - 4],
              params: $$[$0 - 3],
              hash: $$[$0 - 2],
              blockParams: $$[$0 - 1],
              strip: yy.stripFlags($$[$0 - 5], $$[$0])
            };
            break;
          case 16:
            this.$ = {
              path: $$[$0 - 4],
              params: $$[$0 - 3],
              hash: $$[$0 - 2],
              blockParams: $$[$0 - 1],
              strip: yy.stripFlags($$[$0 - 5], $$[$0])
            };
            break;
          case 17:
            this.$ = {
              path: $$[$0 - 4],
              params: $$[$0 - 3],
              hash: $$[$0 - 2],
              blockParams: $$[$0 - 1],
              strip: yy.stripFlags($$[$0 - 5], $$[$0])
            };
            break;
          case 18:
            this.$ = {
              strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
              program: $$[$0]
            };
            break;
          case 19:
            var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
                program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
            program.chained = true;
            this.$ = {
              strip: $$[$0 - 2].strip,
              program: program,
              chain: true
            };
            break;
          case 20:
            this.$ = $$[$0];
            break;
          case 21:
            this.$ = {
              path: $$[$0 - 1],
              strip: yy.stripFlags($$[$0 - 2], $$[$0])
            };
            break;
          case 22:
            this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
            break;
          case 23:
            this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
            break;
          case 24:
            this.$ = {
              type: 'PartialStatement',
              name: $$[$0 - 3],
              params: $$[$0 - 2],
              hash: $$[$0 - 1],
              indent: '',
              strip: yy.stripFlags($$[$0 - 4], $$[$0]),
              loc: yy.locInfo(this._$)
            };
            break;
          case 25:
            this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
            break;
          case 26:
            this.$ = {
              path: $$[$0 - 3],
              params: $$[$0 - 2],
              hash: $$[$0 - 1],
              strip: yy.stripFlags($$[$0 - 4], $$[$0])
            };
            break;
          case 27:
            this.$ = $$[$0];
            break;
          case 28:
            this.$ = $$[$0];
            break;
          case 29:
            this.$ = {
              type: 'SubExpression',
              path: $$[$0 - 3],
              params: $$[$0 - 2],
              hash: $$[$0 - 1],
              loc: yy.locInfo(this._$)
            };
            break;
          case 30:
            this.$ = {
              type: 'Hash',
              pairs: $$[$0],
              loc: yy.locInfo(this._$)
            };
            break;
          case 31:
            this.$ = {
              type: 'HashPair',
              key: yy.id($$[$0 - 2]),
              value: $$[$0],
              loc: yy.locInfo(this._$)
            };
            break;
          case 32:
            this.$ = yy.id($$[$0 - 1]);
            break;
          case 33:
            this.$ = $$[$0];
            break;
          case 34:
            this.$ = $$[$0];
            break;
          case 35:
            this.$ = {
              type: 'StringLiteral',
              value: $$[$0],
              original: $$[$0],
              loc: yy.locInfo(this._$)
            };
            break;
          case 36:
            this.$ = {
              type: 'NumberLiteral',
              value: Number($$[$0]),
              original: Number($$[$0]),
              loc: yy.locInfo(this._$)
            };
            break;
          case 37:
            this.$ = {
              type: 'BooleanLiteral',
              value: $$[$0] === 'true',
              original: $$[$0] === 'true',
              loc: yy.locInfo(this._$)
            };
            break;
          case 38:
            this.$ = {
              type: 'UndefinedLiteral',
              original: undefined,
              value: undefined,
              loc: yy.locInfo(this._$)
            };
            break;
          case 39:
            this.$ = {
              type: 'NullLiteral',
              original: null,
              value: null,
              loc: yy.locInfo(this._$)
            };
            break;
          case 40:
            this.$ = $$[$0];
            break;
          case 41:
            this.$ = $$[$0];
            break;
          case 42:
            this.$ = yy.preparePath(true, $$[$0], this._$);
            break;
          case 43:
            this.$ = yy.preparePath(false, $$[$0], this._$);
            break;
          case 44:
            $$[$0 - 2].push({
              part: yy.id($$[$0]),
              original: $$[$0],
              separator: $$[$0 - 1]
            });
            this.$ = $$[$0 - 2];
            break;
          case 45:
            this.$ = [{
              part: yy.id($$[$0]),
              original: $$[$0]
            }];
            break;
          case 46:
            this.$ = [];
            break;
          case 47:
            $$[$0 - 1].push($$[$0]);
            break;
          case 48:
            this.$ = [$$[$0]];
            break;
          case 49:
            $$[$0 - 1].push($$[$0]);
            break;
          case 50:
            this.$ = [];
            break;
          case 51:
            $$[$0 - 1].push($$[$0]);
            break;
          case 58:
            this.$ = [];
            break;
          case 59:
            $$[$0 - 1].push($$[$0]);
            break;
          case 64:
            this.$ = [];
            break;
          case 65:
            $$[$0 - 1].push($$[$0]);
            break;
          case 70:
            this.$ = [];
            break;
          case 71:
            $$[$0 - 1].push($$[$0]);
            break;
          case 78:
            this.$ = [];
            break;
          case 79:
            $$[$0 - 1].push($$[$0]);
            break;
          case 82:
            this.$ = [];
            break;
          case 83:
            $$[$0 - 1].push($$[$0]);
            break;
          case 86:
            this.$ = [];
            break;
          case 87:
            $$[$0 - 1].push($$[$0]);
            break;
          case 90:
            this.$ = [];
            break;
          case 91:
            $$[$0 - 1].push($$[$0]);
            break;
          case 94:
            this.$ = [];
            break;
          case 95:
            $$[$0 - 1].push($$[$0]);
            break;
          case 98:
            this.$ = [$$[$0]];
            break;
          case 99:
            $$[$0 - 1].push($$[$0]);
            break;
          case 100:
            this.$ = [$$[$0]];
            break;
          case 101:
            $$[$0 - 1].push($$[$0]);
            break;
        }
      },
      table: [{
        3: 1,
        4: 2,
        5: [2, 46],
        6: 3,
        14: [2, 46],
        15: [2, 46],
        19: [2, 46],
        29: [2, 46],
        34: [2, 46],
        48: [2, 46],
        51: [2, 46],
        55: [2, 46],
        60: [2, 46]
      }, {1: [3]}, {5: [1, 4]}, {
        5: [2, 2],
        7: 5,
        8: 6,
        9: 7,
        10: 8,
        11: 9,
        12: 10,
        13: 11,
        14: [1, 12],
        15: [1, 20],
        16: 17,
        19: [1, 23],
        24: 15,
        27: 16,
        29: [1, 21],
        34: [1, 22],
        39: [2, 2],
        44: [2, 2],
        47: [2, 2],
        48: [1, 13],
        51: [1, 14],
        55: [1, 18],
        59: 19,
        60: [1, 24]
      }, {1: [2, 1]}, {
        5: [2, 47],
        14: [2, 47],
        15: [2, 47],
        19: [2, 47],
        29: [2, 47],
        34: [2, 47],
        39: [2, 47],
        44: [2, 47],
        47: [2, 47],
        48: [2, 47],
        51: [2, 47],
        55: [2, 47],
        60: [2, 47]
      }, {
        5: [2, 3],
        14: [2, 3],
        15: [2, 3],
        19: [2, 3],
        29: [2, 3],
        34: [2, 3],
        39: [2, 3],
        44: [2, 3],
        47: [2, 3],
        48: [2, 3],
        51: [2, 3],
        55: [2, 3],
        60: [2, 3]
      }, {
        5: [2, 4],
        14: [2, 4],
        15: [2, 4],
        19: [2, 4],
        29: [2, 4],
        34: [2, 4],
        39: [2, 4],
        44: [2, 4],
        47: [2, 4],
        48: [2, 4],
        51: [2, 4],
        55: [2, 4],
        60: [2, 4]
      }, {
        5: [2, 5],
        14: [2, 5],
        15: [2, 5],
        19: [2, 5],
        29: [2, 5],
        34: [2, 5],
        39: [2, 5],
        44: [2, 5],
        47: [2, 5],
        48: [2, 5],
        51: [2, 5],
        55: [2, 5],
        60: [2, 5]
      }, {
        5: [2, 6],
        14: [2, 6],
        15: [2, 6],
        19: [2, 6],
        29: [2, 6],
        34: [2, 6],
        39: [2, 6],
        44: [2, 6],
        47: [2, 6],
        48: [2, 6],
        51: [2, 6],
        55: [2, 6],
        60: [2, 6]
      }, {
        5: [2, 7],
        14: [2, 7],
        15: [2, 7],
        19: [2, 7],
        29: [2, 7],
        34: [2, 7],
        39: [2, 7],
        44: [2, 7],
        47: [2, 7],
        48: [2, 7],
        51: [2, 7],
        55: [2, 7],
        60: [2, 7]
      }, {
        5: [2, 8],
        14: [2, 8],
        15: [2, 8],
        19: [2, 8],
        29: [2, 8],
        34: [2, 8],
        39: [2, 8],
        44: [2, 8],
        47: [2, 8],
        48: [2, 8],
        51: [2, 8],
        55: [2, 8],
        60: [2, 8]
      }, {
        5: [2, 9],
        14: [2, 9],
        15: [2, 9],
        19: [2, 9],
        29: [2, 9],
        34: [2, 9],
        39: [2, 9],
        44: [2, 9],
        47: [2, 9],
        48: [2, 9],
        51: [2, 9],
        55: [2, 9],
        60: [2, 9]
      }, {
        20: 25,
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        20: 36,
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        4: 37,
        6: 3,
        14: [2, 46],
        15: [2, 46],
        19: [2, 46],
        29: [2, 46],
        34: [2, 46],
        39: [2, 46],
        44: [2, 46],
        47: [2, 46],
        48: [2, 46],
        51: [2, 46],
        55: [2, 46],
        60: [2, 46]
      }, {
        4: 38,
        6: 3,
        14: [2, 46],
        15: [2, 46],
        19: [2, 46],
        29: [2, 46],
        34: [2, 46],
        44: [2, 46],
        47: [2, 46],
        48: [2, 46],
        51: [2, 46],
        55: [2, 46],
        60: [2, 46]
      }, {
        13: 40,
        15: [1, 20],
        17: 39
      }, {
        20: 42,
        56: 41,
        64: 43,
        65: [1, 44],
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        4: 45,
        6: 3,
        14: [2, 46],
        15: [2, 46],
        19: [2, 46],
        29: [2, 46],
        34: [2, 46],
        47: [2, 46],
        48: [2, 46],
        51: [2, 46],
        55: [2, 46],
        60: [2, 46]
      }, {
        5: [2, 10],
        14: [2, 10],
        15: [2, 10],
        18: [2, 10],
        19: [2, 10],
        29: [2, 10],
        34: [2, 10],
        39: [2, 10],
        44: [2, 10],
        47: [2, 10],
        48: [2, 10],
        51: [2, 10],
        55: [2, 10],
        60: [2, 10]
      }, {
        20: 46,
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        20: 47,
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        20: 48,
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        20: 42,
        56: 49,
        64: 43,
        65: [1, 44],
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        33: [2, 78],
        49: 50,
        65: [2, 78],
        72: [2, 78],
        80: [2, 78],
        81: [2, 78],
        82: [2, 78],
        83: [2, 78],
        84: [2, 78],
        85: [2, 78]
      }, {
        23: [2, 33],
        33: [2, 33],
        54: [2, 33],
        65: [2, 33],
        68: [2, 33],
        72: [2, 33],
        75: [2, 33],
        80: [2, 33],
        81: [2, 33],
        82: [2, 33],
        83: [2, 33],
        84: [2, 33],
        85: [2, 33]
      }, {
        23: [2, 34],
        33: [2, 34],
        54: [2, 34],
        65: [2, 34],
        68: [2, 34],
        72: [2, 34],
        75: [2, 34],
        80: [2, 34],
        81: [2, 34],
        82: [2, 34],
        83: [2, 34],
        84: [2, 34],
        85: [2, 34]
      }, {
        23: [2, 35],
        33: [2, 35],
        54: [2, 35],
        65: [2, 35],
        68: [2, 35],
        72: [2, 35],
        75: [2, 35],
        80: [2, 35],
        81: [2, 35],
        82: [2, 35],
        83: [2, 35],
        84: [2, 35],
        85: [2, 35]
      }, {
        23: [2, 36],
        33: [2, 36],
        54: [2, 36],
        65: [2, 36],
        68: [2, 36],
        72: [2, 36],
        75: [2, 36],
        80: [2, 36],
        81: [2, 36],
        82: [2, 36],
        83: [2, 36],
        84: [2, 36],
        85: [2, 36]
      }, {
        23: [2, 37],
        33: [2, 37],
        54: [2, 37],
        65: [2, 37],
        68: [2, 37],
        72: [2, 37],
        75: [2, 37],
        80: [2, 37],
        81: [2, 37],
        82: [2, 37],
        83: [2, 37],
        84: [2, 37],
        85: [2, 37]
      }, {
        23: [2, 38],
        33: [2, 38],
        54: [2, 38],
        65: [2, 38],
        68: [2, 38],
        72: [2, 38],
        75: [2, 38],
        80: [2, 38],
        81: [2, 38],
        82: [2, 38],
        83: [2, 38],
        84: [2, 38],
        85: [2, 38]
      }, {
        23: [2, 39],
        33: [2, 39],
        54: [2, 39],
        65: [2, 39],
        68: [2, 39],
        72: [2, 39],
        75: [2, 39],
        80: [2, 39],
        81: [2, 39],
        82: [2, 39],
        83: [2, 39],
        84: [2, 39],
        85: [2, 39]
      }, {
        23: [2, 43],
        33: [2, 43],
        54: [2, 43],
        65: [2, 43],
        68: [2, 43],
        72: [2, 43],
        75: [2, 43],
        80: [2, 43],
        81: [2, 43],
        82: [2, 43],
        83: [2, 43],
        84: [2, 43],
        85: [2, 43],
        87: [1, 51]
      }, {
        72: [1, 35],
        86: 52
      }, {
        23: [2, 45],
        33: [2, 45],
        54: [2, 45],
        65: [2, 45],
        68: [2, 45],
        72: [2, 45],
        75: [2, 45],
        80: [2, 45],
        81: [2, 45],
        82: [2, 45],
        83: [2, 45],
        84: [2, 45],
        85: [2, 45],
        87: [2, 45]
      }, {
        52: 53,
        54: [2, 82],
        65: [2, 82],
        72: [2, 82],
        80: [2, 82],
        81: [2, 82],
        82: [2, 82],
        83: [2, 82],
        84: [2, 82],
        85: [2, 82]
      }, {
        25: 54,
        38: 56,
        39: [1, 58],
        43: 57,
        44: [1, 59],
        45: 55,
        47: [2, 54]
      }, {
        28: 60,
        43: 61,
        44: [1, 59],
        47: [2, 56]
      }, {
        13: 63,
        15: [1, 20],
        18: [1, 62]
      }, {
        15: [2, 48],
        18: [2, 48]
      }, {
        33: [2, 86],
        57: 64,
        65: [2, 86],
        72: [2, 86],
        80: [2, 86],
        81: [2, 86],
        82: [2, 86],
        83: [2, 86],
        84: [2, 86],
        85: [2, 86]
      }, {
        33: [2, 40],
        65: [2, 40],
        72: [2, 40],
        80: [2, 40],
        81: [2, 40],
        82: [2, 40],
        83: [2, 40],
        84: [2, 40],
        85: [2, 40]
      }, {
        33: [2, 41],
        65: [2, 41],
        72: [2, 41],
        80: [2, 41],
        81: [2, 41],
        82: [2, 41],
        83: [2, 41],
        84: [2, 41],
        85: [2, 41]
      }, {
        20: 65,
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        26: 66,
        47: [1, 67]
      }, {
        30: 68,
        33: [2, 58],
        65: [2, 58],
        72: [2, 58],
        75: [2, 58],
        80: [2, 58],
        81: [2, 58],
        82: [2, 58],
        83: [2, 58],
        84: [2, 58],
        85: [2, 58]
      }, {
        33: [2, 64],
        35: 69,
        65: [2, 64],
        72: [2, 64],
        75: [2, 64],
        80: [2, 64],
        81: [2, 64],
        82: [2, 64],
        83: [2, 64],
        84: [2, 64],
        85: [2, 64]
      }, {
        21: 70,
        23: [2, 50],
        65: [2, 50],
        72: [2, 50],
        80: [2, 50],
        81: [2, 50],
        82: [2, 50],
        83: [2, 50],
        84: [2, 50],
        85: [2, 50]
      }, {
        33: [2, 90],
        61: 71,
        65: [2, 90],
        72: [2, 90],
        80: [2, 90],
        81: [2, 90],
        82: [2, 90],
        83: [2, 90],
        84: [2, 90],
        85: [2, 90]
      }, {
        20: 75,
        33: [2, 80],
        50: 72,
        63: 73,
        64: 76,
        65: [1, 44],
        69: 74,
        70: 77,
        71: 78,
        72: [1, 79],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {72: [1, 80]}, {
        23: [2, 42],
        33: [2, 42],
        54: [2, 42],
        65: [2, 42],
        68: [2, 42],
        72: [2, 42],
        75: [2, 42],
        80: [2, 42],
        81: [2, 42],
        82: [2, 42],
        83: [2, 42],
        84: [2, 42],
        85: [2, 42],
        87: [1, 51]
      }, {
        20: 75,
        53: 81,
        54: [2, 84],
        63: 82,
        64: 76,
        65: [1, 44],
        69: 83,
        70: 77,
        71: 78,
        72: [1, 79],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        26: 84,
        47: [1, 67]
      }, {47: [2, 55]}, {
        4: 85,
        6: 3,
        14: [2, 46],
        15: [2, 46],
        19: [2, 46],
        29: [2, 46],
        34: [2, 46],
        39: [2, 46],
        44: [2, 46],
        47: [2, 46],
        48: [2, 46],
        51: [2, 46],
        55: [2, 46],
        60: [2, 46]
      }, {47: [2, 20]}, {
        20: 86,
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        4: 87,
        6: 3,
        14: [2, 46],
        15: [2, 46],
        19: [2, 46],
        29: [2, 46],
        34: [2, 46],
        47: [2, 46],
        48: [2, 46],
        51: [2, 46],
        55: [2, 46],
        60: [2, 46]
      }, {
        26: 88,
        47: [1, 67]
      }, {47: [2, 57]}, {
        5: [2, 11],
        14: [2, 11],
        15: [2, 11],
        19: [2, 11],
        29: [2, 11],
        34: [2, 11],
        39: [2, 11],
        44: [2, 11],
        47: [2, 11],
        48: [2, 11],
        51: [2, 11],
        55: [2, 11],
        60: [2, 11]
      }, {
        15: [2, 49],
        18: [2, 49]
      }, {
        20: 75,
        33: [2, 88],
        58: 89,
        63: 90,
        64: 76,
        65: [1, 44],
        69: 91,
        70: 77,
        71: 78,
        72: [1, 79],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        65: [2, 94],
        66: 92,
        68: [2, 94],
        72: [2, 94],
        80: [2, 94],
        81: [2, 94],
        82: [2, 94],
        83: [2, 94],
        84: [2, 94],
        85: [2, 94]
      }, {
        5: [2, 25],
        14: [2, 25],
        15: [2, 25],
        19: [2, 25],
        29: [2, 25],
        34: [2, 25],
        39: [2, 25],
        44: [2, 25],
        47: [2, 25],
        48: [2, 25],
        51: [2, 25],
        55: [2, 25],
        60: [2, 25]
      }, {
        20: 93,
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        20: 75,
        31: 94,
        33: [2, 60],
        63: 95,
        64: 76,
        65: [1, 44],
        69: 96,
        70: 77,
        71: 78,
        72: [1, 79],
        75: [2, 60],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        20: 75,
        33: [2, 66],
        36: 97,
        63: 98,
        64: 76,
        65: [1, 44],
        69: 99,
        70: 77,
        71: 78,
        72: [1, 79],
        75: [2, 66],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        20: 75,
        22: 100,
        23: [2, 52],
        63: 101,
        64: 76,
        65: [1, 44],
        69: 102,
        70: 77,
        71: 78,
        72: [1, 79],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        20: 75,
        33: [2, 92],
        62: 103,
        63: 104,
        64: 76,
        65: [1, 44],
        69: 105,
        70: 77,
        71: 78,
        72: [1, 79],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {33: [1, 106]}, {
        33: [2, 79],
        65: [2, 79],
        72: [2, 79],
        80: [2, 79],
        81: [2, 79],
        82: [2, 79],
        83: [2, 79],
        84: [2, 79],
        85: [2, 79]
      }, {33: [2, 81]}, {
        23: [2, 27],
        33: [2, 27],
        54: [2, 27],
        65: [2, 27],
        68: [2, 27],
        72: [2, 27],
        75: [2, 27],
        80: [2, 27],
        81: [2, 27],
        82: [2, 27],
        83: [2, 27],
        84: [2, 27],
        85: [2, 27]
      }, {
        23: [2, 28],
        33: [2, 28],
        54: [2, 28],
        65: [2, 28],
        68: [2, 28],
        72: [2, 28],
        75: [2, 28],
        80: [2, 28],
        81: [2, 28],
        82: [2, 28],
        83: [2, 28],
        84: [2, 28],
        85: [2, 28]
      }, {
        23: [2, 30],
        33: [2, 30],
        54: [2, 30],
        68: [2, 30],
        71: 107,
        72: [1, 108],
        75: [2, 30]
      }, {
        23: [2, 98],
        33: [2, 98],
        54: [2, 98],
        68: [2, 98],
        72: [2, 98],
        75: [2, 98]
      }, {
        23: [2, 45],
        33: [2, 45],
        54: [2, 45],
        65: [2, 45],
        68: [2, 45],
        72: [2, 45],
        73: [1, 109],
        75: [2, 45],
        80: [2, 45],
        81: [2, 45],
        82: [2, 45],
        83: [2, 45],
        84: [2, 45],
        85: [2, 45],
        87: [2, 45]
      }, {
        23: [2, 44],
        33: [2, 44],
        54: [2, 44],
        65: [2, 44],
        68: [2, 44],
        72: [2, 44],
        75: [2, 44],
        80: [2, 44],
        81: [2, 44],
        82: [2, 44],
        83: [2, 44],
        84: [2, 44],
        85: [2, 44],
        87: [2, 44]
      }, {54: [1, 110]}, {
        54: [2, 83],
        65: [2, 83],
        72: [2, 83],
        80: [2, 83],
        81: [2, 83],
        82: [2, 83],
        83: [2, 83],
        84: [2, 83],
        85: [2, 83]
      }, {54: [2, 85]}, {
        5: [2, 13],
        14: [2, 13],
        15: [2, 13],
        19: [2, 13],
        29: [2, 13],
        34: [2, 13],
        39: [2, 13],
        44: [2, 13],
        47: [2, 13],
        48: [2, 13],
        51: [2, 13],
        55: [2, 13],
        60: [2, 13]
      }, {
        38: 56,
        39: [1, 58],
        43: 57,
        44: [1, 59],
        45: 112,
        46: 111,
        47: [2, 76]
      }, {
        33: [2, 70],
        40: 113,
        65: [2, 70],
        72: [2, 70],
        75: [2, 70],
        80: [2, 70],
        81: [2, 70],
        82: [2, 70],
        83: [2, 70],
        84: [2, 70],
        85: [2, 70]
      }, {47: [2, 18]}, {
        5: [2, 14],
        14: [2, 14],
        15: [2, 14],
        19: [2, 14],
        29: [2, 14],
        34: [2, 14],
        39: [2, 14],
        44: [2, 14],
        47: [2, 14],
        48: [2, 14],
        51: [2, 14],
        55: [2, 14],
        60: [2, 14]
      }, {33: [1, 114]}, {
        33: [2, 87],
        65: [2, 87],
        72: [2, 87],
        80: [2, 87],
        81: [2, 87],
        82: [2, 87],
        83: [2, 87],
        84: [2, 87],
        85: [2, 87]
      }, {33: [2, 89]}, {
        20: 75,
        63: 116,
        64: 76,
        65: [1, 44],
        67: 115,
        68: [2, 96],
        69: 117,
        70: 77,
        71: 78,
        72: [1, 79],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {33: [1, 118]}, {
        32: 119,
        33: [2, 62],
        74: 120,
        75: [1, 121]
      }, {
        33: [2, 59],
        65: [2, 59],
        72: [2, 59],
        75: [2, 59],
        80: [2, 59],
        81: [2, 59],
        82: [2, 59],
        83: [2, 59],
        84: [2, 59],
        85: [2, 59]
      }, {
        33: [2, 61],
        75: [2, 61]
      }, {
        33: [2, 68],
        37: 122,
        74: 123,
        75: [1, 121]
      }, {
        33: [2, 65],
        65: [2, 65],
        72: [2, 65],
        75: [2, 65],
        80: [2, 65],
        81: [2, 65],
        82: [2, 65],
        83: [2, 65],
        84: [2, 65],
        85: [2, 65]
      }, {
        33: [2, 67],
        75: [2, 67]
      }, {23: [1, 124]}, {
        23: [2, 51],
        65: [2, 51],
        72: [2, 51],
        80: [2, 51],
        81: [2, 51],
        82: [2, 51],
        83: [2, 51],
        84: [2, 51],
        85: [2, 51]
      }, {23: [2, 53]}, {33: [1, 125]}, {
        33: [2, 91],
        65: [2, 91],
        72: [2, 91],
        80: [2, 91],
        81: [2, 91],
        82: [2, 91],
        83: [2, 91],
        84: [2, 91],
        85: [2, 91]
      }, {33: [2, 93]}, {
        5: [2, 22],
        14: [2, 22],
        15: [2, 22],
        19: [2, 22],
        29: [2, 22],
        34: [2, 22],
        39: [2, 22],
        44: [2, 22],
        47: [2, 22],
        48: [2, 22],
        51: [2, 22],
        55: [2, 22],
        60: [2, 22]
      }, {
        23: [2, 99],
        33: [2, 99],
        54: [2, 99],
        68: [2, 99],
        72: [2, 99],
        75: [2, 99]
      }, {73: [1, 109]}, {
        20: 75,
        63: 126,
        64: 76,
        65: [1, 44],
        72: [1, 35],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        5: [2, 23],
        14: [2, 23],
        15: [2, 23],
        19: [2, 23],
        29: [2, 23],
        34: [2, 23],
        39: [2, 23],
        44: [2, 23],
        47: [2, 23],
        48: [2, 23],
        51: [2, 23],
        55: [2, 23],
        60: [2, 23]
      }, {47: [2, 19]}, {47: [2, 77]}, {
        20: 75,
        33: [2, 72],
        41: 127,
        63: 128,
        64: 76,
        65: [1, 44],
        69: 129,
        70: 77,
        71: 78,
        72: [1, 79],
        75: [2, 72],
        78: 26,
        79: 27,
        80: [1, 28],
        81: [1, 29],
        82: [1, 30],
        83: [1, 31],
        84: [1, 32],
        85: [1, 34],
        86: 33
      }, {
        5: [2, 24],
        14: [2, 24],
        15: [2, 24],
        19: [2, 24],
        29: [2, 24],
        34: [2, 24],
        39: [2, 24],
        44: [2, 24],
        47: [2, 24],
        48: [2, 24],
        51: [2, 24],
        55: [2, 24],
        60: [2, 24]
      }, {68: [1, 130]}, {
        65: [2, 95],
        68: [2, 95],
        72: [2, 95],
        80: [2, 95],
        81: [2, 95],
        82: [2, 95],
        83: [2, 95],
        84: [2, 95],
        85: [2, 95]
      }, {68: [2, 97]}, {
        5: [2, 21],
        14: [2, 21],
        15: [2, 21],
        19: [2, 21],
        29: [2, 21],
        34: [2, 21],
        39: [2, 21],
        44: [2, 21],
        47: [2, 21],
        48: [2, 21],
        51: [2, 21],
        55: [2, 21],
        60: [2, 21]
      }, {33: [1, 131]}, {33: [2, 63]}, {
        72: [1, 133],
        76: 132
      }, {33: [1, 134]}, {33: [2, 69]}, {15: [2, 12]}, {
        14: [2, 26],
        15: [2, 26],
        19: [2, 26],
        29: [2, 26],
        34: [2, 26],
        47: [2, 26],
        48: [2, 26],
        51: [2, 26],
        55: [2, 26],
        60: [2, 26]
      }, {
        23: [2, 31],
        33: [2, 31],
        54: [2, 31],
        68: [2, 31],
        72: [2, 31],
        75: [2, 31]
      }, {
        33: [2, 74],
        42: 135,
        74: 136,
        75: [1, 121]
      }, {
        33: [2, 71],
        65: [2, 71],
        72: [2, 71],
        75: [2, 71],
        80: [2, 71],
        81: [2, 71],
        82: [2, 71],
        83: [2, 71],
        84: [2, 71],
        85: [2, 71]
      }, {
        33: [2, 73],
        75: [2, 73]
      }, {
        23: [2, 29],
        33: [2, 29],
        54: [2, 29],
        65: [2, 29],
        68: [2, 29],
        72: [2, 29],
        75: [2, 29],
        80: [2, 29],
        81: [2, 29],
        82: [2, 29],
        83: [2, 29],
        84: [2, 29],
        85: [2, 29]
      }, {
        14: [2, 15],
        15: [2, 15],
        19: [2, 15],
        29: [2, 15],
        34: [2, 15],
        39: [2, 15],
        44: [2, 15],
        47: [2, 15],
        48: [2, 15],
        51: [2, 15],
        55: [2, 15],
        60: [2, 15]
      }, {
        72: [1, 138],
        77: [1, 137]
      }, {
        72: [2, 100],
        77: [2, 100]
      }, {
        14: [2, 16],
        15: [2, 16],
        19: [2, 16],
        29: [2, 16],
        34: [2, 16],
        44: [2, 16],
        47: [2, 16],
        48: [2, 16],
        51: [2, 16],
        55: [2, 16],
        60: [2, 16]
      }, {33: [1, 139]}, {33: [2, 75]}, {33: [2, 32]}, {
        72: [2, 101],
        77: [2, 101]
      }, {
        14: [2, 17],
        15: [2, 17],
        19: [2, 17],
        29: [2, 17],
        34: [2, 17],
        39: [2, 17],
        44: [2, 17],
        47: [2, 17],
        48: [2, 17],
        51: [2, 17],
        55: [2, 17],
        60: [2, 17]
      }],
      defaultActions: {
        4: [2, 1],
        55: [2, 55],
        57: [2, 20],
        61: [2, 57],
        74: [2, 81],
        83: [2, 85],
        87: [2, 18],
        91: [2, 89],
        102: [2, 53],
        105: [2, 93],
        111: [2, 19],
        112: [2, 77],
        117: [2, 97],
        120: [2, 63],
        123: [2, 69],
        124: [2, 12],
        136: [2, 75],
        137: [2, 32]
      },
      parseError: function parseError(str, hash) {
        throw new Error(str);
      },
      parse: function parse(input) {
        var self = this,
            stack = [0],
            vstack = [null],
            lstack = [],
            table = this.table,
            yytext = "",
            yylineno = 0,
            yyleng = 0,
            recovering = 0,
            TERROR = 2,
            EOF = 1;
        this.lexer.setInput(input);
        this.lexer.yy = this.yy;
        this.yy.lexer = this.lexer;
        this.yy.parser = this;
        if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
        var yyloc = this.lexer.yylloc;
        lstack.push(yyloc);
        var ranges = this.lexer.options && this.lexer.options.ranges;
        if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
        function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
        }
        function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
            token = self.symbols_[token] || token;
          }
          return token;
        }
        var symbol,
            preErrorSymbol,
            state,
            action,
            a,
            r,
            yyval = {},
            p,
            len,
            newState,
            expected;
        while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol == "undefined") {
              symbol = lex();
            }
            action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
              expected = [];
              for (p in table[state])
                if (this.terminals_[p] && p > 2) {
                  expected.push("'" + this.terminals_[p] + "'");
                }
              if (this.lexer.showPosition) {
                errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
              } else {
                errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
              }
              this.parseError(errStr, {
                text: this.lexer.match,
                token: this.terminals_[symbol] || symbol,
                line: this.lexer.yylineno,
                loc: yyloc,
                expected: expected
              });
            }
          }
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
            case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                  recovering--;
              } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
              }
              break;
            case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
              };
              if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                return r;
              }
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }
    };
    var lexer = (function() {
      var lexer = {
        EOF: 1,
        parseError: function parseError(str, hash) {
          if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },
        setInput: function setInput(input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          };
          if (this.options.ranges)
            this.yylloc.range = [0, 0];
          this.offset = 0;
          return this;
        },
        input: function input() {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges)
            this.yylloc.range[1]++;
          this._input = this._input.slice(1);
          return ch;
        },
        unput: function unput(ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          if (lines.length - 1)
            this.yylineno -= lines.length - 1;
          var r = this.yylloc.range;
          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
          };
          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
        },
        more: function more() {
          this._more = true;
          return this;
        },
        less: function less(n) {
          this.unput(this.match.slice(n));
        },
        pastInput: function pastInput() {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
        },
        upcomingInput: function upcomingInput() {
          var next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
        },
        showPosition: function showPosition() {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
        },
        next: function next() {
          if (this.done) {
            return this.EOF;
          }
          if (!this._input)
            this.done = true;
          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
            this.yytext = '';
            this.match = '';
          }
          var rules = this._currentRules();
          for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
              match = tempMatch;
              index = i;
              if (!this.options.flex)
                break;
            }
          }
          if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines)
              this.yylineno += lines.length;
            this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
            };
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
              this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
            if (this.done && this._input)
              this.done = false;
            if (token)
              return token;
            else
              return;
          }
          if (this._input === "") {
            return this.EOF;
          } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
        },
        lex: function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
            return r;
          } else {
            return this.lex();
          }
        },
        begin: function begin(condition) {
          this.conditionStack.push(condition);
        },
        popState: function popState() {
          return this.conditionStack.pop();
        },
        _currentRules: function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        },
        topState: function topState() {
          return this.conditionStack[this.conditionStack.length - 2];
        },
        pushState: function begin(condition) {
          this.begin(condition);
        }
      };
      lexer.options = {};
      lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        function strip(start, end) {
          return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
        }
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            if (yy_.yytext.slice(-2) === "\\\\") {
              strip(0, 1);
              this.begin("mu");
            } else if (yy_.yytext.slice(-1) === "\\") {
              strip(0, 1);
              this.begin("emu");
            } else {
              this.begin("mu");
            }
            if (yy_.yytext)
              return 15;
            break;
          case 1:
            return 15;
            break;
          case 2:
            this.popState();
            return 15;
            break;
          case 3:
            this.begin('raw');
            return 15;
            break;
          case 4:
            this.popState();
            if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
              return 15;
            } else {
              yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
              return 'END_RAW_BLOCK';
            }
            break;
          case 5:
            return 15;
            break;
          case 6:
            this.popState();
            return 14;
            break;
          case 7:
            return 65;
            break;
          case 8:
            return 68;
            break;
          case 9:
            return 19;
            break;
          case 10:
            this.popState();
            this.begin('raw');
            return 23;
            break;
          case 11:
            return 55;
            break;
          case 12:
            return 60;
            break;
          case 13:
            return 29;
            break;
          case 14:
            return 47;
            break;
          case 15:
            this.popState();
            return 44;
            break;
          case 16:
            this.popState();
            return 44;
            break;
          case 17:
            return 34;
            break;
          case 18:
            return 39;
            break;
          case 19:
            return 51;
            break;
          case 20:
            return 48;
            break;
          case 21:
            this.unput(yy_.yytext);
            this.popState();
            this.begin('com');
            break;
          case 22:
            this.popState();
            return 14;
            break;
          case 23:
            return 48;
            break;
          case 24:
            return 73;
            break;
          case 25:
            return 72;
            break;
          case 26:
            return 72;
            break;
          case 27:
            return 87;
            break;
          case 28:
            break;
          case 29:
            this.popState();
            return 54;
            break;
          case 30:
            this.popState();
            return 33;
            break;
          case 31:
            yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
            return 80;
            break;
          case 32:
            yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
            return 80;
            break;
          case 33:
            return 85;
            break;
          case 34:
            return 82;
            break;
          case 35:
            return 82;
            break;
          case 36:
            return 83;
            break;
          case 37:
            return 84;
            break;
          case 38:
            return 81;
            break;
          case 39:
            return 75;
            break;
          case 40:
            return 77;
            break;
          case 41:
            return 72;
            break;
          case 42:
            yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');
            return 72;
            break;
          case 43:
            return 'INVALID';
            break;
          case 44:
            return 5;
            break;
        }
      };
      lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
      lexer.conditions = {
        "mu": {
          "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
          "inclusive": false
        },
        "emu": {
          "rules": [2],
          "inclusive": false
        },
        "com": {
          "rules": [6],
          "inclusive": false
        },
        "raw": {
          "rules": [3, 4, 5],
          "inclusive": false
        },
        "INITIAL": {
          "rules": [0, 1, 44],
          "inclusive": true
        }
      };
      return lexer;
    })();
    parser.lexer = lexer;
    function Parser() {
      this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser();
  })();
  exports.__esModule = true;
  exports['default'] = handlebars;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("18", ["exports", "module", "19"], function(exports, module, _visitor) {
  'use strict';
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _Visitor = _interopRequireDefault(_visitor);
  function WhitespaceControl() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    this.options = options;
  }
  WhitespaceControl.prototype = new _Visitor['default']();
  WhitespaceControl.prototype.Program = function(program) {
    var doStandalone = !this.options.ignoreStandalone;
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;
    var body = program.body;
    for (var i = 0,
        l = body.length; i < l; i++) {
      var current = body[i],
          strip = this.accept(current);
      if (!strip) {
        continue;
      }
      var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
          _isNextWhitespace = isNextWhitespace(body, i, isRoot),
          openStandalone = strip.openStandalone && _isPrevWhitespace,
          closeStandalone = strip.closeStandalone && _isNextWhitespace,
          inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
      if (strip.close) {
        omitRight(body, i, true);
      }
      if (strip.open) {
        omitLeft(body, i, true);
      }
      if (doStandalone && inlineStandalone) {
        omitRight(body, i);
        if (omitLeft(body, i)) {
          if (current.type === 'PartialStatement') {
            current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
          }
        }
      }
      if (doStandalone && openStandalone) {
        omitRight((current.program || current.inverse).body);
        omitLeft(body, i);
      }
      if (doStandalone && closeStandalone) {
        omitRight(body, i);
        omitLeft((current.inverse || current.program).body);
      }
    }
    return program;
  };
  WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
    this.accept(block.program);
    this.accept(block.inverse);
    var program = block.program || block.inverse,
        inverse = block.program && block.inverse,
        firstInverse = inverse,
        lastInverse = inverse;
    if (inverse && inverse.chained) {
      firstInverse = inverse.body[0].program;
      while (lastInverse.chained) {
        lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
      }
    }
    var strip = {
      open: block.openStrip.open,
      close: block.closeStrip.close,
      openStandalone: isNextWhitespace(program.body),
      closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };
    if (block.openStrip.close) {
      omitRight(program.body, null, true);
    }
    if (inverse) {
      var inverseStrip = block.inverseStrip;
      if (inverseStrip.open) {
        omitLeft(program.body, null, true);
      }
      if (inverseStrip.close) {
        omitRight(firstInverse.body, null, true);
      }
      if (block.closeStrip.open) {
        omitLeft(lastInverse.body, null, true);
      }
      if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
        omitLeft(program.body);
        omitRight(firstInverse.body);
      }
    } else if (block.closeStrip.open) {
      omitLeft(program.body, null, true);
    }
    return strip;
  };
  WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
    return mustache.strip;
  };
  WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
    var strip = node.strip || {};
    return {
      inlineStandalone: true,
      open: strip.open,
      close: strip.close
    };
  };
  function isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) {
      i = body.length;
    }
    var prev = body[i - 1],
        sibling = body[i - 2];
    if (!prev) {
      return isRoot;
    }
    if (prev.type === 'ContentStatement') {
      return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
    }
  }
  function isNextWhitespace(body, i, isRoot) {
    if (i === undefined) {
      i = -1;
    }
    var next = body[i + 1],
        sibling = body[i + 2];
    if (!next) {
      return isRoot;
    }
    if (next.type === 'ContentStatement') {
      return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
    }
  }
  function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
      return;
    }
    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
    current.rightStripped = current.value !== original;
  }
  function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
      return;
    }
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
    current.leftStripped = current.value !== original;
    return current.leftStripped;
  }
  module.exports = WhitespaceControl;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("1a", ["exports", "13"], function(exports, _exception) {
  'use strict';
  exports.__esModule = true;
  exports.SourceLocation = SourceLocation;
  exports.id = id;
  exports.stripFlags = stripFlags;
  exports.stripComment = stripComment;
  exports.preparePath = preparePath;
  exports.prepareMustache = prepareMustache;
  exports.prepareRawBlock = prepareRawBlock;
  exports.prepareBlock = prepareBlock;
  exports.prepareProgram = prepareProgram;
  exports.preparePartialBlock = preparePartialBlock;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _Exception = _interopRequireDefault(_exception);
  function validateClose(open, close) {
    close = close.path ? close.path.original : close;
    if (open.path.original !== close) {
      var errorNode = {loc: open.path.loc};
      throw new _Exception['default'](open.path.original + " doesn't match " + close, errorNode);
    }
  }
  function SourceLocation(source, locInfo) {
    this.source = source;
    this.start = {
      line: locInfo.first_line,
      column: locInfo.first_column
    };
    this.end = {
      line: locInfo.last_line,
      column: locInfo.last_column
    };
  }
  function id(token) {
    if (/^\[.*\]$/.test(token)) {
      return token.substr(1, token.length - 2);
    } else {
      return token;
    }
  }
  function stripFlags(open, close) {
    return {
      open: open.charAt(2) === '~',
      close: close.charAt(close.length - 3) === '~'
    };
  }
  function stripComment(comment) {
    return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
  }
  function preparePath(data, parts, loc) {
    loc = this.locInfo(loc);
    var original = data ? '@' : '',
        dig = [],
        depth = 0,
        depthString = '';
    for (var i = 0,
        l = parts.length; i < l; i++) {
      var part = parts[i].part,
          isLiteral = parts[i].original !== part;
      original += (parts[i].separator || '') + part;
      if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
        if (dig.length > 0) {
          throw new _Exception['default']('Invalid path: ' + original, {loc: loc});
        } else if (part === '..') {
          depth++;
          depthString += '../';
        }
      } else {
        dig.push(part);
      }
    }
    return {
      type: 'PathExpression',
      data: data,
      depth: depth,
      parts: dig,
      original: original,
      loc: loc
    };
  }
  function prepareMustache(path, params, hash, open, strip, locInfo) {
    var escapeFlag = open.charAt(3) || open.charAt(2),
        escaped = escapeFlag !== '{' && escapeFlag !== '&';
    var decorator = /\*/.test(open);
    return {
      type: decorator ? 'Decorator' : 'MustacheStatement',
      path: path,
      params: params,
      hash: hash,
      escaped: escaped,
      strip: strip,
      loc: this.locInfo(locInfo)
    };
  }
  function prepareRawBlock(openRawBlock, contents, close, locInfo) {
    validateClose(openRawBlock, close);
    locInfo = this.locInfo(locInfo);
    var program = {
      type: 'Program',
      body: contents,
      strip: {},
      loc: locInfo
    };
    return {
      type: 'BlockStatement',
      path: openRawBlock.path,
      params: openRawBlock.params,
      hash: openRawBlock.hash,
      program: program,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: locInfo
    };
  }
  function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
    if (close && close.path) {
      validateClose(openBlock, close);
    }
    var decorator = /\*/.test(openBlock.open);
    program.blockParams = openBlock.blockParams;
    var inverse = undefined,
        inverseStrip = undefined;
    if (inverseAndProgram) {
      if (decorator) {
        throw new _Exception['default']('Unexpected inverse block on decorator', inverseAndProgram);
      }
      if (inverseAndProgram.chain) {
        inverseAndProgram.program.body[0].closeStrip = close.strip;
      }
      inverseStrip = inverseAndProgram.strip;
      inverse = inverseAndProgram.program;
    }
    if (inverted) {
      inverted = inverse;
      inverse = program;
      program = inverted;
    }
    return {
      type: decorator ? 'DecoratorBlock' : 'BlockStatement',
      path: openBlock.path,
      params: openBlock.params,
      hash: openBlock.hash,
      program: program,
      inverse: inverse,
      openStrip: openBlock.strip,
      inverseStrip: inverseStrip,
      closeStrip: close && close.strip,
      loc: this.locInfo(locInfo)
    };
  }
  function prepareProgram(statements, loc) {
    if (!loc && statements.length) {
      var firstLoc = statements[0].loc,
          lastLoc = statements[statements.length - 1].loc;
      if (firstLoc && lastLoc) {
        loc = {
          source: firstLoc.source,
          start: {
            line: firstLoc.start.line,
            column: firstLoc.start.column
          },
          end: {
            line: lastLoc.end.line,
            column: lastLoc.end.column
          }
        };
      }
    }
    return {
      type: 'Program',
      body: statements,
      strip: {},
      loc: loc
    };
  }
  function preparePartialBlock(open, program, close, locInfo) {
    validateClose(open, close);
    return {
      type: 'PartialBlockStatement',
      name: open.path,
      params: open.params,
      hash: open.hash,
      program: program,
      openStrip: open.strip,
      closeStrip: close && close.strip,
      loc: this.locInfo(locInfo)
    };
  }
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("1b", ["exports", "17", "18", "1a", "12"], function(exports, _parser, _whitespaceControl, _helpers, _utils) {
  'use strict';
  exports.__esModule = true;
  exports.parse = parse;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _parser2 = _interopRequireDefault(_parser);
  var _WhitespaceControl = _interopRequireDefault(_whitespaceControl);
  exports.parser = _parser2['default'];
  var yy = {};
  _utils.extend(yy, _helpers);
  function parse(input, options) {
    if (input.type === 'Program') {
      return input;
    }
    _parser2['default'].yy = yy;
    yy.locInfo = function(locInfo) {
      return new yy.SourceLocation(options && options.srcName, locInfo);
    };
    var strip = new _WhitespaceControl['default'](options);
    return strip.accept(_parser2['default'].parse(input));
  }
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("1c", ["exports", "module"], function(exports, module) {
  'use strict';
  var AST = {helpers: {
      helperExpression: function helperExpression(node) {
        return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
      },
      scopedId: function scopedId(path) {
        return (/^\.|this\b/.test(path.original));
      },
      simpleId: function simpleId(path) {
        return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
      }
    }};
  module.exports = AST;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("1d", ["exports", "13", "12", "1c"], function(exports, _exception, _utils, _ast) {
  'use strict';
  exports.__esModule = true;
  exports.Compiler = Compiler;
  exports.precompile = precompile;
  exports.compile = compile;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _Exception = _interopRequireDefault(_exception);
  var _AST = _interopRequireDefault(_ast);
  var slice = [].slice;
  function Compiler() {}
  Compiler.prototype = {
    compiler: Compiler,
    equals: function equals(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }
      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
          return false;
        }
      }
      len = this.children.length;
      for (var i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }
      return true;
    },
    guid: 0,
    compile: function compile(program, options) {
      this.sourceNode = [];
      this.opcodes = [];
      this.children = [];
      this.options = options;
      this.stringParams = options.stringParams;
      this.trackIds = options.trackIds;
      options.blockParams = options.blockParams || [];
      var knownHelpers = options.knownHelpers;
      options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true,
        'lookup': true
      };
      if (knownHelpers) {
        for (var _name in knownHelpers) {
          if (_name in knownHelpers) {
            options.knownHelpers[_name] = knownHelpers[_name];
          }
        }
      }
      return this.accept(program);
    },
    compileProgram: function compileProgram(program) {
      var childCompiler = new this.compiler(),
          result = childCompiler.compile(program, this.options),
          guid = this.guid++;
      this.usePartial = this.usePartial || result.usePartial;
      this.children[guid] = result;
      this.useDepths = this.useDepths || result.useDepths;
      return guid;
    },
    accept: function accept(node) {
      if (!this[node.type]) {
        throw new _Exception['default']('Unknown type: ' + node.type, node);
      }
      this.sourceNode.unshift(node);
      var ret = this[node.type](node);
      this.sourceNode.shift();
      return ret;
    },
    Program: function Program(program) {
      this.options.blockParams.unshift(program.blockParams);
      var body = program.body,
          bodyLength = body.length;
      for (var i = 0; i < bodyLength; i++) {
        this.accept(body[i]);
      }
      this.options.blockParams.shift();
      this.isSimple = bodyLength === 1;
      this.blockParams = program.blockParams ? program.blockParams.length : 0;
      return this;
    },
    BlockStatement: function BlockStatement(block) {
      transformLiteralToPath(block);
      var program = block.program,
          inverse = block.inverse;
      program = program && this.compileProgram(program);
      inverse = inverse && this.compileProgram(inverse);
      var type = this.classifySexpr(block);
      if (type === 'helper') {
        this.helperSexpr(block, program, inverse);
      } else if (type === 'simple') {
        this.simpleSexpr(block);
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue', block.path.original);
      } else {
        this.ambiguousSexpr(block, program, inverse);
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }
      this.opcode('append');
    },
    DecoratorBlock: function DecoratorBlock(decorator) {
      var program = decorator.program && this.compileProgram(decorator.program);
      var params = this.setupFullMustacheParams(decorator, program, undefined),
          path = decorator.path;
      this.useDecorators = true;
      this.opcode('registerDecorator', params.length, path.original);
    },
    PartialStatement: function PartialStatement(partial) {
      this.usePartial = true;
      var program = partial.program;
      if (program) {
        program = this.compileProgram(partial.program);
      }
      var params = partial.params;
      if (params.length > 1) {
        throw new _Exception['default']('Unsupported number of partial arguments: ' + params.length, partial);
      } else if (!params.length) {
        if (this.options.explicitPartialContext) {
          this.opcode('pushLiteral', 'undefined');
        } else {
          params.push({
            type: 'PathExpression',
            parts: [],
            depth: 0
          });
        }
      }
      var partialName = partial.name.original,
          isDynamic = partial.name.type === 'SubExpression';
      if (isDynamic) {
        this.accept(partial.name);
      }
      this.setupFullMustacheParams(partial, program, undefined, true);
      var indent = partial.indent || '';
      if (this.options.preventIndent && indent) {
        this.opcode('appendContent', indent);
        indent = '';
      }
      this.opcode('invokePartial', isDynamic, partialName, indent);
      this.opcode('append');
    },
    PartialBlockStatement: function PartialBlockStatement(partialBlock) {
      this.PartialStatement(partialBlock);
    },
    MustacheStatement: function MustacheStatement(mustache) {
      this.SubExpression(mustache);
      if (mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },
    Decorator: function Decorator(decorator) {
      this.DecoratorBlock(decorator);
    },
    ContentStatement: function ContentStatement(content) {
      if (content.value) {
        this.opcode('appendContent', content.value);
      }
    },
    CommentStatement: function CommentStatement() {},
    SubExpression: function SubExpression(sexpr) {
      transformLiteralToPath(sexpr);
      var type = this.classifySexpr(sexpr);
      if (type === 'simple') {
        this.simpleSexpr(sexpr);
      } else if (type === 'helper') {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },
    ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
      var path = sexpr.path,
          name = path.parts[0],
          isBlock = program != null || inverse != null;
      this.opcode('getContext', path.depth);
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      path.strict = true;
      this.accept(path);
      this.opcode('invokeAmbiguous', name, isBlock);
    },
    simpleSexpr: function simpleSexpr(sexpr) {
      var path = sexpr.path;
      path.strict = true;
      this.accept(path);
      this.opcode('resolvePossibleLambda');
    },
    helperSexpr: function helperSexpr(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          path = sexpr.path,
          name = path.parts[0];
      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new _Exception['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
      } else {
        path.strict = true;
        path.falsy = true;
        this.accept(path);
        this.opcode('invokeHelper', params.length, path.original, _AST['default'].helpers.simpleId(path));
      }
    },
    PathExpression: function PathExpression(path) {
      this.addDepth(path.depth);
      this.opcode('getContext', path.depth);
      var name = path.parts[0],
          scoped = _AST['default'].helpers.scopedId(path),
          blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
      if (blockParamId) {
        this.opcode('lookupBlockParam', blockParamId, path.parts);
      } else if (!name) {
        this.opcode('pushContext');
      } else if (path.data) {
        this.options.data = true;
        this.opcode('lookupData', path.depth, path.parts, path.strict);
      } else {
        this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
      }
    },
    StringLiteral: function StringLiteral(string) {
      this.opcode('pushString', string.value);
    },
    NumberLiteral: function NumberLiteral(number) {
      this.opcode('pushLiteral', number.value);
    },
    BooleanLiteral: function BooleanLiteral(bool) {
      this.opcode('pushLiteral', bool.value);
    },
    UndefinedLiteral: function UndefinedLiteral() {
      this.opcode('pushLiteral', 'undefined');
    },
    NullLiteral: function NullLiteral() {
      this.opcode('pushLiteral', 'null');
    },
    Hash: function Hash(hash) {
      var pairs = hash.pairs,
          i = 0,
          l = pairs.length;
      this.opcode('pushHash');
      for (; i < l; i++) {
        this.pushParam(pairs[i].value);
      }
      while (i--) {
        this.opcode('assignToHash', pairs[i].key);
      }
      this.opcode('popHash');
    },
    opcode: function opcode(name) {
      this.opcodes.push({
        opcode: name,
        args: slice.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function addDepth(depth) {
      if (!depth) {
        return;
      }
      this.useDepths = true;
    },
    classifySexpr: function classifySexpr(sexpr) {
      var isSimple = _AST['default'].helpers.simpleId(sexpr.path);
      var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
      var isHelper = !isBlockParam && _AST['default'].helpers.helperExpression(sexpr);
      var isEligible = !isBlockParam && (isHelper || isSimple);
      if (isEligible && !isHelper) {
        var _name2 = sexpr.path.parts[0],
            options = this.options;
        if (options.knownHelpers[_name2]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }
      if (isHelper) {
        return 'helper';
      } else if (isEligible) {
        return 'ambiguous';
      } else {
        return 'simple';
      }
    },
    pushParams: function pushParams(params) {
      for (var i = 0,
          l = params.length; i < l; i++) {
        this.pushParam(params[i]);
      }
    },
    pushParam: function pushParam(val) {
      var value = val.value != null ? val.value : val.original || '';
      if (this.stringParams) {
        if (value.replace) {
          value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
        }
        if (val.depth) {
          this.addDepth(val.depth);
        }
        this.opcode('getContext', val.depth || 0);
        this.opcode('pushStringParam', value, val.type);
        if (val.type === 'SubExpression') {
          this.accept(val);
        }
      } else {
        if (this.trackIds) {
          var blockParamIndex = undefined;
          if (val.parts && !_AST['default'].helpers.scopedId(val) && !val.depth) {
            blockParamIndex = this.blockParamIndex(val.parts[0]);
          }
          if (blockParamIndex) {
            var blockParamChild = val.parts.slice(1).join('.');
            this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
          } else {
            value = val.original || value;
            if (value.replace) {
              value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
            }
            this.opcode('pushId', val.type, value);
          }
        }
        this.accept(val);
      }
    },
    setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
      var params = sexpr.params;
      this.pushParams(params);
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      if (sexpr.hash) {
        this.accept(sexpr.hash);
      } else {
        this.opcode('emptyHash', omitEmpty);
      }
      return params;
    },
    blockParamIndex: function blockParamIndex(name) {
      for (var depth = 0,
          len = this.options.blockParams.length; depth < len; depth++) {
        var blockParams = this.options.blockParams[depth],
            param = blockParams && _utils.indexOf(blockParams, name);
        if (blockParams && param >= 0) {
          return [depth, param];
        }
      }
    }
  };
  function precompile(input, options, env) {
    if (input == null || typeof input !== 'string' && input.type !== 'Program') {
      throw new _Exception['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
    }
    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }
    if (options.compat) {
      options.useDepths = true;
    }
    var ast = env.parse(input, options),
        environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }
  function compile(input, options, env) {
    if (options === undefined)
      options = {};
    if (input == null || typeof input !== 'string' && input.type !== 'Program') {
      throw new _Exception['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
    }
    if (!('data' in options)) {
      options.data = true;
    }
    if (options.compat) {
      options.useDepths = true;
    }
    var compiled = undefined;
    function compileInput() {
      var ast = env.parse(input, options),
          environment = new env.Compiler().compile(ast, options),
          templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }
    function ret(context, execOptions) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, execOptions);
    }
    ret._setup = function(setupOptions) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled._setup(setupOptions);
    };
    ret._child = function(i, data, blockParams, depths) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled._child(i, data, blockParams, depths);
    };
    return ret;
  }
  function argEquals(a, b) {
    if (a === b) {
      return true;
    }
    if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
      for (var i = 0; i < a.length; i++) {
        if (!argEquals(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
  }
  function transformLiteralToPath(sexpr) {
    if (!sexpr.path.parts) {
      var literal = sexpr.path;
      sexpr.path = {
        type: 'PathExpression',
        data: false,
        depth: 0,
        parts: [literal.original + ''],
        original: literal.original + '',
        loc: literal.loc
      };
    }
  }
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("1e", ["exports", "module", "12"], function(exports, module, _utils) {
  'use strict';
  module.exports = function(instance) {
    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse,
          fn = options.fn;
      if (context === true) {
        return fn(this);
      } else if (context === false || context == null) {
        return inverse(this);
      } else if (_utils.isArray(context)) {
        if (context.length > 0) {
          if (options.ids) {
            options.ids = [options.name];
          }
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        if (options.data && options.ids) {
          var data = _utils.createFrame(options.data);
          data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
          options = {data: data};
        }
        return fn(context, options);
      }
    });
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("1f", ["exports", "module", "12", "13"], function(exports, module, _utils, _exception) {
  'use strict';
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _Exception = _interopRequireDefault(_exception);
  module.exports = function(instance) {
    instance.registerHelper('each', function(context, options) {
      if (!options) {
        throw new _Exception['default']('Must pass iterator to #each');
      }
      var fn = options.fn,
          inverse = options.inverse,
          i = 0,
          ret = '',
          data = undefined,
          contextPath = undefined;
      if (options.data && options.ids) {
        contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
      }
      if (_utils.isFunction(context)) {
        context = context.call(this);
      }
      if (options.data) {
        data = _utils.createFrame(options.data);
      }
      function execIteration(field, index, last) {
        if (data) {
          data.key = field;
          data.index = index;
          data.first = index === 0;
          data.last = !!last;
          if (contextPath) {
            data.contextPath = contextPath + field;
          }
        }
        ret = ret + fn(context[field], {
          data: data,
          blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
        });
      }
      if (context && typeof context === 'object') {
        if (_utils.isArray(context)) {
          for (var j = context.length; i < j; i++) {
            if (i in context) {
              execIteration(i, i, i === context.length - 1);
            }
          }
        } else {
          var priorKey = undefined;
          for (var key in context) {
            if (context.hasOwnProperty(key)) {
              if (priorKey !== undefined) {
                execIteration(priorKey, i - 1);
              }
              priorKey = key;
              i++;
            }
          }
          if (priorKey !== undefined) {
            execIteration(priorKey, i - 1, true);
          }
        }
      }
      if (i === 0) {
        ret = inverse(this);
      }
      return ret;
    });
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("20", ["exports", "module", "13"], function(exports, module, _exception) {
  'use strict';
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _Exception = _interopRequireDefault(_exception);
  module.exports = function(instance) {
    instance.registerHelper('helperMissing', function() {
      if (arguments.length === 1) {
        return undefined;
      } else {
        throw new _Exception['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      }
    });
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("21", ["exports", "module", "12"], function(exports, module, _utils) {
  'use strict';
  module.exports = function(instance) {
    instance.registerHelper('if', function(conditional, options) {
      if (_utils.isFunction(conditional)) {
        conditional = conditional.call(this);
      }
      if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });
    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {
        fn: options.inverse,
        inverse: options.fn,
        hash: options.hash
      });
    });
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("22", ["exports", "module"], function(exports, module) {
  'use strict';
  module.exports = function(instance) {
    instance.registerHelper('log', function() {
      var args = [undefined],
          options = arguments[arguments.length - 1];
      for (var i = 0; i < arguments.length - 1; i++) {
        args.push(arguments[i]);
      }
      var level = 1;
      if (options.hash.level != null) {
        level = options.hash.level;
      } else if (options.data && options.data.level != null) {
        level = options.data.level;
      }
      args[0] = level;
      instance.log.apply(instance, args);
    });
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("23", ["exports", "module"], function(exports, module) {
  'use strict';
  module.exports = function(instance) {
    instance.registerHelper('lookup', function(obj, field) {
      return obj && obj[field];
    });
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("24", ["exports", "module", "12"], function(exports, module, _utils) {
  'use strict';
  module.exports = function(instance) {
    instance.registerHelper('with', function(context, options) {
      if (_utils.isFunction(context)) {
        context = context.call(this);
      }
      var fn = options.fn;
      if (!_utils.isEmpty(context)) {
        var data = options.data;
        if (options.data && options.ids) {
          data = _utils.createFrame(options.data);
          data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
        }
        return fn(context, {
          data: data,
          blockParams: _utils.blockParams([context], [data && data.contextPath])
        });
      } else {
        return options.inverse(this);
      }
    });
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("25", ["exports", "1e", "1f", "20", "21", "22", "23", "24"], function(exports, _helpersBlockHelperMissing, _helpersEach, _helpersHelperMissing, _helpersIf, _helpersLog, _helpersLookup, _helpersWith) {
  'use strict';
  exports.__esModule = true;
  exports.registerDefaultHelpers = registerDefaultHelpers;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _registerBlockHelperMissing = _interopRequireDefault(_helpersBlockHelperMissing);
  var _registerEach = _interopRequireDefault(_helpersEach);
  var _registerHelperMissing = _interopRequireDefault(_helpersHelperMissing);
  var _registerIf = _interopRequireDefault(_helpersIf);
  var _registerLog = _interopRequireDefault(_helpersLog);
  var _registerLookup = _interopRequireDefault(_helpersLookup);
  var _registerWith = _interopRequireDefault(_helpersWith);
  function registerDefaultHelpers(instance) {
    _registerBlockHelperMissing['default'](instance);
    _registerEach['default'](instance);
    _registerHelperMissing['default'](instance);
    _registerIf['default'](instance);
    _registerLog['default'](instance);
    _registerLookup['default'](instance);
    _registerWith['default'](instance);
  }
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("26", ["exports", "module", "12"], function(exports, module, _utils) {
  'use strict';
  module.exports = function(instance) {
    instance.registerDecorator('inline', function(fn, props, container, options) {
      var ret = fn;
      if (!props.partials) {
        props.partials = {};
        ret = function(context, options) {
          var original = container.partials;
          container.partials = _utils.extend({}, original, props.partials);
          var ret = fn(context, options);
          container.partials = original;
          return ret;
        };
      }
      props.partials[options.args[0]] = options.fn;
      return ret;
    });
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("27", ["exports", "26"], function(exports, _decoratorsInline) {
  'use strict';
  exports.__esModule = true;
  exports.registerDefaultDecorators = registerDefaultDecorators;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _registerInline = _interopRequireDefault(_decoratorsInline);
  function registerDefaultDecorators(instance) {
    _registerInline['default'](instance);
  }
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("28", ["exports", "module", "12"], function(exports, module, _utils) {
  'use strict';
  var logger = {
    methodMap: ['debug', 'info', 'warn', 'error'],
    level: 'info',
    lookupLevel: function lookupLevel(level) {
      if (typeof level === 'string') {
        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
        if (levelMap >= 0) {
          level = levelMap;
        } else {
          level = parseInt(level, 10);
        }
      }
      return level;
    },
    log: function log(level) {
      level = logger.lookupLevel(level);
      if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
        var method = logger.methodMap[level];
        if (!console[method]) {
          method = 'log';
        }
        for (var _len = arguments.length,
            message = Array(_len > 1 ? _len - 1 : 0),
            _key = 1; _key < _len; _key++) {
          message[_key - 1] = arguments[_key];
        }
        console[method].apply(console, message);
      }
    }
  };
  module.exports = logger;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("14", ["exports", "12", "13", "25", "27", "28"], function(exports, _utils, _exception, _helpers, _decorators, _logger) {
  'use strict';
  exports.__esModule = true;
  exports.HandlebarsEnvironment = HandlebarsEnvironment;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _Exception = _interopRequireDefault(_exception);
  var _logger2 = _interopRequireDefault(_logger);
  var VERSION = '4.0.5';
  exports.VERSION = VERSION;
  var COMPILER_REVISION = 7;
  exports.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2',
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '== 1.x.x',
    5: '== 2.0.0-alpha.x',
    6: '>= 2.0.0-beta.1',
    7: '>= 4.0.0'
  };
  exports.REVISION_CHANGES = REVISION_CHANGES;
  var objectType = '[object Object]';
  function HandlebarsEnvironment(helpers, partials, decorators) {
    this.helpers = helpers || {};
    this.partials = partials || {};
    this.decorators = decorators || {};
    _helpers.registerDefaultHelpers(this);
    _decorators.registerDefaultDecorators(this);
  }
  HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,
    logger: _logger2['default'],
    log: _logger2['default'].log,
    registerHelper: function registerHelper(name, fn) {
      if (_utils.toString.call(name) === objectType) {
        if (fn) {
          throw new _Exception['default']('Arg not supported with multiple helpers');
        }
        _utils.extend(this.helpers, name);
      } else {
        this.helpers[name] = fn;
      }
    },
    unregisterHelper: function unregisterHelper(name) {
      delete this.helpers[name];
    },
    registerPartial: function registerPartial(name, partial) {
      if (_utils.toString.call(name) === objectType) {
        _utils.extend(this.partials, name);
      } else {
        if (typeof partial === 'undefined') {
          throw new _Exception['default']('Attempting to register a partial called "' + name + '" as undefined');
        }
        this.partials[name] = partial;
      }
    },
    unregisterPartial: function unregisterPartial(name) {
      delete this.partials[name];
    },
    registerDecorator: function registerDecorator(name, fn) {
      if (_utils.toString.call(name) === objectType) {
        if (fn) {
          throw new _Exception['default']('Arg not supported with multiple decorators');
        }
        _utils.extend(this.decorators, name);
      } else {
        this.decorators[name] = fn;
      }
    },
    unregisterDecorator: function unregisterDecorator(name) {
      delete this.decorators[name];
    }
  };
  var log = _logger2['default'].log;
  exports.log = log;
  exports.createFrame = _utils.createFrame;
  exports.logger = _logger2['default'];
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("12", ["exports"], function(exports) {
  'use strict';
  exports.__esModule = true;
  exports.extend = extend;
  exports.indexOf = indexOf;
  exports.escapeExpression = escapeExpression;
  exports.isEmpty = isEmpty;
  exports.createFrame = createFrame;
  exports.blockParams = blockParams;
  exports.appendContextPath = appendContextPath;
  var escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };
  var badChars = /[&<>"'`=]/g,
      possible = /[&<>"'`=]/;
  function escapeChar(chr) {
    return escape[chr];
  }
  function extend(obj) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          obj[key] = arguments[i][key];
        }
      }
    }
    return obj;
  }
  var toString = Object.prototype.toString;
  exports.toString = toString;
  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };
  if (isFunction(/x/)) {
    exports.isFunction = isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  exports.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
  };
  exports.isArray = isArray;
  function indexOf(array, value) {
    for (var i = 0,
        len = array.length; i < len; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  function escapeExpression(string) {
    if (typeof string !== 'string') {
      if (string && string.toHTML) {
        return string.toHTML();
      } else if (string == null) {
        return '';
      } else if (!string) {
        return string + '';
      }
      string = '' + string;
    }
    if (!possible.test(string)) {
      return string;
    }
    return string.replace(badChars, escapeChar);
  }
  function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  function createFrame(object) {
    var frame = extend({}, object);
    frame._parent = object;
    return frame;
  }
  function blockParams(params, ids) {
    params.path = ids;
    return params;
  }
  function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
  }
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("29", ["exports", "module", "12"], function(exports, module, _utils) {
  'use strict';
  var SourceNode = undefined;
  try {
    if (typeof define !== 'function' || !define.amd) {
      var SourceMap = require('source-map');
      SourceNode = SourceMap.SourceNode;
    }
  } catch (err) {}
  if (!SourceNode) {
    SourceNode = function(line, column, srcFile, chunks) {
      this.src = '';
      if (chunks) {
        this.add(chunks);
      }
    };
    SourceNode.prototype = {
      add: function add(chunks) {
        if (_utils.isArray(chunks)) {
          chunks = chunks.join('');
        }
        this.src += chunks;
      },
      prepend: function prepend(chunks) {
        if (_utils.isArray(chunks)) {
          chunks = chunks.join('');
        }
        this.src = chunks + this.src;
      },
      toStringWithSourceMap: function toStringWithSourceMap() {
        return {code: this.toString()};
      },
      toString: function toString() {
        return this.src;
      }
    };
  }
  function castChunk(chunk, codeGen, loc) {
    if (_utils.isArray(chunk)) {
      var ret = [];
      for (var i = 0,
          len = chunk.length; i < len; i++) {
        ret.push(codeGen.wrap(chunk[i], loc));
      }
      return ret;
    } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
      return chunk + '';
    }
    return chunk;
  }
  function CodeGen(srcFile) {
    this.srcFile = srcFile;
    this.source = [];
  }
  CodeGen.prototype = {
    isEmpty: function isEmpty() {
      return !this.source.length;
    },
    prepend: function prepend(source, loc) {
      this.source.unshift(this.wrap(source, loc));
    },
    push: function push(source, loc) {
      this.source.push(this.wrap(source, loc));
    },
    merge: function merge() {
      var source = this.empty();
      this.each(function(line) {
        source.add(['  ', line, '\n']);
      });
      return source;
    },
    each: function each(iter) {
      for (var i = 0,
          len = this.source.length; i < len; i++) {
        iter(this.source[i]);
      }
    },
    empty: function empty() {
      var loc = this.currentLocation || {start: {}};
      return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
    },
    wrap: function wrap(chunk) {
      var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {start: {}} : arguments[1];
      if (chunk instanceof SourceNode) {
        return chunk;
      }
      chunk = castChunk(chunk, this, loc);
      return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
    },
    functionCall: function functionCall(fn, type, params) {
      params = this.generateList(params);
      return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
    },
    quotedString: function quotedString(str) {
      return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029') + '"';
    },
    objectLiteral: function objectLiteral(obj) {
      var pairs = [];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          var value = castChunk(obj[key], this);
          if (value !== 'undefined') {
            pairs.push([this.quotedString(key), ':', value]);
          }
        }
      }
      var ret = this.generateList(pairs);
      ret.prepend('{');
      ret.add('}');
      return ret;
    },
    generateList: function generateList(entries) {
      var ret = this.empty();
      for (var i = 0,
          len = entries.length; i < len; i++) {
        if (i) {
          ret.add(',');
        }
        ret.add(castChunk(entries[i], this));
      }
      return ret;
    },
    generateArray: function generateArray(entries) {
      var ret = this.generateList(entries);
      ret.prepend('[');
      ret.add(']');
      return ret;
    }
  };
  module.exports = CodeGen;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("2a", ["exports", "module", "14", "13", "12", "29"], function(exports, module, _base, _exception, _utils, _codeGen) {
  'use strict';
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _Exception = _interopRequireDefault(_exception);
  var _CodeGen = _interopRequireDefault(_codeGen);
  function Literal(value) {
    this.value = value;
  }
  function JavaScriptCompiler() {}
  JavaScriptCompiler.prototype = {
    nameLookup: function nameLookup(parent, name) {
      if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        return [parent, '.', name];
      } else {
        return [parent, '[', JSON.stringify(name), ']'];
      }
    },
    depthedLookup: function depthedLookup(name) {
      return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
    },
    compilerInfo: function compilerInfo() {
      var revision = _base.COMPILER_REVISION,
          versions = _base.REVISION_CHANGES[revision];
      return [revision, versions];
    },
    appendToBuffer: function appendToBuffer(source, location, explicit) {
      if (!_utils.isArray(source)) {
        source = [source];
      }
      source = this.source.wrap(source, location);
      if (this.environment.isSimple) {
        return ['return ', source, ';'];
      } else if (explicit) {
        return ['buffer += ', source, ';'];
      } else {
        source.appendToBuffer = true;
        return source;
      }
    },
    initializeBuffer: function initializeBuffer() {
      return this.quotedString('');
    },
    compile: function compile(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options;
      this.stringParams = this.options.stringParams;
      this.trackIds = this.options.trackIds;
      this.precompile = !asObject;
      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        decorators: [],
        programs: [],
        environments: []
      };
      this.preamble();
      this.stackSlot = 0;
      this.stackVars = [];
      this.aliases = {};
      this.registers = {list: []};
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];
      this.blockParams = [];
      this.compileChildren(environment, options);
      this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
      this.useBlockParams = this.useBlockParams || environment.useBlockParams;
      var opcodes = environment.opcodes,
          opcode = undefined,
          firstLoc = undefined,
          i = undefined,
          l = undefined;
      for (i = 0, l = opcodes.length; i < l; i++) {
        opcode = opcodes[i];
        this.source.currentLocation = opcode.loc;
        firstLoc = firstLoc || opcode.loc;
        this[opcode.opcode].apply(this, opcode.args);
      }
      this.source.currentLocation = firstLoc;
      this.pushSource('');
      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new _Exception['default']('Compile completed with content left on stack');
      }
      if (!this.decorators.isEmpty()) {
        this.useDecorators = true;
        this.decorators.prepend('var decorators = container.decorators;\n');
        this.decorators.push('return fn;');
        if (asObject) {
          this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
        } else {
          this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
          this.decorators.push('}\n');
          this.decorators = this.decorators.merge();
        }
      } else {
        this.decorators = undefined;
      }
      var fn = this.createFunctionContext(asObject);
      if (!this.isChild) {
        var ret = {
          compiler: this.compilerInfo(),
          main: fn
        };
        if (this.decorators) {
          ret.main_d = this.decorators;
          ret.useDecorators = true;
        }
        var _context = this.context;
        var programs = _context.programs;
        var decorators = _context.decorators;
        for (i = 0, l = programs.length; i < l; i++) {
          if (programs[i]) {
            ret[i] = programs[i];
            if (decorators[i]) {
              ret[i + '_d'] = decorators[i];
              ret.useDecorators = true;
            }
          }
        }
        if (this.environment.usePartial) {
          ret.usePartial = true;
        }
        if (this.options.data) {
          ret.useData = true;
        }
        if (this.useDepths) {
          ret.useDepths = true;
        }
        if (this.useBlockParams) {
          ret.useBlockParams = true;
        }
        if (this.options.compat) {
          ret.compat = true;
        }
        if (!asObject) {
          ret.compiler = JSON.stringify(ret.compiler);
          this.source.currentLocation = {start: {
              line: 1,
              column: 0
            }};
          ret = this.objectLiteral(ret);
          if (options.srcName) {
            ret = ret.toStringWithSourceMap({file: options.destName});
            ret.map = ret.map && ret.map.toString();
          } else {
            ret = ret.toString();
          }
        } else {
          ret.compilerOptions = this.options;
        }
        return ret;
      } else {
        return fn;
      }
    },
    preamble: function preamble() {
      this.lastContext = 0;
      this.source = new _CodeGen['default'](this.options.srcName);
      this.decorators = new _CodeGen['default'](this.options.srcName);
    },
    createFunctionContext: function createFunctionContext(asObject) {
      var varDeclarations = '';
      var locals = this.stackVars.concat(this.registers.list);
      if (locals.length > 0) {
        varDeclarations += ', ' + locals.join(', ');
      }
      var aliasCount = 0;
      for (var alias in this.aliases) {
        var node = this.aliases[alias];
        if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
          varDeclarations += ', alias' + ++aliasCount + '=' + alias;
          node.children[0] = 'alias' + aliasCount;
        }
      }
      var params = ['container', 'depth0', 'helpers', 'partials', 'data'];
      if (this.useBlockParams || this.useDepths) {
        params.push('blockParams');
      }
      if (this.useDepths) {
        params.push('depths');
      }
      var source = this.mergeSource(varDeclarations);
      if (asObject) {
        params.push(source);
        return Function.apply(this, params);
      } else {
        return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
      }
    },
    mergeSource: function mergeSource(varDeclarations) {
      var isSimple = this.environment.isSimple,
          appendOnly = !this.forceBuffer,
          appendFirst = undefined,
          sourceSeen = undefined,
          bufferStart = undefined,
          bufferEnd = undefined;
      this.source.each(function(line) {
        if (line.appendToBuffer) {
          if (bufferStart) {
            line.prepend('  + ');
          } else {
            bufferStart = line;
          }
          bufferEnd = line;
        } else {
          if (bufferStart) {
            if (!sourceSeen) {
              appendFirst = true;
            } else {
              bufferStart.prepend('buffer += ');
            }
            bufferEnd.add(';');
            bufferStart = bufferEnd = undefined;
          }
          sourceSeen = true;
          if (!isSimple) {
            appendOnly = false;
          }
        }
      });
      if (appendOnly) {
        if (bufferStart) {
          bufferStart.prepend('return ');
          bufferEnd.add(';');
        } else if (!sourceSeen) {
          this.source.push('return "";');
        }
      } else {
        varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());
        if (bufferStart) {
          bufferStart.prepend('return buffer + ');
          bufferEnd.add(';');
        } else {
          this.source.push('return buffer;');
        }
      }
      if (varDeclarations) {
        this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
      }
      return this.source.merge();
    },
    blockValue: function blockValue(name) {
      var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
          params = [this.contextName(0)];
      this.setupHelperArgs(name, 0, params);
      var blockName = this.popStack();
      params.splice(1, 0, blockName);
      this.push(this.source.functionCall(blockHelperMissing, 'call', params));
    },
    ambiguousBlockValue: function ambiguousBlockValue() {
      var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
          params = [this.contextName(0)];
      this.setupHelperArgs('', 0, params, true);
      this.flushInline();
      var current = this.topStack();
      params.splice(1, 0, current);
      this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
    },
    appendContent: function appendContent(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      } else {
        this.pendingLocation = this.source.currentLocation;
      }
      this.pendingContent = content;
    },
    append: function append() {
      if (this.isInline()) {
        this.replaceStack(function(current) {
          return [' != null ? ', current, ' : ""'];
        });
        this.pushSource(this.appendToBuffer(this.popStack()));
      } else {
        var local = this.popStack();
        this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
        if (this.environment.isSimple) {
          this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
        }
      }
    },
    appendEscaped: function appendEscaped() {
      this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
    },
    getContext: function getContext(depth) {
      this.lastContext = depth;
    },
    pushContext: function pushContext() {
      this.pushStackLiteral(this.contextName(this.lastContext));
    },
    lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
      var i = 0;
      if (!scoped && this.options.compat && !this.lastContext) {
        this.push(this.depthedLookup(parts[i++]));
      } else {
        this.pushContext();
      }
      this.resolvePath('context', parts, i, falsy, strict);
    },
    lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
      this.useBlockParams = true;
      this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
      this.resolvePath('context', parts, 1);
    },
    lookupData: function lookupData(depth, parts, strict) {
      if (!depth) {
        this.pushStackLiteral('data');
      } else {
        this.pushStackLiteral('container.data(data, ' + depth + ')');
      }
      this.resolvePath('data', parts, 0, true, strict);
    },
    resolvePath: function resolvePath(type, parts, i, falsy, strict) {
      var _this = this;
      if (this.options.strict || this.options.assumeObjects) {
        this.push(strictLookup(this.options.strict && strict, this, parts, type));
        return;
      }
      var len = parts.length;
      for (; i < len; i++) {
        this.replaceStack(function(current) {
          var lookup = _this.nameLookup(current, parts[i], type);
          if (!falsy) {
            return [' != null ? ', lookup, ' : ', current];
          } else {
            return [' && ', lookup];
          }
        });
      }
    },
    resolvePossibleLambda: function resolvePossibleLambda() {
      this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
    },
    pushStringParam: function pushStringParam(string, type) {
      this.pushContext();
      this.pushString(type);
      if (type !== 'SubExpression') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },
    emptyHash: function emptyHash(omitEmpty) {
      if (this.trackIds) {
        this.push('{}');
      }
      if (this.stringParams) {
        this.push('{}');
        this.push('{}');
      }
      this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
    },
    pushHash: function pushHash() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {
        values: [],
        types: [],
        contexts: [],
        ids: []
      };
    },
    popHash: function popHash() {
      var hash = this.hash;
      this.hash = this.hashes.pop();
      if (this.trackIds) {
        this.push(this.objectLiteral(hash.ids));
      }
      if (this.stringParams) {
        this.push(this.objectLiteral(hash.contexts));
        this.push(this.objectLiteral(hash.types));
      }
      this.push(this.objectLiteral(hash.values));
    },
    pushString: function pushString(string) {
      this.pushStackLiteral(this.quotedString(string));
    },
    pushLiteral: function pushLiteral(value) {
      this.pushStackLiteral(value);
    },
    pushProgram: function pushProgram(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },
    registerDecorator: function registerDecorator(paramSize, name) {
      var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
          options = this.setupHelperArgs(name, paramSize);
      this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
    },
    invokeHelper: function invokeHelper(paramSize, name, isSimple) {
      var nonHelper = this.popStack(),
          helper = this.setupHelper(paramSize, name),
          simple = isSimple ? [helper.name, ' || '] : '';
      var lookup = ['('].concat(simple, nonHelper);
      if (!this.options.strict) {
        lookup.push(' || ', this.aliasable('helpers.helperMissing'));
      }
      lookup.push(')');
      this.push(this.source.functionCall(lookup, 'call', helper.callParams));
    },
    invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
    },
    invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
      this.useRegister('helper');
      var nonHelper = this.popStack();
      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);
      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
      var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
      if (!this.options.strict) {
        lookup[0] = '(helper = ';
        lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
      }
      this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
    },
    invokePartial: function invokePartial(isDynamic, name, indent) {
      var params = [],
          options = this.setupParams(name, 1, params);
      if (isDynamic) {
        name = this.popStack();
        delete options.name;
      }
      if (indent) {
        options.indent = JSON.stringify(indent);
      }
      options.helpers = 'helpers';
      options.partials = 'partials';
      options.decorators = 'container.decorators';
      if (!isDynamic) {
        params.unshift(this.nameLookup('partials', name, 'partial'));
      } else {
        params.unshift(name);
      }
      if (this.options.compat) {
        options.depths = 'depths';
      }
      options = this.objectLiteral(options);
      params.push(options);
      this.push(this.source.functionCall('container.invokePartial', '', params));
    },
    assignToHash: function assignToHash(key) {
      var value = this.popStack(),
          context = undefined,
          type = undefined,
          id = undefined;
      if (this.trackIds) {
        id = this.popStack();
      }
      if (this.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }
      var hash = this.hash;
      if (context) {
        hash.contexts[key] = context;
      }
      if (type) {
        hash.types[key] = type;
      }
      if (id) {
        hash.ids[key] = id;
      }
      hash.values[key] = value;
    },
    pushId: function pushId(type, name, child) {
      if (type === 'BlockParam') {
        this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
      } else if (type === 'PathExpression') {
        this.pushString(name);
      } else if (type === 'SubExpression') {
        this.pushStackLiteral('true');
      } else {
        this.pushStackLiteral('null');
      }
    },
    compiler: JavaScriptCompiler,
    compileChildren: function compileChildren(environment, options) {
      var children = environment.children,
          child = undefined,
          compiler = undefined;
      for (var i = 0,
          l = children.length; i < l; i++) {
        child = children[i];
        compiler = new this.compiler();
        var index = this.matchExistingProgram(child);
        if (index == null) {
          this.context.programs.push('');
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
          this.context.decorators[index] = compiler.decorators;
          this.context.environments[index] = child;
          this.useDepths = this.useDepths || compiler.useDepths;
          this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
        } else {
          child.index = index;
          child.name = 'program' + index;
          this.useDepths = this.useDepths || child.useDepths;
          this.useBlockParams = this.useBlockParams || child.useBlockParams;
        }
      }
    },
    matchExistingProgram: function matchExistingProgram(child) {
      for (var i = 0,
          len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },
    programExpression: function programExpression(guid) {
      var child = this.environment.children[guid],
          programParams = [child.index, 'data', child.blockParams];
      if (this.useBlockParams || this.useDepths) {
        programParams.push('blockParams');
      }
      if (this.useDepths) {
        programParams.push('depths');
      }
      return 'container.program(' + programParams.join(', ') + ')';
    },
    useRegister: function useRegister(name) {
      if (!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },
    push: function push(expr) {
      if (!(expr instanceof Literal)) {
        expr = this.source.wrap(expr);
      }
      this.inlineStack.push(expr);
      return expr;
    },
    pushStackLiteral: function pushStackLiteral(item) {
      this.push(new Literal(item));
    },
    pushSource: function pushSource(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
        this.pendingContent = undefined;
      }
      if (source) {
        this.source.push(source);
      }
    },
    replaceStack: function replaceStack(callback) {
      var prefix = ['('],
          stack = undefined,
          createdStack = undefined,
          usedLiteral = undefined;
      if (!this.isInline()) {
        throw new _Exception['default']('replaceStack on non-inline');
      }
      var top = this.popStack(true);
      if (top instanceof Literal) {
        stack = [top.value];
        prefix = ['(', stack];
        usedLiteral = true;
      } else {
        createdStack = true;
        var _name = this.incrStack();
        prefix = ['((', this.push(_name), ' = ', top, ')'];
        stack = this.topStack();
      }
      var item = callback.call(this, stack);
      if (!usedLiteral) {
        this.popStack();
      }
      if (createdStack) {
        this.stackSlot--;
      }
      this.push(prefix.concat(item, ')'));
    },
    incrStack: function incrStack() {
      this.stackSlot++;
      if (this.stackSlot > this.stackVars.length) {
        this.stackVars.push('stack' + this.stackSlot);
      }
      return this.topStackName();
    },
    topStackName: function topStackName() {
      return 'stack' + this.stackSlot;
    },
    flushInline: function flushInline() {
      var inlineStack = this.inlineStack;
      this.inlineStack = [];
      for (var i = 0,
          len = inlineStack.length; i < len; i++) {
        var entry = inlineStack[i];
        if (entry instanceof Literal) {
          this.compileStack.push(entry);
        } else {
          var stack = this.incrStack();
          this.pushSource([stack, ' = ', entry, ';']);
          this.compileStack.push(stack);
        }
      }
    },
    isInline: function isInline() {
      return this.inlineStack.length;
    },
    popStack: function popStack(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();
      if (!wrapped && item instanceof Literal) {
        return item.value;
      } else {
        if (!inline) {
          if (!this.stackSlot) {
            throw new _Exception['default']('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },
    topStack: function topStack() {
      var stack = this.isInline() ? this.inlineStack : this.compileStack,
          item = stack[stack.length - 1];
      if (item instanceof Literal) {
        return item.value;
      } else {
        return item;
      }
    },
    contextName: function contextName(context) {
      if (this.useDepths && context) {
        return 'depths[' + context + ']';
      } else {
        return 'depth' + context;
      }
    },
    quotedString: function quotedString(str) {
      return this.source.quotedString(str);
    },
    objectLiteral: function objectLiteral(obj) {
      return this.source.objectLiteral(obj);
    },
    aliasable: function aliasable(name) {
      var ret = this.aliases[name];
      if (ret) {
        ret.referenceCount++;
        return ret;
      }
      ret = this.aliases[name] = this.source.wrap(name);
      ret.aliasable = true;
      ret.referenceCount = 1;
      return ret;
    },
    setupHelper: function setupHelper(paramSize, name, blockHelper) {
      var params = [],
          paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
      var foundHelper = this.nameLookup('helpers', name, 'helper'),
          callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');
      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: [callContext].concat(params)
      };
    },
    setupParams: function setupParams(helper, paramSize, params) {
      var options = {},
          contexts = [],
          types = [],
          ids = [],
          objectArgs = !params,
          param = undefined;
      if (objectArgs) {
        params = [];
      }
      options.name = this.quotedString(helper);
      options.hash = this.popStack();
      if (this.trackIds) {
        options.hashIds = this.popStack();
      }
      if (this.stringParams) {
        options.hashTypes = this.popStack();
        options.hashContexts = this.popStack();
      }
      var inverse = this.popStack(),
          program = this.popStack();
      if (program || inverse) {
        options.fn = program || 'container.noop';
        options.inverse = inverse || 'container.noop';
      }
      var i = paramSize;
      while (i--) {
        param = this.popStack();
        params[i] = param;
        if (this.trackIds) {
          ids[i] = this.popStack();
        }
        if (this.stringParams) {
          types[i] = this.popStack();
          contexts[i] = this.popStack();
        }
      }
      if (objectArgs) {
        options.args = this.source.generateArray(params);
      }
      if (this.trackIds) {
        options.ids = this.source.generateArray(ids);
      }
      if (this.stringParams) {
        options.types = this.source.generateArray(types);
        options.contexts = this.source.generateArray(contexts);
      }
      if (this.options.data) {
        options.data = 'data';
      }
      if (this.useBlockParams) {
        options.blockParams = 'blockParams';
      }
      return options;
    },
    setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
      var options = this.setupParams(helper, paramSize, params);
      options = this.objectLiteral(options);
      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return ['options=', options];
      } else if (params) {
        params.push(options);
        return '';
      } else {
        return options;
      }
    }
  };
  (function() {
    var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');
    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
    for (var i = 0,
        l = reservedWords.length; i < l; i++) {
      compilerWords[reservedWords[i]] = true;
    }
  })();
  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
  };
  function strictLookup(requireTerminal, compiler, parts, type) {
    var stack = compiler.popStack(),
        i = 0,
        len = parts.length;
    if (requireTerminal) {
      len--;
    }
    for (; i < len; i++) {
      stack = compiler.nameLookup(stack, parts[i], type);
    }
    if (requireTerminal) {
      return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
    } else {
      return stack;
    }
  }
  module.exports = JavaScriptCompiler;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("13", ["exports", "module"], function(exports, module) {
  'use strict';
  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
  function Exception(message, node) {
    var loc = node && node.loc,
        line = undefined,
        column = undefined;
    if (loc) {
      line = loc.start.line;
      column = loc.start.column;
      message += ' - ' + line + ':' + column;
    }
    var tmp = Error.prototype.constructor.call(this, message);
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception);
    }
    if (loc) {
      this.lineNumber = line;
      this.column = column;
    }
  }
  Exception.prototype = new Error();
  module.exports = Exception;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("19", ["exports", "module", "13"], function(exports, module, _exception) {
  'use strict';
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _Exception = _interopRequireDefault(_exception);
  function Visitor() {
    this.parents = [];
  }
  Visitor.prototype = {
    constructor: Visitor,
    mutating: false,
    acceptKey: function acceptKey(node, name) {
      var value = this.accept(node[name]);
      if (this.mutating) {
        if (value && !Visitor.prototype[value.type]) {
          throw new _Exception['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
        }
        node[name] = value;
      }
    },
    acceptRequired: function acceptRequired(node, name) {
      this.acceptKey(node, name);
      if (!node[name]) {
        throw new _Exception['default'](node.type + ' requires ' + name);
      }
    },
    acceptArray: function acceptArray(array) {
      for (var i = 0,
          l = array.length; i < l; i++) {
        this.acceptKey(array, i);
        if (!array[i]) {
          array.splice(i, 1);
          i--;
          l--;
        }
      }
    },
    accept: function accept(object) {
      if (!object) {
        return;
      }
      if (!this[object.type]) {
        throw new _Exception['default']('Unknown type: ' + object.type, object);
      }
      if (this.current) {
        this.parents.unshift(this.current);
      }
      this.current = object;
      var ret = this[object.type](object);
      this.current = this.parents.shift();
      if (!this.mutating || ret) {
        return ret;
      } else if (ret !== false) {
        return object;
      }
    },
    Program: function Program(program) {
      this.acceptArray(program.body);
    },
    MustacheStatement: visitSubExpression,
    Decorator: visitSubExpression,
    BlockStatement: visitBlock,
    DecoratorBlock: visitBlock,
    PartialStatement: visitPartial,
    PartialBlockStatement: function PartialBlockStatement(partial) {
      visitPartial.call(this, partial);
      this.acceptKey(partial, 'program');
    },
    ContentStatement: function ContentStatement() {},
    CommentStatement: function CommentStatement() {},
    SubExpression: visitSubExpression,
    PathExpression: function PathExpression() {},
    StringLiteral: function StringLiteral() {},
    NumberLiteral: function NumberLiteral() {},
    BooleanLiteral: function BooleanLiteral() {},
    UndefinedLiteral: function UndefinedLiteral() {},
    NullLiteral: function NullLiteral() {},
    Hash: function Hash(hash) {
      this.acceptArray(hash.pairs);
    },
    HashPair: function HashPair(pair) {
      this.acceptRequired(pair, 'value');
    }
  };
  function visitSubExpression(mustache) {
    this.acceptRequired(mustache, 'path');
    this.acceptArray(mustache.params);
    this.acceptKey(mustache, 'hash');
  }
  function visitBlock(block) {
    visitSubExpression.call(this, block);
    this.acceptKey(block, 'program');
    this.acceptKey(block, 'inverse');
  }
  function visitPartial(partial) {
    this.acceptRequired(partial, 'name');
    this.acceptArray(partial.params);
    this.acceptKey(partial, 'hash');
  }
  module.exports = Visitor;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("16", ["exports", "module"], function(exports, module) {
  'use strict';
  module.exports = function(Handlebars) {
    var root = typeof global !== 'undefined' ? global : window,
        $Handlebars = root.Handlebars;
    Handlebars.noConflict = function() {
      if (root.Handlebars === Handlebars) {
        root.Handlebars = $Handlebars;
      }
      return Handlebars;
    };
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("2b", ["exports", "module", "15", "1c", "1b", "1d", "2a", "19", "16"], function(exports, module, _handlebarsRuntime, _handlebarsCompilerAst, _handlebarsCompilerBase, _handlebarsCompilerCompiler, _handlebarsCompilerJavascriptCompiler, _handlebarsCompilerVisitor, _handlebarsNoConflict) {
  'use strict';
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _runtime = _interopRequireDefault(_handlebarsRuntime);
  var _AST = _interopRequireDefault(_handlebarsCompilerAst);
  var _JavaScriptCompiler = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
  var _Visitor = _interopRequireDefault(_handlebarsCompilerVisitor);
  var _noConflict = _interopRequireDefault(_handlebarsNoConflict);
  var _create = _runtime['default'].create;
  function create() {
    var hb = _create();
    hb.compile = function(input, options) {
      return _handlebarsCompilerCompiler.compile(input, options, hb);
    };
    hb.precompile = function(input, options) {
      return _handlebarsCompilerCompiler.precompile(input, options, hb);
    };
    hb.AST = _AST['default'];
    hb.Compiler = _handlebarsCompilerCompiler.Compiler;
    hb.JavaScriptCompiler = _JavaScriptCompiler['default'];
    hb.Parser = _handlebarsCompilerBase.parser;
    hb.parse = _handlebarsCompilerBase.parse;
    return hb;
  }
  var inst = create();
  inst.create = create;
  _noConflict['default'](inst);
  inst.Visitor = _Visitor['default'];
  inst['default'] = inst;
  module.exports = inst;
});

_removeDefine();
})();
$__System.registerDynamic("2c", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  function InsertionText(text, consumeBlanks) {
    this.text = text;
    this.origLength = text.length;
    this.offsets = [];
    this.consumeBlanks = consumeBlanks;
    this.startPos = this.findFirstNonBlank();
    this.endPos = this.findLastNonBlank();
  }
  var WHITE_RE = /[ \f\n\r\t\v\u00A0\u2028\u2029]/;
  InsertionText.prototype = {
    findFirstNonBlank: function() {
      var pos = -1,
          text = this.text,
          len = text.length,
          i;
      for (i = 0; i < len; i += 1) {
        if (!text.charAt(i).match(WHITE_RE)) {
          pos = i;
          break;
        }
      }
      return pos;
    },
    findLastNonBlank: function() {
      var text = this.text,
          len = text.length,
          pos = text.length + 1,
          i;
      for (i = len - 1; i >= 0; i -= 1) {
        if (!text.charAt(i).match(WHITE_RE)) {
          pos = i;
          break;
        }
      }
      return pos;
    },
    originalLength: function() {
      return this.origLength;
    },
    insertAt: function(col, str, insertBefore, consumeBlanks) {
      consumeBlanks = typeof consumeBlanks === 'undefined' ? this.consumeBlanks : consumeBlanks;
      col = col > this.originalLength() ? this.originalLength() : col;
      col = col < 0 ? 0 : col;
      if (consumeBlanks) {
        if (col <= this.startPos) {
          col = 0;
        }
        if (col > this.endPos) {
          col = this.origLength;
        }
      }
      var len = str.length,
          offset = this.findOffset(col, len, insertBefore),
          realPos = col + offset,
          text = this.text;
      this.text = text.substring(0, realPos) + str + text.substring(realPos);
      return this;
    },
    findOffset: function(pos, len, insertBefore) {
      var offsets = this.offsets,
          offsetObj,
          cumulativeOffset = 0,
          i;
      for (i = 0; i < offsets.length; i += 1) {
        offsetObj = offsets[i];
        if (offsetObj.pos < pos || (offsetObj.pos === pos && !insertBefore)) {
          cumulativeOffset += offsetObj.len;
        }
        if (offsetObj.pos >= pos) {
          break;
        }
      }
      if (offsetObj && offsetObj.pos === pos) {
        offsetObj.len += len;
      } else {
        offsets.splice(i, 0, {
          pos: pos,
          len: len
        });
      }
      return cumulativeOffset;
    },
    wrap: function(startPos, startText, endPos, endText, consumeBlanks) {
      this.insertAt(startPos, startText, true, consumeBlanks);
      this.insertAt(endPos, endText, false, consumeBlanks);
      return this;
    },
    wrapLine: function(startText, endText) {
      this.wrap(0, startText, this.originalLength(), endText);
    },
    toString: function() {
      return this.text;
    }
  };
  module.exports = InsertionText;
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("2d", [], function() {
  return "<!doctype html>\n<html lang=\"en\">\n<head>\n    <title>Code coverage report for {{entity}}</title>\n    <meta charset=\"utf-8\" />\n{{#if prettify}}\n    <link rel=\"stylesheet\" href=\"{{prettify.css}}\" />\n{{/if}}\n    <link rel=\"stylesheet\" href=\"{{base.css}}\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <style type='text/css'>\n        .coverage-summary .sorter {\n            background-image: url({{sorter.image}});\n        }\n    </style>\n</head>\n<body>\n<div class='wrapper'>\n  <div class='pad1'>\n    <h1>\n      {{{pathHtml}}}\n    </h1>\n    <div class='clearfix'>\n      {{#with metrics.statements}}\n      <div class='fl pad1y space-right2'>\n        <span class=\"strong\">{{pct}}% </span>\n        <span class=\"quiet\">Statements</span>\n        <span class='fraction'>{{covered}}/{{total}}</span>\n      </div>\n      {{/with}}\n      {{#with metrics.branches}}\n      <div class='fl pad1y space-right2'>\n        <span class=\"strong\">{{pct}}% </span>\n        <span class=\"quiet\">Branches</span>\n        <span class='fraction'>{{covered}}/{{total}}</span>\n      </div>\n      {{/with}}\n      {{#with metrics.functions}}\n      <div class='fl pad1y space-right2'>\n        <span class=\"strong\">{{pct}}% </span>\n        <span class=\"quiet\">Functions</span>\n        <span class='fraction'>{{covered}}/{{total}}</span>\n      </div>\n      {{/with}}\n      {{#with metrics.lines}}\n      <div class='fl pad1y space-right2'>\n        <span class=\"strong\">{{pct}}% </span>\n        <span class=\"quiet\">Lines</span>\n        <span class='fraction'>{{covered}}/{{total}}</span>\n      </div>\n      {{/with}}\n      {{#if_has_ignores metrics}}\n      <div class='fl pad1y'>\n        <span class=\"strong\">{{#show_ignores metrics}}{{/show_ignores}}</span>\n        <span class=\"quiet\">Ignored</span>  &nbsp;&nbsp;&nbsp;&nbsp;\n      </div>\n      {{/if_has_ignores}}\n    </div>\n  </div>\n  <div class='status-line {{reportClass}}'></div>\n";
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("2e", [], function() {
  return "<div class='push'></div><!-- for sticky footer -->\n</div><!-- /wrapper -->\n<div class='footer quiet pad2 space-top1 center small'>\n  Code coverage\n  generated by <a href=\"http://istanbul-js.org/\" target=\"_blank\">istanbul</a> at {{datetime}}\n</div>\n</div>\n{{#if prettify}}\n<script src=\"{{prettify.js}}\"></script>\n<script>\nwindow.onload = function () {\n        if (typeof prettyPrint === 'function') {\n            prettyPrint();\n        }\n};\n</script>\n{{/if}}\n<script src=\"{{sorter.js}}\"></script>\n</body>\n</html>\n";
});

_removeDefine();
})();
$__System.registerDynamic("2f", ["2b", "30", "@node/path", "@node/fs", "@node/util", "a", "9", "4", "2c", "b", "c", "2d", "2e", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var handlebars = $__require('2b'),
      defaults = $__require('30'),
      path = $__require('@node/path'),
      fs = $__require('@node/fs'),
      util = $__require('@node/util'),
      FileWriter = $__require('a'),
      Report = $__require('9'),
      Store = $__require('4'),
      InsertionText = $__require('2c'),
      TreeSummarizer = $__require('b'),
      utils = $__require('c'),
      headerTemplate = handlebars.compile($__require('2d')),
      footerTemplate = handlebars.compile($__require('2e')),
      fs = {readdirSync: function() {
          return [];
        }},
      detailTemplate = handlebars.compile(['<tr>', '<td class="line-count quiet">{{#show_lines}}{{maxLines}}{{/show_lines}}</td>', '<td class="line-coverage quiet">{{#show_line_execution_counts fileCoverage}}{{maxLines}}{{/show_line_execution_counts}}</td>', '<td class="text"><pre class="prettyprint lang-js">{{#show_code structured}}{{/show_code}}</pre></td>', '</tr>\n'].join('')),
      summaryTableHeader = ['<div class="pad1">', '<table class="coverage-summary">', '<thead>', '<tr>', '   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>', '   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>', '   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>', '   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>', '   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>', '   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>', '   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>', '   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>', '   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>', '   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>', '</tr>', '</thead>', '<tbody>'].join('\n'),
      summaryLineTemplate = handlebars.compile(['<tr>', '<td class="file {{reportClasses.statements}}" data-value="{{file}}"><a href="{{output}}">{{file}}</a></td>', '<td data-value="{{metrics.statements.pct}}" class="pic {{reportClasses.statements}}"><div class="chart">{{#show_picture}}{{metrics.statements.pct}}{{/show_picture}}</div></td>', '<td data-value="{{metrics.statements.pct}}" class="pct {{reportClasses.statements}}">{{metrics.statements.pct}}%</td>', '<td data-value="{{metrics.statements.total}}" class="abs {{reportClasses.statements}}">{{metrics.statements.covered}}/{{metrics.statements.total}}</td>', '<td data-value="{{metrics.branches.pct}}" class="pct {{reportClasses.branches}}">{{metrics.branches.pct}}%</td>', '<td data-value="{{metrics.branches.total}}" class="abs {{reportClasses.branches}}">{{metrics.branches.covered}}/{{metrics.branches.total}}</td>', '<td data-value="{{metrics.functions.pct}}" class="pct {{reportClasses.functions}}">{{metrics.functions.pct}}%</td>', '<td data-value="{{metrics.functions.total}}" class="abs {{reportClasses.functions}}">{{metrics.functions.covered}}/{{metrics.functions.total}}</td>', '<td data-value="{{metrics.lines.pct}}" class="pct {{reportClasses.lines}}">{{metrics.lines.pct}}%</td>', '<td data-value="{{metrics.lines.total}}" class="abs {{reportClasses.lines}}">{{metrics.lines.covered}}/{{metrics.lines.total}}</td>', '</tr>\n'].join('\n\t')),
      summaryTableFooter = ['</tbody>', '</table>', '</div>'].join('\n'),
      lt = '\u0001',
      gt = '\u0002',
      RE_LT = /</g,
      RE_GT = />/g,
      RE_AMP = /&/g,
      RE_lt = /\u0001/g,
      RE_gt = /\u0002/g;
  handlebars.registerHelper('show_picture', function(opts) {
    var num = Number(opts.fn(this)),
        rest,
        cls = '';
    if (isFinite(num)) {
      if (num === 100) {
        cls = ' cover-full';
      }
      num = Math.floor(num);
      rest = 100 - num;
      return '<div class="cover-fill' + cls + '" style="width: ' + num + '%;"></div>' + '<div class="cover-empty" style="width:' + rest + '%;"></div>';
    } else {
      return '';
    }
  });
  handlebars.registerHelper('if_has_ignores', function(metrics, opts) {
    return (metrics.statements.skipped + metrics.functions.skipped + metrics.branches.skipped) === 0 ? '' : opts.fn(this);
  });
  handlebars.registerHelper('show_ignores', function(metrics) {
    var statements = metrics.statements.skipped,
        functions = metrics.functions.skipped,
        branches = metrics.branches.skipped,
        result;
    if (statements === 0 && functions === 0 && branches === 0) {
      return '<span class="ignore-none">none</span>';
    }
    result = [];
    if (statements > 0) {
      result.push(statements === 1 ? '1 statement' : statements + ' statements');
    }
    if (functions > 0) {
      result.push(functions === 1 ? '1 function' : functions + ' functions');
    }
    if (branches > 0) {
      result.push(branches === 1 ? '1 branch' : branches + ' branches');
    }
    return result.join(', ');
  });
  handlebars.registerHelper('show_lines', function(opts) {
    var maxLines = Number(opts.fn(this)),
        i,
        array = [];
    for (i = 0; i < maxLines; i += 1) {
      array[i] = i + 1;
    }
    return array.join('\n');
  });
  handlebars.registerHelper('show_line_execution_counts', function(context, opts) {
    var lines = context.l,
        maxLines = Number(opts.fn(this)),
        i,
        lineNumber,
        array = [],
        covered,
        value = '';
    for (i = 0; i < maxLines; i += 1) {
      lineNumber = i + 1;
      value = '&nbsp;';
      covered = 'neutral';
      if (lines.hasOwnProperty(lineNumber)) {
        if (lines[lineNumber] > 0) {
          covered = 'yes';
          value = lines[lineNumber] + '×';
        } else {
          covered = 'no';
        }
      }
      array.push('<span class="cline-any cline-' + covered + '">' + value + '</span>');
    }
    return array.join('\n');
  });
  function customEscape(text) {
    text = text.toString();
    return text.replace(RE_AMP, '&amp;').replace(RE_LT, '&lt;').replace(RE_GT, '&gt;').replace(RE_lt, '<').replace(RE_gt, '>');
  }
  handlebars.registerHelper('show_code', function(context) {
    var array = [];
    context.forEach(function(item) {
      array.push(customEscape(item.text) || '&nbsp;');
    });
    return array.join('\n');
  });
  function title(str) {
    return ' title="' + str + '" ';
  }
  function annotateLines(fileCoverage, structuredText) {
    var lineStats = fileCoverage.l;
    if (!lineStats) {
      return;
    }
    Object.keys(lineStats).forEach(function(lineNumber) {
      var count = lineStats[lineNumber];
      if (structuredText[lineNumber]) {
        structuredText[lineNumber].covered = count > 0 ? 'yes' : 'no';
      }
    });
    structuredText.forEach(function(item) {
      if (item.covered === null) {
        item.covered = 'neutral';
      }
    });
  }
  function annotateStatements(fileCoverage, structuredText) {
    var statementStats = fileCoverage.s,
        statementMeta = fileCoverage.statementMap;
    Object.keys(statementStats).forEach(function(stName) {
      var count = statementStats[stName],
          meta = statementMeta[stName],
          type = count > 0 ? 'yes' : 'no',
          startCol = meta.start.column,
          endCol = meta.end.column + 1,
          startLine = meta.start.line,
          endLine = meta.end.line,
          openSpan = lt + 'span class="' + (meta.skip ? 'cstat-skip' : 'cstat-no') + '"' + title('statement not covered') + gt,
          closeSpan = lt + '/span' + gt,
          text;
      if (type === 'no') {
        if (endLine !== startLine) {
          endLine = startLine;
          endCol = structuredText[startLine].text.originalLength();
        }
        text = structuredText[startLine].text;
        text.wrap(startCol, openSpan, startLine === endLine ? endCol : text.originalLength(), closeSpan);
      }
    });
  }
  function annotateFunctions(fileCoverage, structuredText) {
    var fnStats = fileCoverage.f,
        fnMeta = fileCoverage.fnMap;
    if (!fnStats) {
      return;
    }
    Object.keys(fnStats).forEach(function(fName) {
      var count = fnStats[fName],
          meta = fnMeta[fName],
          type = count > 0 ? 'yes' : 'no',
          startCol = meta.loc.start.column,
          endCol = meta.loc.end.column + 1,
          startLine = meta.loc.start.line,
          endLine = meta.loc.end.line,
          openSpan = lt + 'span class="' + (meta.skip ? 'fstat-skip' : 'fstat-no') + '"' + title('function not covered') + gt,
          closeSpan = lt + '/span' + gt,
          text;
      if (type === 'no') {
        if (endLine !== startLine) {
          endLine = startLine;
          endCol = structuredText[startLine].text.originalLength();
        }
        text = structuredText[startLine].text;
        text.wrap(startCol, openSpan, startLine === endLine ? endCol : text.originalLength(), closeSpan);
      }
    });
  }
  function annotateBranches(fileCoverage, structuredText) {
    var branchStats = fileCoverage.b,
        branchMeta = fileCoverage.branchMap;
    if (!branchStats) {
      return;
    }
    Object.keys(branchStats).forEach(function(branchName) {
      var branchArray = branchStats[branchName],
          sumCount = branchArray.reduce(function(p, n) {
            return p + n;
          }, 0),
          metaArray = branchMeta[branchName].locations,
          i,
          count,
          meta,
          type,
          startCol,
          endCol,
          startLine,
          endLine,
          openSpan,
          closeSpan,
          text;
      if (sumCount > 0) {
        for (i = 0; i < branchArray.length; i += 1) {
          count = branchArray[i];
          meta = metaArray[i];
          type = count > 0 ? 'yes' : 'no';
          startCol = meta.start.column;
          endCol = meta.end.column + 1;
          startLine = meta.start.line;
          endLine = meta.end.line;
          openSpan = lt + 'span class="branch-' + i + ' ' + (meta.skip ? 'cbranch-skip' : 'cbranch-no') + '"' + title('branch not covered') + gt;
          closeSpan = lt + '/span' + gt;
          if (count === 0) {
            if (endLine !== startLine) {
              endLine = startLine;
              endCol = structuredText[startLine].text.originalLength();
            }
            text = structuredText[startLine].text;
            if (branchMeta[branchName].type === 'if') {
              text.insertAt(startCol, lt + 'span class="' + (meta.skip ? 'skip-if-branch' : 'missing-if-branch') + '"' + title((i === 0 ? 'if' : 'else') + ' path not taken') + gt + (i === 0 ? 'I' : 'E') + lt + '/span' + gt, true, false);
            } else {
              text.wrap(startCol, openSpan, startLine === endLine ? endCol : text.originalLength(), closeSpan);
            }
          }
        }
      }
    });
  }
  function getReportClass(stats, watermark) {
    var coveragePct = stats.pct,
        identity = 1;
    if (coveragePct * identity === coveragePct) {
      return coveragePct >= watermark[1] ? 'high' : coveragePct >= watermark[0] ? 'medium' : 'low';
    } else {
      return '';
    }
  }
  function cleanPath(name) {
    var SEP = path.sep || '/';
    return (SEP !== '/') ? name.split(SEP).join('/') : name;
  }
  function isEmptySourceStore(sourceStore) {
    if (!sourceStore) {
      return true;
    }
    var cache = sourceStore.sourceCache;
    return cache && !Object.keys(cache).length;
  }
  function HtmlReport(opts) {
    Report.call(this);
    this.opts = opts || {};
    this.opts.dir = this.opts.dir || path.resolve(process.cwd(), 'html-report');
    this.opts.sourceStore = isEmptySourceStore(this.opts.sourceStore) ? Store.create('fslookup') : this.opts.sourceStore;
    this.opts.linkMapper = this.opts.linkMapper || this.standardLinkMapper();
    this.opts.writer = this.opts.writer || null;
    this.opts.templateData = {datetime: Date()};
    this.opts.watermarks = this.opts.watermarks || defaults.watermarks();
  }
  HtmlReport.TYPE = 'html';
  util.inherits(HtmlReport, Report);
  Report.mix(HtmlReport, {
    synopsis: function() {
      return 'Navigable HTML coverage report for every file and directory';
    },
    getPathHtml: function(node, linkMapper) {
      var parent = node.parent,
          nodePath = [],
          linkPath = [],
          i;
      while (parent) {
        nodePath.push(parent);
        parent = parent.parent;
      }
      for (i = 0; i < nodePath.length; i += 1) {
        linkPath.push('<a href="' + linkMapper.ancestor(node, i + 1) + '">' + (cleanPath(nodePath[i].relativeName) || 'all files') + '</a>');
      }
      linkPath.reverse();
      return linkPath.length > 0 ? linkPath.join(' / ') + ' ' + cleanPath(node.displayShortName()) : '/';
    },
    fillTemplate: function(node, templateData) {
      var opts = this.opts,
          linkMapper = opts.linkMapper;
      templateData.entity = node.name || 'All files';
      templateData.metrics = node.metrics;
      templateData.reportClass = getReportClass(node.metrics.statements, opts.watermarks.statements);
      templateData.pathHtml = this.getPathHtml(node, linkMapper);
      templateData.base = {css: linkMapper.asset(node, 'base.css')};
      templateData.sorter = {
        js: linkMapper.asset(node, 'sorter.js'),
        image: linkMapper.asset(node, 'sort-arrow-sprite.png')
      };
      templateData.prettify = {
        js: linkMapper.asset(node, 'prettify.js'),
        css: linkMapper.asset(node, 'prettify.css')
      };
    },
    writeDetailPage: function(writer, node, fileCoverage) {
      var opts = this.opts,
          sourceStore = opts.sourceStore,
          templateData = opts.templateData,
          sourceText = fileCoverage.code && Array.isArray(fileCoverage.code) ? fileCoverage.code.join('\n') + '\n' : sourceStore.get(fileCoverage.path),
          code = sourceText.split(/(?:\r?\n)|\r/),
          count = 0,
          structured = code.map(function(str) {
            count += 1;
            return {
              line: count,
              covered: null,
              text: new InsertionText(str, true)
            };
          }),
          context;
      structured.unshift({
        line: 0,
        covered: null,
        text: new InsertionText("")
      });
      this.fillTemplate(node, templateData);
      writer.write(headerTemplate(templateData));
      writer.write('<pre><table class="coverage">\n');
      annotateLines(fileCoverage, structured);
      annotateBranches(fileCoverage, structured);
      annotateFunctions(fileCoverage, structured);
      annotateStatements(fileCoverage, structured);
      structured.shift();
      context = {
        structured: structured,
        maxLines: structured.length,
        fileCoverage: fileCoverage
      };
      writer.write(detailTemplate(context));
      writer.write('</table></pre>\n');
      writer.write(footerTemplate(templateData));
    },
    writeIndexPage: function(writer, node) {
      var linkMapper = this.opts.linkMapper,
          templateData = this.opts.templateData,
          children = Array.prototype.slice.apply(node.children),
          watermarks = this.opts.watermarks;
      children.sort(function(a, b) {
        return a.name < b.name ? -1 : 1;
      });
      this.fillTemplate(node, templateData);
      writer.write(headerTemplate(templateData));
      writer.write(summaryTableHeader);
      children.forEach(function(child) {
        var metrics = child.metrics,
            reportClasses = {
              statements: getReportClass(metrics.statements, watermarks.statements),
              lines: getReportClass(metrics.lines, watermarks.lines),
              functions: getReportClass(metrics.functions, watermarks.functions),
              branches: getReportClass(metrics.branches, watermarks.branches)
            },
            data = {
              metrics: metrics,
              reportClasses: reportClasses,
              file: cleanPath(child.displayShortName()),
              output: linkMapper.fromParent(child)
            };
        writer.write(summaryLineTemplate(data) + '\n');
      });
      writer.write(summaryTableFooter);
      writer.write(footerTemplate(templateData));
    },
    writeFiles: function(writer, node, dir, collector) {
      var that = this,
          indexFile = path.resolve(dir, 'index.html'),
          childFile;
      if (this.opts.verbose) {
        console.error('Writing ' + indexFile);
      }
      writer.writeFile(indexFile, function(contentWriter) {
        that.writeIndexPage(contentWriter, node);
      });
      node.children.forEach(function(child) {
        if (child.kind === 'dir') {
          that.writeFiles(writer, child, path.resolve(dir, child.relativeName), collector);
        } else {
          childFile = path.resolve(dir, child.relativeName + '.html');
          if (that.opts.verbose) {
            console.error('Writing ' + childFile);
          }
          writer.writeFile(childFile, function(contentWriter) {
            that.writeDetailPage(contentWriter, child, collector.fileCoverageFor(child.fullPath()));
          });
        }
      });
    },
    standardLinkMapper: function() {
      return {
        fromParent: function(node) {
          var relativeName = cleanPath(node.relativeName);
          return node.kind === 'dir' ? relativeName + 'index.html' : relativeName + '.html';
        },
        ancestorHref: function(node, num) {
          var href = '',
              notDot = function(part) {
                return part !== '.';
              },
              separated,
              levels,
              i,
              j;
          for (i = 0; i < num; i += 1) {
            separated = cleanPath(node.relativeName).split('/').filter(notDot);
            levels = separated.length - 1;
            for (j = 0; j < levels; j += 1) {
              href += '../';
            }
            node = node.parent;
          }
          return href;
        },
        ancestor: function(node, num) {
          return this.ancestorHref(node, num) + 'index.html';
        },
        asset: function(node, name) {
          var i = 0,
              parent = node.parent;
          while (parent) {
            i += 1;
            parent = parent.parent;
          }
          return this.ancestorHref(node, i) + name;
        }
      };
    },
    writeReport: function(collector, sync) {
      var opts = this.opts,
          dir = opts.dir,
          summarizer = new TreeSummarizer(),
          writer = opts.writer || new FileWriter(sync),
          that = this,
          tree,
          copyAssets = function(subdir) {
            var srcDir = path.resolve(__dirname, '..', 'assets', subdir);
            fs.readdirSync(srcDir).forEach(function(f) {
              var resolvedSource = path.resolve(srcDir, f),
                  resolvedDestination = path.resolve(dir, f),
                  stat = fs.statSync(resolvedSource);
              if (stat.isFile()) {
                if (opts.verbose) {
                  console.log('Write asset: ' + resolvedDestination);
                }
                writer.copyFile(resolvedSource, resolvedDestination);
              }
            });
          };
      collector.files().forEach(function(key) {
        summarizer.addFileCoverageSummary(key, utils.summarizeFileCoverage(collector.fileCoverageFor(key)));
      });
      tree = summarizer.getTreeSummary();
      ['.', 'vendor'].forEach(function(subdir) {
        copyAssets(subdir);
      });
      writer.on('done', function() {
        that.emit('done');
      });
      this.writeFiles(writer, tree.root, dir, collector);
      writer.done();
    }
  });
  module.exports = HtmlReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("31", ["@node/path", "@node/util", "7", "9", "32", "2f", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      util = $__require('@node/util'),
      mkdirp = $__require('7'),
      Report = $__require('9'),
      LcovOnlyReport = $__require('32'),
      HtmlReport = $__require('2f');
  function LcovReport(opts) {
    Report.call(this);
    opts = opts || {};
    var baseDir = path.resolve(opts.dir || process.cwd()),
        htmlDir = path.resolve(baseDir, 'lcov-report');
    mkdirp.sync(baseDir);
    this.lcov = new LcovOnlyReport({
      dir: baseDir,
      watermarks: opts.watermarks
    });
    this.html = new HtmlReport({
      dir: htmlDir,
      watermarks: opts.watermarks,
      sourceStore: opts.sourceStore
    });
  }
  LcovReport.TYPE = 'lcov';
  util.inherits(LcovReport, Report);
  Report.mix(LcovReport, {
    synopsis: function() {
      return 'combined lcovonly and html report that generates an lcov.info file as well as HTML';
    },
    writeReport: function(collector, sync) {
      var handler = this.handleDone.bind(this);
      this.inProgress = 2;
      this.lcov.on('done', handler);
      this.html.on('done', handler);
      this.lcov.writeReport(collector, sync);
      this.html.writeReport(collector, sync);
    },
    handleDone: function() {
      this.inProgress -= 1;
      if (this.inProgress === 0) {
        this.emit('done');
      }
    }
  });
  module.exports = LcovReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("33", ["@node/util", "9", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var util = $__require('@node/util'),
      Report = $__require('9');
  function NoneReport() {
    Report.call(this);
  }
  NoneReport.TYPE = 'none';
  util.inherits(NoneReport, Report);
  Report.mix(NoneReport, {
    synopsis: function() {
      return 'Does nothing. Useful to override default behavior and suppress reporting entirely';
    },
    writeReport: function() {
      this.emit('done');
    }
  });
  module.exports = NoneReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("34", ["@node/path", "@node/util", "7", "@node/fs", "c", "9", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      util = $__require('@node/util'),
      mkdirp = $__require('7'),
      fs = $__require('@node/fs'),
      utils = $__require('c'),
      Report = $__require('9');
  function TeamcityReport(opts) {
    Report.call(this);
    opts = opts || {};
    this.dir = opts.dir || process.cwd();
    this.file = opts.file;
    this.blockName = opts.blockName || this.getDefaultConfig().blockName;
  }
  TeamcityReport.TYPE = 'teamcity';
  util.inherits(TeamcityReport, Report);
  function lineForKey(value, teamcityVar) {
    return '##teamcity[buildStatisticValue key=\'' + teamcityVar + '\' value=\'' + value + '\']';
  }
  Report.mix(TeamcityReport, {
    synopsis: function() {
      return 'report with system messages that can be interpreted with TeamCity';
    },
    getDefaultConfig: function() {
      return {
        file: null,
        blockName: 'Code Coverage Summary'
      };
    },
    writeReport: function(collector) {
      var summaries = [],
          finalSummary,
          lines = [],
          text;
      collector.files().forEach(function(file) {
        summaries.push(utils.summarizeFileCoverage(collector.fileCoverageFor(file)));
      });
      finalSummary = utils.mergeSummaryObjects.apply(null, summaries);
      lines.push('');
      lines.push('##teamcity[blockOpened name=\'' + this.blockName + '\']');
      lines.push(lineForKey(finalSummary.statements.pct, 'CodeCoverageB'));
      lines.push(lineForKey(finalSummary.functions.covered, 'CodeCoverageAbsMCovered'));
      lines.push(lineForKey(finalSummary.functions.total, 'CodeCoverageAbsMTotal'));
      lines.push(lineForKey(finalSummary.functions.pct, 'CodeCoverageM'));
      lines.push(lineForKey(finalSummary.lines.covered, 'CodeCoverageAbsLCovered'));
      lines.push(lineForKey(finalSummary.lines.total, 'CodeCoverageAbsLTotal'));
      lines.push(lineForKey(finalSummary.lines.pct, 'CodeCoverageL'));
      lines.push('##teamcity[blockClosed name=\'' + this.blockName + '\']');
      text = lines.join('\n');
      if (this.file) {
        mkdirp.sync(this.dir);
        fs.writeFileSync(path.join(this.dir, this.file), text, 'utf8');
      } else {
        console.log(text);
      }
      this.emit('done');
    }
  });
  module.exports = TeamcityReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("32", ["@node/path", "a", "@node/util", "9", "c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      Writer = $__require('a'),
      util = $__require('@node/util'),
      Report = $__require('9'),
      utils = $__require('c');
  function LcovOnlyReport(opts) {
    this.opts = opts || {};
    this.opts.dir = this.opts.dir || process.cwd();
    this.opts.file = this.opts.file || this.getDefaultConfig().file;
    this.opts.writer = this.opts.writer || null;
  }
  LcovOnlyReport.TYPE = 'lcovonly';
  util.inherits(LcovOnlyReport, Report);
  Report.mix(LcovOnlyReport, {
    synopsis: function() {
      return 'lcov coverage report that can be consumed by the lcov tool';
    },
    getDefaultConfig: function() {
      return {file: 'lcov.info'};
    },
    writeFileCoverage: function(writer, fc) {
      var functions = fc.f,
          functionMap = fc.fnMap,
          lines = fc.l,
          branches = fc.b,
          branchMap = fc.branchMap,
          summary = utils.summarizeFileCoverage(fc);
      writer.println('TN:');
      writer.println('SF:' + fc.path);
      Object.keys(functions).forEach(function(key) {
        var meta = functionMap[key];
        writer.println('FN:' + [meta.line, meta.name].join(','));
      });
      writer.println('FNF:' + summary.functions.total);
      writer.println('FNH:' + summary.functions.covered);
      Object.keys(functions).forEach(function(key) {
        var stats = functions[key],
            meta = functionMap[key];
        writer.println('FNDA:' + [stats, meta.name].join(','));
      });
      Object.keys(lines).forEach(function(key) {
        var stat = lines[key];
        writer.println('DA:' + [key, stat].join(','));
      });
      writer.println('LF:' + summary.lines.total);
      writer.println('LH:' + summary.lines.covered);
      Object.keys(branches).forEach(function(key) {
        var branchArray = branches[key],
            meta = branchMap[key],
            line = meta.line,
            i = 0;
        branchArray.forEach(function(b) {
          writer.println('BRDA:' + [line, key, i, b].join(','));
          i += 1;
        });
      });
      writer.println('BRF:' + summary.branches.total);
      writer.println('BRH:' + summary.branches.covered);
      writer.println('end_of_record');
    },
    writeReport: function(collector, sync) {
      var outputFile = path.resolve(this.opts.dir, this.opts.file),
          writer = this.opts.writer || new Writer(sync),
          that = this;
      writer.on('done', function() {
        that.emit('done');
      });
      writer.writeFile(outputFile, function(contentWriter) {
        collector.files().forEach(function(key) {
          that.writeFileCoverage(contentWriter, collector.fileCoverageFor(key));
        });
      });
      writer.done();
    }
  });
  module.exports = LcovOnlyReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("35", ["32", "@node/util", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var LcovOnly = $__require('32'),
      util = $__require('@node/util');
  function TextLcov(opts) {
    var that = this;
    LcovOnly.call(this);
    this.opts = opts || {};
    this.opts.log = this.opts.log || console.log;
    this.opts.writer = {println: function(ln) {
        that.opts.log(ln);
      }};
  }
  TextLcov.TYPE = 'text-lcov';
  util.inherits(TextLcov, LcovOnly);
  LcovOnly.super_.mix(TextLcov, {writeReport: function(collector) {
      var that = this,
          writer = this.opts.writer;
      collector.files().forEach(function(key) {
        that.writeFileCoverage(writer, collector.fileCoverageFor(key));
      });
      this.emit('done');
    }});
  module.exports = TextLcov;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("36", ["@node/path", "@node/util", "7", "30", "@node/fs", "c", "9", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      util = $__require('@node/util'),
      mkdirp = $__require('7'),
      defaults = $__require('30'),
      fs = $__require('@node/fs'),
      utils = $__require('c'),
      Report = $__require('9');
  function TextSummaryReport(opts) {
    Report.call(this);
    opts = opts || {};
    this.dir = opts.dir || process.cwd();
    this.file = opts.file;
    this.watermarks = opts.watermarks || defaults.watermarks();
  }
  TextSummaryReport.TYPE = 'text-summary';
  util.inherits(TextSummaryReport, Report);
  function lineForKey(summary, key, watermarks) {
    var metrics = summary[key],
        skipped,
        result,
        clazz = defaults.classFor(key, summary, watermarks);
    key = key.substring(0, 1).toUpperCase() + key.substring(1);
    if (key.length < 12) {
      key += '                   '.substring(0, 12 - key.length);
    }
    result = [key, ':', metrics.pct + '%', '(', metrics.covered + '/' + metrics.total, ')'].join(' ');
    skipped = metrics.skipped;
    if (skipped > 0) {
      result += ', ' + skipped + ' ignored';
    }
    return defaults.colorize(result, clazz);
  }
  Report.mix(TextSummaryReport, {
    synopsis: function() {
      return 'text report that prints a coverage summary across all files, typically to console';
    },
    getDefaultConfig: function() {
      return {file: null};
    },
    writeReport: function(collector) {
      var summaries = [],
          finalSummary,
          lines = [],
          watermarks = this.watermarks,
          text;
      collector.files().forEach(function(file) {
        summaries.push(utils.summarizeFileCoverage(collector.fileCoverageFor(file)));
      });
      finalSummary = utils.mergeSummaryObjects.apply(null, summaries);
      lines.push('');
      lines.push('=============================== Coverage summary ===============================');
      lines.push.apply(lines, [lineForKey(finalSummary, 'statements', watermarks), lineForKey(finalSummary, 'branches', watermarks), lineForKey(finalSummary, 'functions', watermarks), lineForKey(finalSummary, 'lines', watermarks)]);
      lines.push('================================================================================');
      text = lines.join('\n');
      if (this.file) {
        mkdirp.sync(this.dir);
        fs.writeFileSync(path.join(this.dir, this.file), text, 'utf8');
      } else {
        console.log(text);
      }
      this.emit('done');
    }
  });
  module.exports = TextSummaryReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("37", ["@node/path", "7", "@node/util", "@node/fs", "30", "9", "b", "c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      mkdirp = $__require('7'),
      util = $__require('@node/util'),
      fs = $__require('@node/fs'),
      defaults = $__require('30'),
      Report = $__require('9'),
      TreeSummarizer = $__require('b'),
      utils = $__require('c'),
      PCT_COLS = 9,
      MISSING_COL = 15,
      TAB_SIZE = 1,
      DELIM = ' |',
      COL_DELIM = '-|';
  function TextReport(opts) {
    Report.call(this);
    opts = opts || {};
    this.dir = opts.dir || process.cwd();
    this.file = opts.file;
    this.summary = opts.summary;
    this.maxCols = opts.maxCols || 0;
    this.watermarks = opts.watermarks || defaults.watermarks();
  }
  TextReport.TYPE = 'text';
  util.inherits(TextReport, Report);
  function padding(num, ch) {
    var str = '',
        i;
    ch = ch || ' ';
    for (i = 0; i < num; i += 1) {
      str += ch;
    }
    return str;
  }
  function fill(str, width, right, tabs, clazz) {
    tabs = tabs || 0;
    str = String(str);
    var leadingSpaces = tabs * TAB_SIZE,
        remaining = width - leadingSpaces,
        leader = padding(leadingSpaces),
        fmtStr = '',
        fillStr,
        strlen = str.length;
    if (remaining > 0) {
      if (remaining >= strlen) {
        fillStr = padding(remaining - strlen);
        fmtStr = right ? fillStr + str : str + fillStr;
      } else {
        fmtStr = str.substring(strlen - remaining);
        fmtStr = '... ' + fmtStr.substring(4);
      }
    }
    fmtStr = defaults.colorize(fmtStr, clazz);
    return leader + fmtStr;
  }
  function formatName(name, maxCols, level, clazz) {
    return fill(name, maxCols, false, level, clazz);
  }
  function formatPct(pct, clazz, width) {
    return fill(pct, width || PCT_COLS, true, 0, clazz);
  }
  function nodeName(node) {
    return node.displayShortName() || 'All files';
  }
  function tableHeader(maxNameCols) {
    var elements = [];
    elements.push(formatName('File', maxNameCols, 0));
    elements.push(formatPct('% Stmts'));
    elements.push(formatPct('% Branch'));
    elements.push(formatPct('% Funcs'));
    elements.push(formatPct('% Lines'));
    elements.push(formatPct('Uncovered Lines', undefined, MISSING_COL));
    return elements.join(' |') + ' |';
  }
  function collectMissingLines(kind, linesCovered) {
    var missingLines = [];
    if (kind !== 'file') {
      return [];
    }
    Object.keys(linesCovered).forEach(function(key) {
      if (!linesCovered[key]) {
        missingLines.push(key);
      }
    });
    return missingLines;
  }
  function tableRow(node, maxNameCols, level, watermarks) {
    var name = nodeName(node),
        statements = node.metrics.statements.pct,
        branches = node.metrics.branches.pct,
        functions = node.metrics.functions.pct,
        lines = node.metrics.lines.pct,
        missingLines = collectMissingLines(node.kind, node.metrics.linesCovered),
        elements = [];
    elements.push(formatName(name, maxNameCols, level, defaults.classFor('statements', node.metrics, watermarks)));
    elements.push(formatPct(statements, defaults.classFor('statements', node.metrics, watermarks)));
    elements.push(formatPct(branches, defaults.classFor('branches', node.metrics, watermarks)));
    elements.push(formatPct(functions, defaults.classFor('functions', node.metrics, watermarks)));
    elements.push(formatPct(lines, defaults.classFor('lines', node.metrics, watermarks)));
    elements.push(formatPct(missingLines.join(','), 'low', MISSING_COL));
    return elements.join(DELIM) + DELIM;
  }
  function findNameWidth(node, level, last) {
    last = last || 0;
    level = level || 0;
    var idealWidth = TAB_SIZE * level + nodeName(node).length;
    if (idealWidth > last) {
      last = idealWidth;
    }
    node.children.forEach(function(child) {
      last = findNameWidth(child, level + 1, last);
    });
    return last;
  }
  function makeLine(nameWidth) {
    var name = padding(nameWidth, '-'),
        pct = padding(PCT_COLS, '-'),
        elements = [];
    elements.push(name);
    elements.push(pct);
    elements.push(pct);
    elements.push(pct);
    elements.push(pct);
    elements.push(padding(MISSING_COL, '-'));
    return elements.join(COL_DELIM) + COL_DELIM;
  }
  function walk(node, nameWidth, array, level, watermarks) {
    var line;
    if (level === 0) {
      line = makeLine(nameWidth);
      array.push(line);
      array.push(tableHeader(nameWidth));
      array.push(line);
    } else {
      array.push(tableRow(node, nameWidth, level, watermarks));
    }
    node.children.forEach(function(child) {
      walk(child, nameWidth, array, level + 1, watermarks);
    });
    if (level === 0) {
      array.push(line);
      array.push(tableRow(node, nameWidth, level, watermarks));
      array.push(line);
    }
  }
  Report.mix(TextReport, {
    synopsis: function() {
      return 'text report that prints a coverage line for every file, typically to console';
    },
    getDefaultConfig: function() {
      return {
        file: null,
        maxCols: 0
      };
    },
    writeReport: function(collector) {
      var summarizer = new TreeSummarizer(),
          tree,
          root,
          nameWidth,
          statsWidth = 4 * (PCT_COLS + 2) + MISSING_COL,
          maxRemaining,
          strings = [],
          text;
      collector.files().forEach(function(key) {
        summarizer.addFileCoverageSummary(key, utils.summarizeFileCoverage(collector.fileCoverageFor(key)));
      });
      tree = summarizer.getTreeSummary();
      root = tree.root;
      nameWidth = findNameWidth(root);
      if (this.maxCols > 0) {
        maxRemaining = this.maxCols - statsWidth - 2;
        if (nameWidth > maxRemaining) {
          nameWidth = maxRemaining;
        }
      }
      walk(root, nameWidth, strings, 0, this.watermarks);
      text = strings.join('\n') + '\n';
      if (this.file) {
        mkdirp.sync(this.dir);
        fs.writeFileSync(path.join(this.dir, this.file), text, 'utf8');
      } else {
        console.log(text);
      }
      this.emit('done');
    }
  });
  module.exports = TextReport;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("38", ["3e", "@node/path", "@node/fs", "39", "3a", "@node/util", "c", "3b", "3c", "3d", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var nopt = $__require('3e'),
      path = $__require('@node/path'),
      fs = $__require('@node/fs'),
      Collector = $__require('39'),
      formatOption = $__require('3a').formatOption,
      util = $__require('@node/util'),
      utils = $__require('c'),
      filesFor = $__require('3b').filesFor,
      Command = $__require('3c'),
      configuration = $__require('3d');
  function isAbsolute(file) {
    if (path.isAbsolute) {
      return path.isAbsolute(file);
    }
    return path.resolve(file) === path.normalize(file);
  }
  function CheckCoverageCommand() {
    Command.call(this);
  }
  function removeFiles(covObj, root, files) {
    var filesObj = {},
        obj = {};
    files.forEach(function(file) {
      filesObj[file] = true;
    });
    Object.keys(covObj).forEach(function(key) {
      var excludeKey = isAbsolute(key) ? path.relative(root, key) : key;
      excludeKey = path.normalize(excludeKey);
      if (filesObj[excludeKey] !== true) {
        obj[key] = covObj[key];
      }
    });
    return obj;
  }
  CheckCoverageCommand.TYPE = 'check-coverage';
  util.inherits(CheckCoverageCommand, Command);
  Command.mix(CheckCoverageCommand, {
    synopsis: function() {
      return "checks overall/per-file coverage against thresholds from coverage JSON files. Exits 1 if thresholds are not met, 0 otherwise";
    },
    usage: function() {
      console.error('\nUsage: ' + this.toolName() + ' ' + this.type() + ' <options> [<include-pattern>]\n\nOptions are:\n\n' + [formatOption('--statements <threshold>', 'global statement coverage threshold'), formatOption('--functions <threshold>', 'global function coverage threshold'), formatOption('--branches <threshold>', 'global branch coverage threshold'), formatOption('--lines <threshold>', 'global line coverage threshold')].join('\n\n') + '\n');
      console.error('\n\n');
      console.error('Thresholds, when specified as a positive number are taken to be the minimum percentage required.');
      console.error('When a threshold is specified as a negative number it represents the maximum number of uncovered entities allowed.\n');
      console.error('For example, --statements 90 implies minimum statement coverage is 90%.');
      console.error('             --statements -10 implies that no more than 10 uncovered statements are allowed\n');
      console.error('Per-file thresholds can be specified via a configuration file.\n');
      console.error('<include-pattern> is a fileset pattern that can be used to select one or more coverage files ' + 'for merge. This defaults to "**/coverage*.json"');
      console.error('\n');
    },
    run: function(args, callback) {
      var template = {
        config: path,
        root: path,
        statements: Number,
        lines: Number,
        branches: Number,
        functions: Number,
        verbose: Boolean
      },
          opts = nopt(template, {v: '--verbose'}, args, 0),
          config = configuration.loadFile(opts.config, {
            verbose: opts.verbose,
            check: {global: {
                statements: opts.statements,
                lines: opts.lines,
                branches: opts.branches,
                functions: opts.functions
              }}
          }),
          includePattern = '**/coverage*.json',
          root,
          collector = new Collector(),
          errors = [];
      if (opts.argv.remain.length > 0) {
        includePattern = opts.argv.remain[0];
      }
      root = opts.root || process.cwd();
      filesFor({
        root: root,
        includes: [includePattern]
      }, function(err, files) {
        if (err) {
          throw err;
        }
        if (files.length === 0) {
          return callback('ERROR: No coverage files found.');
        }
        files.forEach(function(file) {
          var coverageObject = JSON.parse(fs.readFileSync(file, 'utf8'));
          collector.add(coverageObject);
        });
        var thresholds = {
          global: {
            statements: config.check.global.statements || 0,
            branches: config.check.global.branches || 0,
            lines: config.check.global.lines || 0,
            functions: config.check.global.functions || 0,
            excludes: config.check.global.excludes || []
          },
          each: {
            statements: config.check.each.statements || 0,
            branches: config.check.each.branches || 0,
            lines: config.check.each.lines || 0,
            functions: config.check.each.functions || 0,
            excludes: config.check.each.excludes || []
          }
        },
            rawCoverage = collector.getFinalCoverage(),
            globalResults = utils.summarizeCoverage(removeFiles(rawCoverage, root, thresholds.global.excludes)),
            eachResults = removeFiles(rawCoverage, root, thresholds.each.excludes);
        Object.keys(eachResults).forEach(function(key) {
          eachResults[key] = utils.summarizeFileCoverage(eachResults[key]);
        });
        if (config.verbose) {
          console.log('Compare actuals against thresholds');
          console.log(JSON.stringify({
            global: globalResults,
            each: eachResults,
            thresholds: thresholds
          }, undefined, 4));
        }
        function check(name, thresholds, actuals) {
          ["statements", "branches", "lines", "functions"].forEach(function(key) {
            var actual = actuals[key].pct,
                actualUncovered = actuals[key].total - actuals[key].covered,
                threshold = thresholds[key];
            if (threshold < 0) {
              if (threshold * -1 < actualUncovered) {
                errors.push('ERROR: Uncovered count for ' + key + ' (' + actualUncovered + ') exceeds ' + name + ' threshold (' + -1 * threshold + ')');
              }
            } else {
              if (actual < threshold) {
                errors.push('ERROR: Coverage for ' + key + ' (' + actual + '%) does not meet ' + name + ' threshold (' + threshold + '%)');
              }
            }
          });
        }
        check("global", thresholds.global, globalResults);
        Object.keys(eachResults).forEach(function(key) {
          check("per-file" + " (" + key + ") ", thresholds.each, eachResults[key]);
        });
        return callback(errors.length === 0 ? null : errors.join("\n"));
      });
    }
  });
  module.exports = CheckCoverageCommand;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3f", ["40", "@node/util", "3c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var runWithCover = $__require('40'),
      util = $__require('@node/util'),
      Command = $__require('3c');
  function CoverCommand() {
    Command.call(this);
  }
  CoverCommand.TYPE = 'cover';
  util.inherits(CoverCommand, Command);
  Command.mix(CoverCommand, {
    synopsis: function() {
      return "transparently adds coverage information to a node command. Saves coverage.json and reports at the end of execution";
    },
    usage: function() {
      runWithCover.usage(this.toolName(), this.type());
    },
    run: function(args, callback) {
      runWithCover.run(args, this.type(), true, callback);
    }
  });
  module.exports = CoverCommand;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("41", ["@node/util", "@node/events", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var util = $__require('@node/util'),
      EventEmitter = $__require('@node/events').EventEmitter;
  function extend(cons, proto) {
    Object.keys(proto).forEach(function(k) {
      cons.prototype[k] = proto[k];
    });
  }
  function ContentWriter() {}
  ContentWriter.prototype = {
    write: function() {
      throw new Error('write: must be overridden');
    },
    println: function(str) {
      this.write(str + '\n');
    }
  };
  function Writer() {
    EventEmitter.call(this);
  }
  util.inherits(Writer, EventEmitter);
  extend(Writer, {
    writeFile: function() {
      throw new Error('writeFile: must be overridden');
    },
    copyFile: function() {
      throw new Error('copyFile: must be overridden');
    },
    done: function() {
      throw new Error('done: must be overridden');
    }
  });
  module.exports = {
    Writer: Writer,
    ContentWriter: ContentWriter
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a", ["@node/path", "@node/util", "@node/fs", "42", "7", "41", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      util = $__require('@node/util'),
      fs = $__require('@node/fs'),
      async = $__require('42'),
      mkdirp = $__require('7'),
      writer = $__require('41'),
      Writer = writer.Writer,
      ContentWriter = writer.ContentWriter;
  function extend(cons, proto) {
    Object.keys(proto).forEach(function(k) {
      cons.prototype[k] = proto[k];
    });
  }
  function BufferedContentWriter() {
    ContentWriter.call(this);
    this.content = '';
  }
  util.inherits(BufferedContentWriter, ContentWriter);
  extend(BufferedContentWriter, {
    write: function(str) {
      this.content += str;
    },
    getContent: function() {
      return this.content;
    }
  });
  function StreamContentWriter(stream) {
    ContentWriter.call(this);
    this.stream = stream;
  }
  util.inherits(StreamContentWriter, ContentWriter);
  extend(StreamContentWriter, {write: function(str) {
      this.stream.write(str);
    }});
  function SyncFileWriter() {
    Writer.call(this);
  }
  util.inherits(SyncFileWriter, Writer);
  extend(SyncFileWriter, {
    writeFile: function(file, callback) {
      mkdirp.sync(path.dirname(file));
      var cw = new BufferedContentWriter();
      callback(cw);
      fs.writeFileSync(file, cw.getContent(), 'utf8');
    },
    done: function() {
      this.emit('done');
    }
  });
  function AsyncFileWriter() {
    this.queue = async.queue(this.processFile.bind(this), 20);
    this.openFileMap = {};
  }
  util.inherits(AsyncFileWriter, Writer);
  extend(AsyncFileWriter, {
    writeFile: function(file, callback) {
      this.openFileMap[file] = true;
      this.queue.push({
        file: file,
        callback: callback
      });
    },
    processFile: function(task, cb) {
      var file = task.file,
          userCallback = task.callback,
          that = this,
          stream,
          contentWriter;
      mkdirp.sync(path.dirname(file));
      stream = fs.createWriteStream(file);
      stream.on('close', function() {
        delete that.openFileMap[file];
        cb();
        that.checkDone();
      });
      stream.on('error', function(err) {
        that.emit('error', err);
      });
      contentWriter = new StreamContentWriter(stream);
      userCallback(contentWriter);
      stream.end();
    },
    done: function() {
      this.doneCalled = true;
      this.checkDone();
    },
    checkDone: function() {
      if (!this.doneCalled) {
        return;
      }
      if (Object.keys(this.openFileMap).length === 0) {
        this.emit('done');
      }
    }
  });
  function FileWriter(sync) {
    Writer.call(this);
    var that = this;
    this.delegate = sync ? new SyncFileWriter() : new AsyncFileWriter();
    this.delegate.on('error', function(err) {
      that.emit('error', err);
    });
    this.delegate.on('done', function() {
      that.emit('done');
    });
  }
  util.inherits(FileWriter, Writer);
  extend(FileWriter, {
    copyFile: function(source, dest) {
      mkdirp.sync(path.dirname(dest));
      fs.writeFileSync(dest, fs.readFileSync(source));
    },
    writeFile: function(file, callback) {
      this.delegate.writeFile(file, callback);
    },
    done: function() {
      this.delegate.done();
    }
  });
  module.exports = FileWriter;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("43", ["@node/path", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      yuiRegexp = /yui-nodejs\.js$/;
  module.exports = function(matchFn, transformFn, verbose) {
    return function(file) {
      if (!file.match(yuiRegexp)) {
        return;
      }
      var YMain = $__require(file),
          YUI,
          loaderFn,
          origGet;
      if (YMain.YUI) {
        YUI = YMain.YUI;
        loaderFn = YUI.Env && YUI.Env.mods && YUI.Env.mods['loader-base'] ? YUI.Env.mods['loader-base'].fn : null;
        if (!loaderFn) {
          return;
        }
        if (verbose) {
          console.log('Applying YUI load post-hook');
        }
        YUI.Env.mods['loader-base'].fn = function(Y) {
          loaderFn.call(null, Y);
          origGet = Y.Get._exec;
          Y.Get._exec = function(data, url, cb) {
            if (matchFn(url) || matchFn(path.resolve(url))) {
              if (verbose) {
                console.log('Transforming [' + url + ']');
              }
              try {
                data = transformFn(data, url);
              } catch (ex) {
                console.error('Error transforming: ' + url + ' return original code');
                console.error(ex.message || ex);
                if (ex.stack) {
                  console.error(ex.stack);
                }
              }
            }
            return origGet.call(Y, data, url, cb);
          };
          return Y;
        };
      }
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b", ["@node/path", "c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      SEP = path.sep || '/',
      utils = $__require('c');
  function commonArrayPrefix(first, second) {
    var len = first.length < second.length ? first.length : second.length,
        i,
        ret = [];
    for (i = 0; i < len; i += 1) {
      if (first[i] === second[i]) {
        ret.push(first[i]);
      } else {
        break;
      }
    }
    return ret;
  }
  function findCommonArrayPrefix(args) {
    if (args.length === 0) {
      return [];
    }
    var separated = args.map(function(arg) {
      return arg.split(SEP);
    }),
        ret = separated.pop();
    if (separated.length === 0) {
      return ret.slice(0, ret.length - 1);
    } else {
      return separated.reduce(commonArrayPrefix, ret);
    }
  }
  function Node(fullName, kind, metrics) {
    this.name = fullName;
    this.fullName = fullName;
    this.kind = kind;
    this.metrics = metrics || null;
    this.parent = null;
    this.children = [];
  }
  Node.prototype = {
    displayShortName: function() {
      return this.relativeName;
    },
    fullPath: function() {
      return this.fullName;
    },
    addChild: function(child) {
      this.children.push(child);
      child.parent = this;
    },
    toJSON: function() {
      return {
        name: this.name,
        relativeName: this.relativeName,
        fullName: this.fullName,
        kind: this.kind,
        metrics: this.metrics,
        parent: this.parent === null ? null : this.parent.name,
        children: this.children.map(function(node) {
          return node.toJSON();
        })
      };
    }
  };
  function TreeSummary(summaryMap, commonPrefix) {
    this.prefix = commonPrefix;
    this.convertToTree(summaryMap, commonPrefix);
  }
  TreeSummary.prototype = {
    getNode: function(shortName) {
      return this.map[shortName];
    },
    convertToTree: function(summaryMap, arrayPrefix) {
      var nodes = [],
          rootPath = arrayPrefix.join(SEP) + SEP,
          root = new Node(rootPath, 'dir'),
          tmp,
          tmpChildren,
          seen = {},
          filesUnderRoot = false;
      seen[rootPath] = root;
      Object.keys(summaryMap).forEach(function(key) {
        var metrics = summaryMap[key],
            node,
            parentPath,
            parent;
        node = new Node(key, 'file', metrics);
        seen[key] = node;
        nodes.push(node);
        parentPath = path.dirname(key) + SEP;
        if (parentPath === SEP + SEP || parentPath === '.' + SEP) {
          parentPath = SEP + '__root__' + SEP;
        }
        parent = seen[parentPath];
        if (!parent) {
          parent = new Node(parentPath, 'dir');
          root.addChild(parent);
          seen[parentPath] = parent;
        }
        parent.addChild(node);
        if (parent === root) {
          filesUnderRoot = true;
        }
      });
      if (filesUnderRoot && arrayPrefix.length > 0) {
        arrayPrefix.pop();
        tmp = root;
        tmpChildren = tmp.children;
        tmp.children = [];
        root = new Node(arrayPrefix.join(SEP) + SEP, 'dir');
        root.addChild(tmp);
        tmpChildren.forEach(function(child) {
          if (child.kind === 'dir') {
            root.addChild(child);
          } else {
            tmp.addChild(child);
          }
        });
      }
      this.fixupNodes(root, arrayPrefix.join(SEP) + SEP);
      this.calculateMetrics(root);
      this.root = root;
      this.map = {};
      this.indexAndSortTree(root, this.map);
    },
    fixupNodes: function(node, prefix, parent) {
      var that = this;
      if (node.name.indexOf(prefix) === 0) {
        node.name = node.name.substring(prefix.length);
      }
      if (node.name.charAt(0) === SEP) {
        node.name = node.name.substring(1);
      }
      if (parent) {
        if (parent.name !== '__root__' + SEP) {
          node.relativeName = node.name.substring(parent.name.length);
        } else {
          node.relativeName = node.name;
        }
      } else {
        node.relativeName = node.name.substring(prefix.length);
      }
      node.children.forEach(function(child) {
        that.fixupNodes(child, prefix, node);
      });
    },
    calculateMetrics: function(entry) {
      var that = this,
          fileChildren;
      if (entry.kind !== 'dir') {
        return;
      }
      entry.children.forEach(function(child) {
        that.calculateMetrics(child);
      });
      entry.metrics = utils.mergeSummaryObjects.apply(null, entry.children.map(function(child) {
        return child.metrics;
      }));
      fileChildren = entry.children.filter(function(n) {
        return n.kind !== 'dir';
      });
      if (fileChildren.length > 0) {
        entry.packageMetrics = utils.mergeSummaryObjects.apply(null, fileChildren.map(function(child) {
          return child.metrics;
        }));
      } else {
        entry.packageMetrics = null;
      }
    },
    indexAndSortTree: function(node, map) {
      var that = this;
      map[node.name] = node;
      node.children.sort(function(a, b) {
        a = a.relativeName;
        b = b.relativeName;
        return a < b ? -1 : a > b ? 1 : 0;
      });
      node.children.forEach(function(child) {
        that.indexAndSortTree(child, map);
      });
    },
    toJSON: function() {
      return {
        prefix: this.prefix,
        root: this.root.toJSON()
      };
    }
  };
  function TreeSummarizer() {
    this.summaryMap = {};
  }
  TreeSummarizer.prototype = {
    addFileCoverageSummary: function(filePath, metrics) {
      this.summaryMap[filePath] = metrics;
    },
    getTreeSummary: function() {
      var commonArrayPrefix = findCommonArrayPrefix(Object.keys(this.summaryMap));
      return new TreeSummary(this.summaryMap, commonArrayPrefix);
    }
  };
  module.exports = TreeSummarizer;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1", ["@node/path", "4", "9", "47", "2", "44", "39", "45", "3d", "46", "c", "3b", "41", "a", "43", "b", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var path = $__require('@node/path'),
      Store = $__require('4'),
      Report = $__require('9'),
      meta = $__require('47');
  $__require('2');
  module.exports = {
    Instrumenter: $__require('44'),
    Store: Store,
    Collector: $__require('39'),
    hook: $__require('45'),
    Report: Report,
    config: $__require('3d'),
    Reporter: $__require('46'),
    utils: $__require('c'),
    matcherFor: $__require('3b').matcherFor,
    VERSION: meta.VERSION,
    Writer: $__require('41').Writer,
    ContentWriter: $__require('41').ContentWriter,
    FileWriter: $__require('a'),
    _yuiLoadHook: $__require('43'),
    TreeSummarizer: $__require('b'),
    assetsDir: path.resolve(__dirname, 'lib', 'assets')
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("48", ["3c", "@node/util", "3a", "1", "3d", "49", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Command = $__require('3c'),
      util = $__require('@node/util'),
      formatOption = $__require('3a').formatOption,
      VERSION = $__require('1').VERSION,
      configuration = $__require('3d'),
      yaml = $__require('49'),
      formatPara = $__require('3a').formatPara;
  function showConfigHelp(toolName) {
    console.error('\nConfiguring ' + toolName);
    console.error('====================');
    console.error('\n' + formatPara(toolName + ' can be configured globally using a .istanbul.yml YAML file ' + 'at the root of your source tree. Every command also accepts a --config=<config-file> argument to ' + 'customize its location per command. The alternate config file can be in YAML, JSON or node.js ' + '(exporting the config object).'));
    console.error('\n' + formatPara('The config file currently has four sections for instrumentation, reporting, hooks, ' + 'and checking. Note that certain commands (like `cover`) use information from multiple sections.'));
    console.error('\n' + formatPara('Keys in the config file usually correspond to command line parameters with the same name. ' + 'The verbose option for every command shows you the exact configuration used. See the api ' + 'docs for an explanation of each key.'));
    console.error('\n' + formatPara('You only need to specify the keys that you want to override. Your overrides will be merged ' + 'with the default config.'));
    console.error('\nThe default configuration is as follows:\n');
    console.error(yaml.safeDump(configuration.defaultConfig(), {
      indent: 4,
      flowLevel: 3
    }));
    console.error('\n' + formatPara('The `watermarks` section does not have a command line equivalent. It allows you to set up ' + 'low and high watermark percentages for reporting. These are honored by all reporters that colorize ' + 'their output based on low/ medium/ high coverage.'));
    console.error('\n' + formatPara('The `reportConfig` section allows you to configure each report format independently ' + 'and has no command-line equivalent either.'));
    console.error('\n' + formatPara('The `check` section configures minimum threshold enforcement for coverage results. ' + '`global` applies to all files together and `each` on a per-file basis. A list of files can ' + 'be excluded from enforcement relative to root via the `exclude` property.'));
    console.error('');
  }
  function HelpCommand() {
    Command.call(this);
  }
  HelpCommand.TYPE = 'help';
  util.inherits(HelpCommand, Command);
  Command.mix(HelpCommand, {
    synopsis: function() {
      return "shows help";
    },
    usage: function() {
      console.error('\nUsage: ' + this.toolName() + ' ' + this.type() + ' config | <command>\n');
      console.error('`config` provides help with istanbul configuration\n');
      console.error('Available commands are:\n');
      var commandObj;
      Command.getCommandList().forEach(function(cmd) {
        commandObj = Command.create(cmd);
        console.error(formatOption(cmd, commandObj.synopsis()));
        console.error("\n");
      });
      console.error("Command names can be abbreviated as long as the abbreviation is unambiguous");
      console.error(this.toolName() + ' version:' + VERSION);
      console.error("\n");
    },
    run: function(args, callback) {
      var command;
      if (args.length === 0) {
        this.usage();
      } else {
        if (args[0] === 'config') {
          showConfigHelp(this.toolName());
        } else {
          try {
            command = Command.create(args[0]);
            command.usage('istanbul', Command.resolveCommandName(args[0]));
          } catch (ex) {
            console.error('Invalid command: ' + args[0]);
            this.usage();
          }
        }
      }
      return callback();
    }
  });
  module.exports = HelpCommand;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4a", ["@node/path", "7", "4c", "42", "@node/fs", "3b", "3e", "44", "4b", "3a", "@node/util", "3c", "39", "3d", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      mkdirp = $__require('7'),
      once = $__require('4c'),
      async = $__require('42'),
      fs = $__require('@node/fs'),
      filesFor = $__require('3b').filesFor,
      nopt = $__require('3e'),
      Instrumenter = $__require('44'),
      inputError = $__require('4b'),
      formatOption = $__require('3a').formatOption,
      util = $__require('@node/util'),
      Command = $__require('3c'),
      Collector = $__require('39'),
      configuration = $__require('3d'),
      verbose;
  var READ_FILE_CHUNK_SIZE = 64 * 1024;
  function BaselineCollector(instrumenter) {
    this.instrumenter = instrumenter;
    this.collector = new Collector();
    this.instrument = instrumenter.instrument.bind(this.instrumenter);
    var origInstrumentSync = instrumenter.instrumentSync;
    this.instrumentSync = function() {
      var args = Array.prototype.slice.call(arguments),
          ret = origInstrumentSync.apply(this.instrumenter, args),
          baseline = this.instrumenter.lastFileCoverage(),
          coverage = {};
      coverage[baseline.path] = baseline;
      this.collector.add(coverage);
      return ret;
    };
    instrumenter.instrumentSync = this.instrumentSync.bind(this);
  }
  BaselineCollector.prototype = {getCoverage: function() {
      return this.collector.getFinalCoverage();
    }};
  function processFiles(instrumenter, inputDir, outputDir, relativeNames, extensions) {
    var processor = function(name, callback) {
      var inputFile = path.resolve(inputDir, name),
          outputFile = path.resolve(outputDir, name),
          inputFileExtenstion = path.extname(inputFile),
          isJavaScriptFile = extensions.indexOf(inputFileExtenstion) > -1,
          oDir = path.dirname(outputFile),
          readStream,
          writeStream;
      callback = once(callback);
      mkdirp.sync(oDir);
      if (fs.statSync(inputFile).isDirectory()) {
        return callback(null, name);
      }
      if (isJavaScriptFile) {
        fs.readFile(inputFile, 'utf8', function(err, data) {
          if (err) {
            return callback(err, name);
          }
          instrumenter.instrument(data, inputFile, function(iErr, instrumented) {
            if (iErr) {
              return callback(iErr, name);
            }
            fs.writeFile(outputFile, instrumented, 'utf8', function(err) {
              return callback(err, name);
            });
          });
        });
      } else {
        readStream = fs.createReadStream(inputFile, {'bufferSize': READ_FILE_CHUNK_SIZE});
        writeStream = fs.createWriteStream(outputFile);
        readStream.on('error', callback);
        writeStream.on('error', callback);
        readStream.pipe(writeStream);
        readStream.on('end', function() {
          callback(null, name);
        });
      }
    },
        q = async.queue(processor, 10),
        errors = [],
        count = 0,
        startTime = new Date().getTime();
    q.push(relativeNames, function(err, name) {
      var inputFile,
          outputFile;
      if (err) {
        errors.push({
          file: name,
          error: err.message || err.toString()
        });
        inputFile = path.resolve(inputDir, name);
        outputFile = path.resolve(outputDir, name);
        fs.writeFileSync(outputFile, fs.readFileSync(inputFile));
      }
      if (verbose) {
        console.log('Processed: ' + name);
      } else {
        if (count % 100 === 0) {
          process.stdout.write('.');
        }
      }
      count += 1;
    });
    q.drain = function() {
      var endTime = new Date().getTime();
      console.log('\nProcessed [' + count + '] files in ' + Math.floor((endTime - startTime) / 1000) + ' secs');
      if (errors.length > 0) {
        console.log('The following ' + errors.length + ' file(s) had errors and were copied as-is');
        console.log(errors);
      }
    };
  }
  function InstrumentCommand() {
    Command.call(this);
  }
  InstrumentCommand.TYPE = 'instrument';
  util.inherits(InstrumentCommand, Command);
  Command.mix(InstrumentCommand, {
    synopsis: function synopsis() {
      return "instruments a file or a directory tree and writes the instrumented code to the desired output location";
    },
    usage: function() {
      console.error('\nUsage: ' + this.toolName() + ' ' + this.type() + ' <options> <file-or-directory>\n\nOptions are:\n\n' + [formatOption('--config <path-to-config>', 'the configuration file to use, defaults to .istanbul.yml'), formatOption('--output <file-or-dir>', 'The output file or directory. This is required when the input is a directory, ' + 'defaults to standard output when input is a file'), formatOption('-x <exclude-pattern> [-x <exclude-pattern>]', 'one or more fileset patterns (e.g. "**/vendor/**" to ignore all files ' + 'under a vendor directory). Also see the --default-excludes option'), formatOption('--variable <global-coverage-variable-name>', 'change the variable name of the global coverage variable from the ' + 'default value of `__coverage__` to something else'), formatOption('--embed-source', 'embed source code into the coverage object, defaults to false'), formatOption('--[no-]compact', 'produce [non]compact output, defaults to compact'), formatOption('--[no-]preserve-comments', 'remove / preserve comments in the output, defaults to false'), formatOption('--[no-]complete-copy', 'also copy non-javascript files to the ouput directory as is, defaults to false'), formatOption('--save-baseline', 'produce a baseline coverage.json file out of all files instrumented'), formatOption('--baseline-file <file>', 'filename of baseline file, defaults to coverage/coverage-baseline.json'), formatOption('--es-modules', 'source code uses es import/export module syntax')].join('\n\n') + '\n');
      console.error('\n');
    },
    run: function(args, callback) {
      var template = {
        config: path,
        output: path,
        x: [Array, String],
        variable: String,
        compact: Boolean,
        'complete-copy': Boolean,
        verbose: Boolean,
        'save-baseline': Boolean,
        'baseline-file': path,
        'embed-source': Boolean,
        'preserve-comments': Boolean,
        'es-modules': Boolean
      },
          opts = nopt(template, {v: '--verbose'}, args, 0),
          overrides = {
            verbose: opts.verbose,
            instrumentation: {
              variable: opts.variable,
              compact: opts.compact,
              'embed-source': opts['embed-source'],
              'preserve-comments': opts['preserve-comments'],
              excludes: opts.x,
              'complete-copy': opts['complete-copy'],
              'save-baseline': opts['save-baseline'],
              'baseline-file': opts['baseline-file'],
              'es-modules': opts['es-modules']
            }
          },
          config = configuration.loadFile(opts.config, overrides),
          iOpts = config.instrumentation,
          cmdArgs = opts.argv.remain,
          file,
          stats,
          stream,
          includes,
          instrumenter,
          needBaseline = iOpts.saveBaseline(),
          baselineFile = path.resolve(iOpts.baselineFile()),
          output = opts.output;
      verbose = config.verbose;
      if (cmdArgs.length !== 1) {
        return callback(inputError.create('Need exactly one filename/ dirname argument for the instrument command!'));
      }
      if (iOpts.completeCopy()) {
        includes = ['**/*'];
      } else {
        includes = iOpts.extensions().map(function(ext) {
          return '**/*' + ext;
        });
      }
      instrumenter = new Instrumenter({
        coverageVariable: iOpts.variable(),
        embedSource: iOpts.embedSource(),
        noCompact: !iOpts.compact(),
        preserveComments: iOpts.preserveComments(),
        esModules: iOpts.esModules()
      });
      if (needBaseline) {
        mkdirp.sync(path.dirname(baselineFile));
        instrumenter = new BaselineCollector(instrumenter);
        process.on('exit', function() {
          console.log('Saving baseline coverage at: ' + baselineFile);
          fs.writeFileSync(baselineFile, JSON.stringify(instrumenter.getCoverage()), 'utf8');
        });
      }
      file = path.resolve(cmdArgs[0]);
      stats = fs.statSync(file);
      if (stats.isDirectory()) {
        if (!output) {
          return callback(inputError.create('Need an output directory [-o <dir>] when input is a directory!'));
        }
        if (output === file) {
          return callback(inputError.create('Cannot instrument into the same directory/ file as input!'));
        }
        mkdirp.sync(output);
        filesFor({
          root: file,
          includes: includes,
          excludes: opts.x || iOpts.excludes(false),
          relative: true
        }, function(err, files) {
          if (err) {
            return callback(err);
          }
          processFiles(instrumenter, file, output, files, iOpts.extensions());
        });
      } else {
        if (output) {
          stream = fs.createWriteStream(output);
        } else {
          stream = process.stdout;
        }
        stream.write(instrumenter.instrumentSync(fs.readFileSync(file, 'utf8'), file));
        if (stream !== process.stdout) {
          stream.end();
        }
      }
    }
  });
  module.exports = InstrumentCommand;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4d", ["3e", "9", "46", "@node/path", "@node/fs", "39", "3a", "3b", "@node/util", "3c", "3d", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var nopt = $__require('3e'),
      Report = $__require('9'),
      Reporter = $__require('46'),
      path = $__require('@node/path'),
      fs = $__require('@node/fs'),
      Collector = $__require('39'),
      helpFormatter = $__require('3a'),
      formatOption = helpFormatter.formatOption,
      formatPara = helpFormatter.formatPara,
      filesFor = $__require('3b').filesFor,
      util = $__require('@node/util'),
      Command = $__require('3c'),
      configuration = $__require('3d');
  function ReportCommand() {
    Command.call(this);
  }
  ReportCommand.TYPE = 'report';
  util.inherits(ReportCommand, Command);
  function printDeprecationMessage(pat, fmt) {
    console.error('**********************************************************************');
    console.error('DEPRECATION WARNING! You are probably using the old format of the report command');
    console.error('This will stop working soon, see `istanbul help report` for the new command format');
    console.error('Assuming you meant: istanbul report --include=' + pat + ' ' + fmt);
    console.error('**********************************************************************');
  }
  Command.mix(ReportCommand, {
    synopsis: function() {
      return "writes reports for coverage JSON objects produced in a previous run";
    },
    usage: function() {
      console.error('\nUsage: ' + this.toolName() + ' ' + this.type() + ' <options> [ <format> ... ]\n\nOptions are:\n\n' + [formatOption('--config <path-to-config>', 'the configuration file to use, defaults to .istanbul.yml'), formatOption('--root <input-directory>', 'The input root directory for finding coverage files'), formatOption('--dir <report-directory>', 'The output directory where files will be written. This defaults to ./coverage/'), formatOption('--include <glob>', 'The fileset pattern to select one or more coverage files, defaults to **/coverage*.json'), formatOption('--verbose, -v', 'verbose mode')].join('\n\n'));
      console.error('\n');
      console.error('<format> is one of ');
      Report.getReportList().forEach(function(name) {
        console.error(formatOption(name, Report.create(name).synopsis()));
      });
      console.error("");
      console.error(formatPara(['Default format is lcov unless otherwise specified in the config file.', 'In addition you can tweak the file names for various reports using the config file.', 'Type `istanbul help config` to see what can be tweaked.'].join(' ')));
      console.error('\n');
    },
    run: function(args, callback) {
      var template = {
        config: path,
        root: path,
        dir: path,
        include: String,
        verbose: Boolean
      },
          opts = nopt(template, {v: '--verbose'}, args, 0),
          includePattern = opts.include || '**/coverage*.json',
          root,
          collector = new Collector(),
          config = configuration.loadFile(opts.config, {
            verbose: opts.verbose,
            reporting: {dir: opts.dir}
          }),
          formats = opts.argv.remain,
          reporter = new Reporter(config);
      if (formats.length === 2 && Report.getReportList().indexOf(formats[1]) < 0) {
        includePattern = formats[1];
        formats = [formats[0]];
        printDeprecationMessage(includePattern, formats[0]);
      }
      if (formats.length === 0) {
        formats = config.reporting.reports();
      }
      if (formats.length === 0) {
        formats = ['lcov'];
      }
      reporter.addAll(formats);
      root = opts.root || process.cwd();
      filesFor({
        root: root,
        includes: [includePattern]
      }, function(err, files) {
        if (err) {
          throw err;
        }
        files.forEach(function(file) {
          var coverageObject = JSON.parse(fs.readFileSync(file, 'utf8'));
          collector.add(coverageObject);
        });
        reporter.write(collector, false, function(err) {
          console.log('Done');
          return callback(err);
        });
      });
    }
  });
  module.exports = ReportCommand;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3e", ["@node/url", "@node/path", "@node/stream", "4e", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var debug = process.env.DEBUG_NOPT || process.env.NOPT_DEBUG ? function() {
    console.error.apply(console, arguments);
  } : function() {};
  var url = $__require('@node/url'),
      path = $__require('@node/path'),
      Stream = $__require('@node/stream').Stream,
      abbrev = $__require('4e');
  module.exports = exports = nopt;
  exports.clean = clean;
  exports.typeDefs = {
    String: {
      type: String,
      validate: validateString
    },
    Boolean: {
      type: Boolean,
      validate: validateBoolean
    },
    url: {
      type: url,
      validate: validateUrl
    },
    Number: {
      type: Number,
      validate: validateNumber
    },
    path: {
      type: path,
      validate: validatePath
    },
    Stream: {
      type: Stream,
      validate: validateStream
    },
    Date: {
      type: Date,
      validate: validateDate
    }
  };
  function nopt(types, shorthands, args, slice) {
    args = args || process.argv;
    types = types || {};
    shorthands = shorthands || {};
    if (typeof slice !== "number")
      slice = 2;
    debug(types, shorthands, args, slice);
    args = args.slice(slice);
    var data = {},
        key,
        remain = [],
        cooked = args,
        original = args.slice(0);
    parse(args, data, remain, types, shorthands);
    clean(data, types, exports.typeDefs);
    data.argv = {
      remain: remain,
      cooked: cooked,
      original: original
    };
    Object.defineProperty(data.argv, 'toString', {
      value: function() {
        return this.original.map(JSON.stringify).join(" ");
      },
      enumerable: false
    });
    return data;
  }
  function clean(data, types, typeDefs) {
    typeDefs = typeDefs || exports.typeDefs;
    var remove = {},
        typeDefault = [false, true, null, String, Array];
    Object.keys(data).forEach(function(k) {
      if (k === "argv")
        return;
      var val = data[k],
          isArray = Array.isArray(val),
          type = types[k];
      if (!isArray)
        val = [val];
      if (!type)
        type = typeDefault;
      if (type === Array)
        type = typeDefault.concat(Array);
      if (!Array.isArray(type))
        type = [type];
      debug("val=%j", val);
      debug("types=", type);
      val = val.map(function(val) {
        if (typeof val === "string") {
          debug("string %j", val);
          val = val.trim();
          if ((val === "null" && ~type.indexOf(null)) || (val === "true" && (~type.indexOf(true) || ~type.indexOf(Boolean))) || (val === "false" && (~type.indexOf(false) || ~type.indexOf(Boolean)))) {
            val = JSON.parse(val);
            debug("jsonable %j", val);
          } else if (~type.indexOf(Number) && !isNaN(val)) {
            debug("convert to number", val);
            val = +val;
          } else if (~type.indexOf(Date) && !isNaN(Date.parse(val))) {
            debug("convert to date", val);
            val = new Date(val);
          }
        }
        if (!types.hasOwnProperty(k)) {
          return val;
        }
        if (val === false && ~type.indexOf(null) && !(~type.indexOf(false) || ~type.indexOf(Boolean))) {
          val = null;
        }
        var d = {};
        d[k] = val;
        debug("prevalidated val", d, val, types[k]);
        if (!validate(d, k, val, types[k], typeDefs)) {
          if (exports.invalidHandler) {
            exports.invalidHandler(k, val, types[k], data);
          } else if (exports.invalidHandler !== false) {
            debug("invalid: " + k + "=" + val, types[k]);
          }
          return remove;
        }
        debug("validated val", d, val, types[k]);
        return d[k];
      }).filter(function(val) {
        return val !== remove;
      });
      if (!val.length)
        delete data[k];
      else if (isArray) {
        debug(isArray, data[k], val);
        data[k] = val;
      } else
        data[k] = val[0];
      debug("k=%s val=%j", k, val, data[k]);
    });
  }
  function validateString(data, k, val) {
    data[k] = String(val);
  }
  function validatePath(data, k, val) {
    if (val === true)
      return false;
    if (val === null)
      return true;
    val = String(val);
    var homePattern = process.platform === 'win32' ? /^~(\/|\\)/ : /^~\//;
    if (val.match(homePattern) && process.env.HOME) {
      val = path.resolve(process.env.HOME, val.substr(2));
    }
    data[k] = path.resolve(String(val));
    return true;
  }
  function validateNumber(data, k, val) {
    debug("validate Number %j %j %j", k, val, isNaN(val));
    if (isNaN(val))
      return false;
    data[k] = +val;
  }
  function validateDate(data, k, val) {
    debug("validate Date %j %j %j", k, val, Date.parse(val));
    var s = Date.parse(val);
    if (isNaN(s))
      return false;
    data[k] = new Date(val);
  }
  function validateBoolean(data, k, val) {
    if (val instanceof Boolean)
      val = val.valueOf();
    else if (typeof val === "string") {
      if (!isNaN(val))
        val = !!(+val);
      else if (val === "null" || val === "false")
        val = false;
      else
        val = true;
    } else
      val = !!val;
    data[k] = val;
  }
  function validateUrl(data, k, val) {
    val = url.parse(String(val));
    if (!val.host)
      return false;
    data[k] = val.href;
  }
  function validateStream(data, k, val) {
    if (!(val instanceof Stream))
      return false;
    data[k] = val;
  }
  function validate(data, k, val, type, typeDefs) {
    if (Array.isArray(type)) {
      for (var i = 0,
          l = type.length; i < l; i++) {
        if (type[i] === Array)
          continue;
        if (validate(data, k, val, type[i], typeDefs))
          return true;
      }
      delete data[k];
      return false;
    }
    if (type === Array)
      return true;
    if (type !== type) {
      debug("Poison NaN", k, val, type);
      delete data[k];
      return false;
    }
    if (val === type) {
      debug("Explicitly allowed %j", val);
      data[k] = val;
      return true;
    }
    var ok = false,
        types = Object.keys(typeDefs);
    for (var i = 0,
        l = types.length; i < l; i++) {
      debug("test type %j %j %j", k, val, types[i]);
      var t = typeDefs[types[i]];
      if (t && ((type && type.name && t.type && t.type.name) ? (type.name === t.type.name) : (type === t.type))) {
        var d = {};
        ok = false !== t.validate(d, k, val);
        val = d[k];
        if (ok) {
          data[k] = val;
          break;
        }
      }
    }
    debug("OK? %j (%j %j %j)", ok, k, val, types[i]);
    if (!ok)
      delete data[k];
    return ok;
  }
  function parse(args, data, remain, types, shorthands) {
    debug("parse", args, data, remain);
    var key = null,
        abbrevs = abbrev(Object.keys(types)),
        shortAbbr = abbrev(Object.keys(shorthands));
    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      debug("arg", arg);
      if (arg.match(/^-{2,}$/)) {
        remain.push.apply(remain, args.slice(i + 1));
        args[i] = "--";
        break;
      }
      var hadEq = false;
      if (arg.charAt(0) === "-" && arg.length > 1) {
        if (arg.indexOf("=") !== -1) {
          hadEq = true;
          var v = arg.split("=");
          arg = v.shift();
          v = v.join("=");
          args.splice.apply(args, [i, 1].concat([arg, v]));
        }
        var shRes = resolveShort(arg, shorthands, shortAbbr, abbrevs);
        debug("arg=%j shRes=%j", arg, shRes);
        if (shRes) {
          debug(arg, shRes);
          args.splice.apply(args, [i, 1].concat(shRes));
          if (arg !== shRes[0]) {
            i--;
            continue;
          }
        }
        arg = arg.replace(/^-+/, "");
        var no = null;
        while (arg.toLowerCase().indexOf("no-") === 0) {
          no = !no;
          arg = arg.substr(3);
        }
        if (abbrevs[arg])
          arg = abbrevs[arg];
        var isArray = types[arg] === Array || Array.isArray(types[arg]) && types[arg].indexOf(Array) !== -1;
        if (!types.hasOwnProperty(arg) && data.hasOwnProperty(arg)) {
          if (!Array.isArray(data[arg]))
            data[arg] = [data[arg]];
          isArray = true;
        }
        var val,
            la = args[i + 1];
        var isBool = typeof no === 'boolean' || types[arg] === Boolean || Array.isArray(types[arg]) && types[arg].indexOf(Boolean) !== -1 || (typeof types[arg] === 'undefined' && !hadEq) || (la === "false" && (types[arg] === null || Array.isArray(types[arg]) && ~types[arg].indexOf(null)));
        if (isBool) {
          val = !no;
          if (la === "true" || la === "false") {
            val = JSON.parse(la);
            la = null;
            if (no)
              val = !val;
            i++;
          }
          if (Array.isArray(types[arg]) && la) {
            if (~types[arg].indexOf(la)) {
              val = la;
              i++;
            } else if (la === "null" && ~types[arg].indexOf(null)) {
              val = null;
              i++;
            } else if (!la.match(/^-{2,}[^-]/) && !isNaN(la) && ~types[arg].indexOf(Number)) {
              val = +la;
              i++;
            } else if (!la.match(/^-[^-]/) && ~types[arg].indexOf(String)) {
              val = la;
              i++;
            }
          }
          if (isArray)
            (data[arg] = data[arg] || []).push(val);
          else
            data[arg] = val;
          continue;
        }
        if (types[arg] === String && la === undefined)
          la = "";
        if (la && la.match(/^-{2,}$/)) {
          la = undefined;
          i--;
        }
        val = la === undefined ? true : la;
        if (isArray)
          (data[arg] = data[arg] || []).push(val);
        else
          data[arg] = val;
        i++;
        continue;
      }
      remain.push(arg);
    }
  }
  function resolveShort(arg, shorthands, shortAbbr, abbrevs) {
    arg = arg.replace(/^-+/, '');
    if (abbrevs[arg] === arg)
      return null;
    if (shorthands[arg]) {
      if (shorthands[arg] && !Array.isArray(shorthands[arg]))
        shorthands[arg] = shorthands[arg].split(/\s+/);
      return shorthands[arg];
    }
    var singles = shorthands.___singles;
    if (!singles) {
      singles = Object.keys(shorthands).filter(function(s) {
        return s.length === 1;
      }).reduce(function(l, r) {
        l[r] = true;
        return l;
      }, {});
      shorthands.___singles = singles;
      debug('shorthand singles', singles);
    }
    var chrs = arg.split("").filter(function(c) {
      return singles[c];
    });
    if (chrs.join("") === arg)
      return chrs.map(function(c) {
        return shorthands[c];
      }).reduce(function(l, r) {
        return l.concat(r);
      }, []);
    if (abbrevs[arg] && !shorthands[arg])
      return null;
    if (shortAbbr[arg])
      arg = shortAbbr[arg];
    if (shorthands[arg] && !Array.isArray(shorthands[arg]))
      shorthands[arg] = shorthands[arg].split(/\s+/);
    return shorthands[arg];
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4f", ["@node/fs", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = isexe;
  isexe.sync = sync;
  var fs = $__require('@node/fs');
  function checkPathExt(path, options) {
    var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;
    if (!pathext) {
      return true;
    }
    pathext = pathext.split(';');
    if (pathext.indexOf('') !== -1) {
      return true;
    }
    for (var i = 0; i < pathext.length; i++) {
      var p = pathext[i].toLowerCase();
      if (p && path.substr(-p.length).toLowerCase() === p) {
        return true;
      }
    }
    return false;
  }
  function isexe(path, options, cb) {
    fs.stat(path, function(er, st) {
      cb(er, er ? false : checkPathExt(path, options));
    });
  }
  function sync(path, options) {
    fs.statSync(path);
    return checkPathExt(path, options);
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("50", ["@node/fs", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = isexe;
  isexe.sync = sync;
  var fs = $__require('@node/fs');
  function isexe(path, _, cb) {
    fs.access(path, fs.X_OK, function(er) {
      cb(er, !er);
    });
  }
  function sync(path, _) {
    fs.accessSync(path, fs.X_OK);
    return true;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("51", ["@node/fs", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = isexe;
  isexe.sync = sync;
  var fs = $__require('@node/fs');
  function isexe(path, options, cb) {
    fs.stat(path, function(er, st) {
      cb(er, er ? false : checkMode(st, options));
    });
  }
  function sync(path, options) {
    return checkMode(fs.statSync(path), options);
  }
  function checkMode(stat, options) {
    var mod = stat.mode;
    var uid = stat.uid;
    var gid = stat.gid;
    var myUid = options.uid !== undefined ? options.uid : process.getuid && process.getuid();
    var myGid = options.gid !== undefined ? options.gid : process.getgid && process.getgid();
    var u = parseInt('100', 8);
    var g = parseInt('010', 8);
    var o = parseInt('001', 8);
    var ug = u | g;
    var ret = (mod & o) || (mod & g) && gid === myGid || (mod & u) && uid === myUid || (mod & ug) && myUid === 0;
    return ret;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("52", ["@node/fs", "4f", "50", "51", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var fs = $__require('@node/fs');
  var core;
  if (process.platform === 'win32' || global.TESTING_WINDOWS) {
    core = $__require('4f');
  } else if (typeof fs.access === 'function') {
    core = $__require('50');
  } else {
    core = $__require('51');
  }
  module.exports = isexe;
  isexe.sync = sync;
  function isexe(path, options, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = {};
    }
    if (!cb) {
      if (typeof Promise !== 'function') {
        throw new TypeError('callback not provided');
      }
      return new Promise(function(resolve, reject) {
        isexe(path, options || {}, function(er, is) {
          if (er) {
            reject(er);
          } else {
            resolve(is);
          }
        });
      });
    }
    core(path, options || {}, function(er, is) {
      if (er) {
        if (er.code === 'EACCES' || options && options.ignoreErrors) {
          er = null;
          is = false;
        }
      }
      cb(er, is);
    });
  }
  function sync(path, options) {
    try {
      return core.sync(path, options || {});
    } catch (er) {
      if (options && options.ignoreErrors || er.code === 'EACCES') {
        return false;
      } else {
        throw er;
      }
    }
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("53", ["5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function isRelative(filepath) {
    if (typeof filepath !== 'string') {
      throw new Error('isRelative expects a string.');
    }
    return !/^([a-z]+:)?[\\\/]/i.test(filepath);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("54", ["53", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isRelative = $__require('53');
  module.exports = function isAbsolute(filepath) {
    if ('/' === filepath[0]) {
      return true;
    }
    if (':' === filepath[1] && '\\' === filepath[2]) {
      return true;
    }
    if ('\\\\' == filepath.substring(0, 2)) {
      return true;
    }
    if (!isRelative(filepath)) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("55", ["@node/path", "52", "@node/fs", "54", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = which;
  which.sync = whichSync;
  var isWindows = process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';
  var path = $__require('@node/path');
  var COLON = isWindows ? ';' : ':';
  var isexe = $__require('52');
  var fs = $__require('@node/fs');
  var isAbsolute = $__require('54');
  function getPathInfo(cmd, opt) {
    var colon = opt.colon || COLON;
    var pathEnv = opt.path || process.env.Path || process.env.PATH || '';
    var pathExt = [''];
    pathEnv = pathEnv.split(colon);
    var pathExtExe = '';
    if (isWindows) {
      pathEnv.unshift(process.cwd());
      pathExtExe = (opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM');
      pathExt = pathExtExe.split(colon);
      if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')
        pathExt.unshift('');
    }
    if (isAbsolute(cmd))
      pathEnv = [''];
    return {
      env: pathEnv,
      ext: pathExt,
      extExe: pathExtExe
    };
  }
  function which(cmd, opt, cb) {
    if (typeof opt === 'function') {
      cb = opt;
      opt = {};
    }
    var info = getPathInfo(cmd, opt);
    var pathEnv = info.env;
    var pathExt = info.ext;
    var pathExtExe = info.extExe;
    var found = [];
    ;
    (function F(i, l) {
      if (i === l) {
        if (opt.all && found.length)
          return cb(null, found);
        else
          return cb(new Error('not found: ' + cmd));
      }
      var pathPart = pathEnv[i];
      if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"')
        pathPart = pathPart.slice(1, -1);
      var p = path.resolve(pathPart, cmd);
      ;
      (function E(ii, ll) {
        if (ii === ll)
          return F(i + 1, l);
        var ext = pathExt[ii];
        isexe(p + ext, {pathExt: pathExtExe}, function(er, is) {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return cb(null, p + ext);
          }
          return E(ii + 1, ll);
        });
      })(0, pathExt.length);
    })(0, pathEnv.length);
  }
  function whichSync(cmd, opt) {
    opt = opt || {};
    var info = getPathInfo(cmd, opt);
    var pathEnv = info.env;
    var pathExt = info.ext;
    var pathExtExe = info.extExe;
    var found = [];
    for (var i = 0,
        l = pathEnv.length; i < l; i++) {
      var pathPart = pathEnv[i];
      if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"')
        pathPart = pathPart.slice(1, -1);
      var p = path.join(pathPart, cmd);
      for (var j = 0,
          ll = pathExt.length; j < ll; j++) {
        var cur = p + pathExt[j];
        var is;
        try {
          is = isexe.sync(cur, {pathExt: pathExtExe});
          if (is) {
            if (opt.all)
              found.push(cur);
            else
              return cur;
          }
        } catch (ex) {}
      }
    }
    if (opt.all && found.length)
      return found;
    throw new Error('not found: ' + cmd);
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7", ["@node/path", "@node/fs", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path');
  var fs = $__require('@node/fs');
  var _0777 = parseInt('0777', 8);
  module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;
  function mkdirP(p, opts, f, made) {
    if (typeof opts === 'function') {
      f = opts;
      opts = {};
    } else if (!opts || typeof opts !== 'object') {
      opts = {mode: opts};
    }
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    if (mode === undefined) {
      mode = _0777 & (~process.umask());
    }
    if (!made)
      made = null;
    var cb = f || function() {};
    p = path.resolve(p);
    xfs.mkdir(p, mode, function(er) {
      if (!er) {
        made = made || p;
        return cb(null, made);
      }
      switch (er.code) {
        case 'ENOENT':
          mkdirP(path.dirname(p), opts, function(er, made) {
            if (er)
              cb(er, made);
            else
              mkdirP(p, opts, cb, made);
          });
          break;
        default:
          xfs.stat(p, function(er2, stat) {
            if (er2 || !stat.isDirectory())
              cb(er, made);
            else
              cb(null, made);
          });
          break;
      }
    });
  }
  mkdirP.sync = function sync(p, opts, made) {
    if (!opts || typeof opts !== 'object') {
      opts = {mode: opts};
    }
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    if (mode === undefined) {
      mode = _0777 & (~process.umask());
    }
    if (!made)
      made = null;
    p = path.resolve(p);
    try {
      xfs.mkdirSync(p, mode);
      made = made || p;
    } catch (err0) {
      switch (err0.code) {
        case 'ENOENT':
          made = sync(path.dirname(p), opts, made);
          sync(p, opts, made);
          break;
        default:
          var stat;
          try {
            stat = xfs.statSync(p);
          } catch (err1) {
            throw err0;
          }
          if (!stat.isDirectory())
            throw err0;
          break;
      }
    }
    return made;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("42", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function() {
    var async = {};
    function noop() {}
    function identity(v) {
      return v;
    }
    function toBool(v) {
      return !!v;
    }
    function notId(v) {
      return !v;
    }
    var previous_async;
    var root = typeof self === 'object' && self.self === self && self || typeof global === 'object' && global.global === global && global || this;
    if (root != null) {
      previous_async = root.async;
    }
    async.noConflict = function() {
      root.async = previous_async;
      return async;
    };
    function only_once(fn) {
      return function() {
        if (fn === null)
          throw new Error("Callback was already called.");
        fn.apply(this, arguments);
        fn = null;
      };
    }
    function _once(fn) {
      return function() {
        if (fn === null)
          return;
        fn.apply(this, arguments);
        fn = null;
      };
    }
    var _toString = Object.prototype.toString;
    var _isArray = Array.isArray || function(obj) {
      return _toString.call(obj) === '[object Array]';
    };
    var _isObject = function(obj) {
      var type = typeof obj;
      return type === 'function' || type === 'object' && !!obj;
    };
    function _isArrayLike(arr) {
      return _isArray(arr) || (typeof arr.length === "number" && arr.length >= 0 && arr.length % 1 === 0);
    }
    function _arrayEach(arr, iterator) {
      var index = -1,
          length = arr.length;
      while (++index < length) {
        iterator(arr[index], index, arr);
      }
    }
    function _map(arr, iterator) {
      var index = -1,
          length = arr.length,
          result = Array(length);
      while (++index < length) {
        result[index] = iterator(arr[index], index, arr);
      }
      return result;
    }
    function _range(count) {
      return _map(Array(count), function(v, i) {
        return i;
      });
    }
    function _reduce(arr, iterator, memo) {
      _arrayEach(arr, function(x, i, a) {
        memo = iterator(memo, x, i, a);
      });
      return memo;
    }
    function _forEachOf(object, iterator) {
      _arrayEach(_keys(object), function(key) {
        iterator(object[key], key);
      });
    }
    function _indexOf(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item)
          return i;
      }
      return -1;
    }
    var _keys = Object.keys || function(obj) {
      var keys = [];
      for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
          keys.push(k);
        }
      }
      return keys;
    };
    function _keyIterator(coll) {
      var i = -1;
      var len;
      var keys;
      if (_isArrayLike(coll)) {
        len = coll.length;
        return function next() {
          i++;
          return i < len ? i : null;
        };
      } else {
        keys = _keys(coll);
        len = keys.length;
        return function next() {
          i++;
          return i < len ? keys[i] : null;
        };
      }
    }
    function _restParam(func, startIndex) {
      startIndex = startIndex == null ? func.length - 1 : +startIndex;
      return function() {
        var length = Math.max(arguments.length - startIndex, 0);
        var rest = Array(length);
        for (var index = 0; index < length; index++) {
          rest[index] = arguments[index + startIndex];
        }
        switch (startIndex) {
          case 0:
            return func.call(this, rest);
          case 1:
            return func.call(this, arguments[0], rest);
        }
      };
    }
    function _withoutIndex(iterator) {
      return function(value, index, callback) {
        return iterator(value, callback);
      };
    }
    var _setImmediate = typeof setImmediate === 'function' && setImmediate;
    var _delay = _setImmediate ? function(fn) {
      _setImmediate(fn);
    } : function(fn) {
      setTimeout(fn, 0);
    };
    if (typeof process === 'object' && typeof process.nextTick === 'function') {
      async.nextTick = process.nextTick;
    } else {
      async.nextTick = _delay;
    }
    async.setImmediate = _setImmediate ? _delay : async.nextTick;
    async.forEach = async.each = function(arr, iterator, callback) {
      return async.eachOf(arr, _withoutIndex(iterator), callback);
    };
    async.forEachSeries = async.eachSeries = function(arr, iterator, callback) {
      return async.eachOfSeries(arr, _withoutIndex(iterator), callback);
    };
    async.forEachLimit = async.eachLimit = function(arr, limit, iterator, callback) {
      return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
    };
    async.forEachOf = async.eachOf = function(object, iterator, callback) {
      callback = _once(callback || noop);
      object = object || [];
      var iter = _keyIterator(object);
      var key,
          completed = 0;
      while ((key = iter()) != null) {
        completed += 1;
        iterator(object[key], key, only_once(done));
      }
      if (completed === 0)
        callback(null);
      function done(err) {
        completed--;
        if (err) {
          callback(err);
        } else if (key === null && completed <= 0) {
          callback(null);
        }
      }
    };
    async.forEachOfSeries = async.eachOfSeries = function(obj, iterator, callback) {
      callback = _once(callback || noop);
      obj = obj || [];
      var nextKey = _keyIterator(obj);
      var key = nextKey();
      function iterate() {
        var sync = true;
        if (key === null) {
          return callback(null);
        }
        iterator(obj[key], key, only_once(function(err) {
          if (err) {
            callback(err);
          } else {
            key = nextKey();
            if (key === null) {
              return callback(null);
            } else {
              if (sync) {
                async.setImmediate(iterate);
              } else {
                iterate();
              }
            }
          }
        }));
        sync = false;
      }
      iterate();
    };
    async.forEachOfLimit = async.eachOfLimit = function(obj, limit, iterator, callback) {
      _eachOfLimit(limit)(obj, iterator, callback);
    };
    function _eachOfLimit(limit) {
      return function(obj, iterator, callback) {
        callback = _once(callback || noop);
        obj = obj || [];
        var nextKey = _keyIterator(obj);
        if (limit <= 0) {
          return callback(null);
        }
        var done = false;
        var running = 0;
        var errored = false;
        (function replenish() {
          if (done && running <= 0) {
            return callback(null);
          }
          while (running < limit && !errored) {
            var key = nextKey();
            if (key === null) {
              done = true;
              if (running <= 0) {
                callback(null);
              }
              return;
            }
            running += 1;
            iterator(obj[key], key, only_once(function(err) {
              running -= 1;
              if (err) {
                callback(err);
                errored = true;
              } else {
                replenish();
              }
            }));
          }
        })();
      };
    }
    function doParallel(fn) {
      return function(obj, iterator, callback) {
        return fn(async.eachOf, obj, iterator, callback);
      };
    }
    function doParallelLimit(fn) {
      return function(obj, limit, iterator, callback) {
        return fn(_eachOfLimit(limit), obj, iterator, callback);
      };
    }
    function doSeries(fn) {
      return function(obj, iterator, callback) {
        return fn(async.eachOfSeries, obj, iterator, callback);
      };
    }
    function _asyncMap(eachfn, arr, iterator, callback) {
      callback = _once(callback || noop);
      arr = arr || [];
      var results = _isArrayLike(arr) ? [] : {};
      eachfn(arr, function(value, index, callback) {
        iterator(value, function(err, v) {
          results[index] = v;
          callback(err);
        });
      }, function(err) {
        callback(err, results);
      });
    }
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = doParallelLimit(_asyncMap);
    async.inject = async.foldl = async.reduce = function(arr, memo, iterator, callback) {
      async.eachOfSeries(arr, function(x, i, callback) {
        iterator(memo, x, function(err, v) {
          memo = v;
          callback(err);
        });
      }, function(err) {
        callback(err, memo);
      });
    };
    async.foldr = async.reduceRight = function(arr, memo, iterator, callback) {
      var reversed = _map(arr, identity).reverse();
      async.reduce(reversed, memo, iterator, callback);
    };
    async.transform = function(arr, memo, iterator, callback) {
      if (arguments.length === 3) {
        callback = iterator;
        iterator = memo;
        memo = _isArray(arr) ? [] : {};
      }
      async.eachOf(arr, function(v, k, cb) {
        iterator(memo, v, k, cb);
      }, function(err) {
        callback(err, memo);
      });
    };
    function _filter(eachfn, arr, iterator, callback) {
      var results = [];
      eachfn(arr, function(x, index, callback) {
        iterator(x, function(v) {
          if (v) {
            results.push({
              index: index,
              value: x
            });
          }
          callback();
        });
      }, function() {
        callback(_map(results.sort(function(a, b) {
          return a.index - b.index;
        }), function(x) {
          return x.value;
        }));
      });
    }
    async.select = async.filter = doParallel(_filter);
    async.selectLimit = async.filterLimit = doParallelLimit(_filter);
    async.selectSeries = async.filterSeries = doSeries(_filter);
    function _reject(eachfn, arr, iterator, callback) {
      _filter(eachfn, arr, function(value, cb) {
        iterator(value, function(v) {
          cb(!v);
        });
      }, callback);
    }
    async.reject = doParallel(_reject);
    async.rejectLimit = doParallelLimit(_reject);
    async.rejectSeries = doSeries(_reject);
    function _createTester(eachfn, check, getResult) {
      return function(arr, limit, iterator, cb) {
        function done() {
          if (cb)
            cb(getResult(false, void 0));
        }
        function iteratee(x, _, callback) {
          if (!cb)
            return callback();
          iterator(x, function(v) {
            if (cb && check(v)) {
              cb(getResult(true, x));
              cb = iterator = false;
            }
            callback();
          });
        }
        if (arguments.length > 3) {
          eachfn(arr, limit, iteratee, done);
        } else {
          cb = iterator;
          iterator = limit;
          eachfn(arr, iteratee, done);
        }
      };
    }
    async.any = async.some = _createTester(async.eachOf, toBool, identity);
    async.someLimit = _createTester(async.eachOfLimit, toBool, identity);
    async.all = async.every = _createTester(async.eachOf, notId, notId);
    async.everyLimit = _createTester(async.eachOfLimit, notId, notId);
    function _findGetResult(v, x) {
      return x;
    }
    async.detect = _createTester(async.eachOf, identity, _findGetResult);
    async.detectSeries = _createTester(async.eachOfSeries, identity, _findGetResult);
    async.detectLimit = _createTester(async.eachOfLimit, identity, _findGetResult);
    async.sortBy = function(arr, iterator, callback) {
      async.map(arr, function(x, callback) {
        iterator(x, function(err, criteria) {
          if (err) {
            callback(err);
          } else {
            callback(null, {
              value: x,
              criteria: criteria
            });
          }
        });
      }, function(err, results) {
        if (err) {
          return callback(err);
        } else {
          callback(null, _map(results.sort(comparator), function(x) {
            return x.value;
          }));
        }
      });
      function comparator(left, right) {
        var a = left.criteria,
            b = right.criteria;
        return a < b ? -1 : a > b ? 1 : 0;
      }
    };
    async.auto = function(tasks, concurrency, callback) {
      if (typeof arguments[1] === 'function') {
        callback = concurrency;
        concurrency = null;
      }
      callback = _once(callback || noop);
      var keys = _keys(tasks);
      var remainingTasks = keys.length;
      if (!remainingTasks) {
        return callback(null);
      }
      if (!concurrency) {
        concurrency = remainingTasks;
      }
      var results = {};
      var runningTasks = 0;
      var hasError = false;
      var listeners = [];
      function addListener(fn) {
        listeners.unshift(fn);
      }
      function removeListener(fn) {
        var idx = _indexOf(listeners, fn);
        if (idx >= 0)
          listeners.splice(idx, 1);
      }
      function taskComplete() {
        remainingTasks--;
        _arrayEach(listeners.slice(0), function(fn) {
          fn();
        });
      }
      addListener(function() {
        if (!remainingTasks) {
          callback(null, results);
        }
      });
      _arrayEach(keys, function(k) {
        if (hasError)
          return;
        var task = _isArray(tasks[k]) ? tasks[k] : [tasks[k]];
        var taskCallback = _restParam(function(err, args) {
          runningTasks--;
          if (args.length <= 1) {
            args = args[0];
          }
          if (err) {
            var safeResults = {};
            _forEachOf(results, function(val, rkey) {
              safeResults[rkey] = val;
            });
            safeResults[k] = args;
            hasError = true;
            callback(err, safeResults);
          } else {
            results[k] = args;
            async.setImmediate(taskComplete);
          }
        });
        var requires = task.slice(0, task.length - 1);
        var len = requires.length;
        var dep;
        while (len--) {
          if (!(dep = tasks[requires[len]])) {
            throw new Error('Has nonexistent dependency in ' + requires.join(', '));
          }
          if (_isArray(dep) && _indexOf(dep, k) >= 0) {
            throw new Error('Has cyclic dependencies');
          }
        }
        function ready() {
          return runningTasks < concurrency && _reduce(requires, function(a, x) {
            return (a && results.hasOwnProperty(x));
          }, true) && !results.hasOwnProperty(k);
        }
        if (ready()) {
          runningTasks++;
          task[task.length - 1](taskCallback, results);
        } else {
          addListener(listener);
        }
        function listener() {
          if (ready()) {
            runningTasks++;
            removeListener(listener);
            task[task.length - 1](taskCallback, results);
          }
        }
      });
    };
    async.retry = function(times, task, callback) {
      var DEFAULT_TIMES = 5;
      var DEFAULT_INTERVAL = 0;
      var attempts = [];
      var opts = {
        times: DEFAULT_TIMES,
        interval: DEFAULT_INTERVAL
      };
      function parseTimes(acc, t) {
        if (typeof t === 'number') {
          acc.times = parseInt(t, 10) || DEFAULT_TIMES;
        } else if (typeof t === 'object') {
          acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
          acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
        } else {
          throw new Error('Unsupported argument type for \'times\': ' + typeof t);
        }
      }
      var length = arguments.length;
      if (length < 1 || length > 3) {
        throw new Error('Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)');
      } else if (length <= 2 && typeof times === 'function') {
        callback = task;
        task = times;
      }
      if (typeof times !== 'function') {
        parseTimes(opts, times);
      }
      opts.callback = callback;
      opts.task = task;
      function wrappedTask(wrappedCallback, wrappedResults) {
        function retryAttempt(task, finalAttempt) {
          return function(seriesCallback) {
            task(function(err, result) {
              seriesCallback(!err || finalAttempt, {
                err: err,
                result: result
              });
            }, wrappedResults);
          };
        }
        function retryInterval(interval) {
          return function(seriesCallback) {
            setTimeout(function() {
              seriesCallback(null);
            }, interval);
          };
        }
        while (opts.times) {
          var finalAttempt = !(opts.times -= 1);
          attempts.push(retryAttempt(opts.task, finalAttempt));
          if (!finalAttempt && opts.interval > 0) {
            attempts.push(retryInterval(opts.interval));
          }
        }
        async.series(attempts, function(done, data) {
          data = data[data.length - 1];
          (wrappedCallback || opts.callback)(data.err, data.result);
        });
      }
      return opts.callback ? wrappedTask() : wrappedTask;
    };
    async.waterfall = function(tasks, callback) {
      callback = _once(callback || noop);
      if (!_isArray(tasks)) {
        var err = new Error('First argument to waterfall must be an array of functions');
        return callback(err);
      }
      if (!tasks.length) {
        return callback();
      }
      function wrapIterator(iterator) {
        return _restParam(function(err, args) {
          if (err) {
            callback.apply(null, [err].concat(args));
          } else {
            var next = iterator.next();
            if (next) {
              args.push(wrapIterator(next));
            } else {
              args.push(callback);
            }
            ensureAsync(iterator).apply(null, args);
          }
        });
      }
      wrapIterator(async.iterator(tasks))();
    };
    function _parallel(eachfn, tasks, callback) {
      callback = callback || noop;
      var results = _isArrayLike(tasks) ? [] : {};
      eachfn(tasks, function(task, key, callback) {
        task(_restParam(function(err, args) {
          if (args.length <= 1) {
            args = args[0];
          }
          results[key] = args;
          callback(err);
        }));
      }, function(err) {
        callback(err, results);
      });
    }
    async.parallel = function(tasks, callback) {
      _parallel(async.eachOf, tasks, callback);
    };
    async.parallelLimit = function(tasks, limit, callback) {
      _parallel(_eachOfLimit(limit), tasks, callback);
    };
    async.series = function(tasks, callback) {
      _parallel(async.eachOfSeries, tasks, callback);
    };
    async.iterator = function(tasks) {
      function makeCallback(index) {
        function fn() {
          if (tasks.length) {
            tasks[index].apply(null, arguments);
          }
          return fn.next();
        }
        fn.next = function() {
          return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
        };
        return fn;
      }
      return makeCallback(0);
    };
    async.apply = _restParam(function(fn, args) {
      return _restParam(function(callArgs) {
        return fn.apply(null, args.concat(callArgs));
      });
    });
    function _concat(eachfn, arr, fn, callback) {
      var result = [];
      eachfn(arr, function(x, index, cb) {
        fn(x, function(err, y) {
          result = result.concat(y || []);
          cb(err);
        });
      }, function(err) {
        callback(err, result);
      });
    }
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);
    async.whilst = function(test, iterator, callback) {
      callback = callback || noop;
      if (test()) {
        var next = _restParam(function(err, args) {
          if (err) {
            callback(err);
          } else if (test.apply(this, args)) {
            iterator(next);
          } else {
            callback.apply(null, [null].concat(args));
          }
        });
        iterator(next);
      } else {
        callback(null);
      }
    };
    async.doWhilst = function(iterator, test, callback) {
      var calls = 0;
      return async.whilst(function() {
        return ++calls <= 1 || test.apply(this, arguments);
      }, iterator, callback);
    };
    async.until = function(test, iterator, callback) {
      return async.whilst(function() {
        return !test.apply(this, arguments);
      }, iterator, callback);
    };
    async.doUntil = function(iterator, test, callback) {
      return async.doWhilst(iterator, function() {
        return !test.apply(this, arguments);
      }, callback);
    };
    async.during = function(test, iterator, callback) {
      callback = callback || noop;
      var next = _restParam(function(err, args) {
        if (err) {
          callback(err);
        } else {
          args.push(check);
          test.apply(this, args);
        }
      });
      var check = function(err, truth) {
        if (err) {
          callback(err);
        } else if (truth) {
          iterator(next);
        } else {
          callback(null);
        }
      };
      test(check);
    };
    async.doDuring = function(iterator, test, callback) {
      var calls = 0;
      async.during(function(next) {
        if (calls++ < 1) {
          next(null, true);
        } else {
          test.apply(this, arguments);
        }
      }, iterator, callback);
    };
    function _queue(worker, concurrency, payload) {
      if (concurrency == null) {
        concurrency = 1;
      } else if (concurrency === 0) {
        throw new Error('Concurrency must not be zero');
      }
      function _insert(q, data, pos, callback) {
        if (callback != null && typeof callback !== "function") {
          throw new Error("task callback must be a function");
        }
        q.started = true;
        if (!_isArray(data)) {
          data = [data];
        }
        if (data.length === 0 && q.idle()) {
          return async.setImmediate(function() {
            q.drain();
          });
        }
        _arrayEach(data, function(task) {
          var item = {
            data: task,
            callback: callback || noop
          };
          if (pos) {
            q.tasks.unshift(item);
          } else {
            q.tasks.push(item);
          }
          if (q.tasks.length === q.concurrency) {
            q.saturated();
          }
        });
        async.setImmediate(q.process);
      }
      function _next(q, tasks) {
        return function() {
          workers -= 1;
          var removed = false;
          var args = arguments;
          _arrayEach(tasks, function(task) {
            _arrayEach(workersList, function(worker, index) {
              if (worker === task && !removed) {
                workersList.splice(index, 1);
                removed = true;
              }
            });
            task.callback.apply(task, args);
          });
          if (q.tasks.length + workers === 0) {
            q.drain();
          }
          q.process();
        };
      }
      var workers = 0;
      var workersList = [];
      var q = {
        tasks: [],
        concurrency: concurrency,
        payload: payload,
        saturated: noop,
        empty: noop,
        drain: noop,
        started: false,
        paused: false,
        push: function(data, callback) {
          _insert(q, data, false, callback);
        },
        kill: function() {
          q.drain = noop;
          q.tasks = [];
        },
        unshift: function(data, callback) {
          _insert(q, data, true, callback);
        },
        process: function() {
          while (!q.paused && workers < q.concurrency && q.tasks.length) {
            var tasks = q.payload ? q.tasks.splice(0, q.payload) : q.tasks.splice(0, q.tasks.length);
            var data = _map(tasks, function(task) {
              return task.data;
            });
            if (q.tasks.length === 0) {
              q.empty();
            }
            workers += 1;
            workersList.push(tasks[0]);
            var cb = only_once(_next(q, tasks));
            worker(data, cb);
          }
        },
        length: function() {
          return q.tasks.length;
        },
        running: function() {
          return workers;
        },
        workersList: function() {
          return workersList;
        },
        idle: function() {
          return q.tasks.length + workers === 0;
        },
        pause: function() {
          q.paused = true;
        },
        resume: function() {
          if (q.paused === false) {
            return;
          }
          q.paused = false;
          var resumeCount = Math.min(q.concurrency, q.tasks.length);
          for (var w = 1; w <= resumeCount; w++) {
            async.setImmediate(q.process);
          }
        }
      };
      return q;
    }
    async.queue = function(worker, concurrency) {
      var q = _queue(function(items, cb) {
        worker(items[0], cb);
      }, concurrency, 1);
      return q;
    };
    async.priorityQueue = function(worker, concurrency) {
      function _compareTasks(a, b) {
        return a.priority - b.priority;
      }
      function _binarySearch(sequence, item, compare) {
        var beg = -1,
            end = sequence.length - 1;
        while (beg < end) {
          var mid = beg + ((end - beg + 1) >>> 1);
          if (compare(item, sequence[mid]) >= 0) {
            beg = mid;
          } else {
            end = mid - 1;
          }
        }
        return beg;
      }
      function _insert(q, data, priority, callback) {
        if (callback != null && typeof callback !== "function") {
          throw new Error("task callback must be a function");
        }
        q.started = true;
        if (!_isArray(data)) {
          data = [data];
        }
        if (data.length === 0) {
          return async.setImmediate(function() {
            q.drain();
          });
        }
        _arrayEach(data, function(task) {
          var item = {
            data: task,
            priority: priority,
            callback: typeof callback === 'function' ? callback : noop
          };
          q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);
          if (q.tasks.length === q.concurrency) {
            q.saturated();
          }
          async.setImmediate(q.process);
        });
      }
      var q = async.queue(worker, concurrency);
      q.push = function(data, priority, callback) {
        _insert(q, data, priority, callback);
      };
      delete q.unshift;
      return q;
    };
    async.cargo = function(worker, payload) {
      return _queue(worker, 1, payload);
    };
    function _console_fn(name) {
      return _restParam(function(fn, args) {
        fn.apply(null, args.concat([_restParam(function(err, args) {
          if (typeof console === 'object') {
            if (err) {
              if (console.error) {
                console.error(err);
              }
            } else if (console[name]) {
              _arrayEach(args, function(x) {
                console[name](x);
              });
            }
          }
        })]));
      });
    }
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    async.memoize = function(fn, hasher) {
      var memo = {};
      var queues = {};
      var has = Object.prototype.hasOwnProperty;
      hasher = hasher || identity;
      var memoized = _restParam(function memoized(args) {
        var callback = args.pop();
        var key = hasher.apply(null, args);
        if (has.call(memo, key)) {
          async.setImmediate(function() {
            callback.apply(null, memo[key]);
          });
        } else if (has.call(queues, key)) {
          queues[key].push(callback);
        } else {
          queues[key] = [callback];
          fn.apply(null, args.concat([_restParam(function(args) {
            memo[key] = args;
            var q = queues[key];
            delete queues[key];
            for (var i = 0,
                l = q.length; i < l; i++) {
              q[i].apply(null, args);
            }
          })]));
        }
      });
      memoized.memo = memo;
      memoized.unmemoized = fn;
      return memoized;
    };
    async.unmemoize = function(fn) {
      return function() {
        return (fn.unmemoized || fn).apply(null, arguments);
      };
    };
    function _times(mapper) {
      return function(count, iterator, callback) {
        mapper(_range(count), iterator, callback);
      };
    }
    async.times = _times(async.map);
    async.timesSeries = _times(async.mapSeries);
    async.timesLimit = function(count, limit, iterator, callback) {
      return async.mapLimit(_range(count), limit, iterator, callback);
    };
    async.seq = function() {
      var fns = arguments;
      return _restParam(function(args) {
        var that = this;
        var callback = args[args.length - 1];
        if (typeof callback == 'function') {
          args.pop();
        } else {
          callback = noop;
        }
        async.reduce(fns, args, function(newargs, fn, cb) {
          fn.apply(that, newargs.concat([_restParam(function(err, nextargs) {
            cb(err, nextargs);
          })]));
        }, function(err, results) {
          callback.apply(that, [err].concat(results));
        });
      });
    };
    async.compose = function() {
      return async.seq.apply(null, Array.prototype.reverse.call(arguments));
    };
    function _applyEach(eachfn) {
      return _restParam(function(fns, args) {
        var go = _restParam(function(args) {
          var that = this;
          var callback = args.pop();
          return eachfn(fns, function(fn, _, cb) {
            fn.apply(that, args.concat([cb]));
          }, callback);
        });
        if (args.length) {
          return go.apply(this, args);
        } else {
          return go;
        }
      });
    }
    async.applyEach = _applyEach(async.eachOf);
    async.applyEachSeries = _applyEach(async.eachOfSeries);
    async.forever = function(fn, callback) {
      var done = only_once(callback || noop);
      var task = ensureAsync(fn);
      function next(err) {
        if (err) {
          return done(err);
        }
        task(next);
      }
      next();
    };
    function ensureAsync(fn) {
      return _restParam(function(args) {
        var callback = args.pop();
        args.push(function() {
          var innerArgs = arguments;
          if (sync) {
            async.setImmediate(function() {
              callback.apply(null, innerArgs);
            });
          } else {
            callback.apply(null, innerArgs);
          }
        });
        var sync = true;
        fn.apply(this, args);
        sync = false;
      });
    }
    async.ensureAsync = ensureAsync;
    async.constant = _restParam(function(values) {
      var args = [null].concat(values);
      return function(callback) {
        return callback.apply(this, args);
      };
    });
    async.wrapSync = async.asyncify = function asyncify(func) {
      return _restParam(function(args) {
        var callback = args.pop();
        var result;
        try {
          result = func.apply(this, args);
        } catch (e) {
          return callback(e);
        }
        if (_isObject(result) && typeof result.then === "function") {
          result.then(function(value) {
            callback(null, value);
          })["catch"](function(err) {
            callback(err.message ? err : new Error(err));
          });
        } else {
          callback(null, result);
        }
      });
    };
    if (typeof module === 'object' && module.exports) {
      module.exports = async;
    } else if (typeof define === 'function' && define.amd) {
      define([], function() {
        return async;
      });
    } else {
      root.async = async;
    }
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("56", ["@node/path", "57", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = minimatch;
  minimatch.Minimatch = Minimatch;
  var path = {sep: '/'};
  try {
    path = $__require('@node/path');
  } catch (er) {}
  var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
  var expand = $__require('57');
  var qmark = '[^/]';
  var star = qmark + '*?';
  var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?';
  var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?';
  var reSpecials = charSet('().*{}+?[]^$\\!');
  function charSet(s) {
    return s.split('').reduce(function(set, c) {
      set[c] = true;
      return set;
    }, {});
  }
  var slashSplit = /\/+/;
  minimatch.filter = filter;
  function filter(pattern, options) {
    options = options || {};
    return function(p, i, list) {
      return minimatch(p, pattern, options);
    };
  }
  function ext(a, b) {
    a = a || {};
    b = b || {};
    var t = {};
    Object.keys(b).forEach(function(k) {
      t[k] = b[k];
    });
    Object.keys(a).forEach(function(k) {
      t[k] = a[k];
    });
    return t;
  }
  minimatch.defaults = function(def) {
    if (!def || !Object.keys(def).length)
      return minimatch;
    var orig = minimatch;
    var m = function minimatch(p, pattern, options) {
      return orig.minimatch(p, pattern, ext(def, options));
    };
    m.Minimatch = function Minimatch(pattern, options) {
      return new orig.Minimatch(pattern, ext(def, options));
    };
    return m;
  };
  Minimatch.defaults = function(def) {
    if (!def || !Object.keys(def).length)
      return Minimatch;
    return minimatch.defaults(def).Minimatch;
  };
  function minimatch(p, pattern, options) {
    if (typeof pattern !== 'string') {
      throw new TypeError('glob pattern string required');
    }
    if (!options)
      options = {};
    if (!options.nocomment && pattern.charAt(0) === '#') {
      return false;
    }
    if (pattern.trim() === '')
      return p === '';
    return new Minimatch(pattern, options).match(p);
  }
  function Minimatch(pattern, options) {
    if (!(this instanceof Minimatch)) {
      return new Minimatch(pattern, options);
    }
    if (typeof pattern !== 'string') {
      throw new TypeError('glob pattern string required');
    }
    if (!options)
      options = {};
    pattern = pattern.trim();
    if (path.sep !== '/') {
      pattern = pattern.split(path.sep).join('/');
    }
    this.options = options;
    this.set = [];
    this.pattern = pattern;
    this.regexp = null;
    this.negate = false;
    this.comment = false;
    this.empty = false;
    this.make();
  }
  Minimatch.prototype.debug = function() {};
  Minimatch.prototype.make = make;
  function make() {
    if (this._made)
      return;
    var pattern = this.pattern;
    var options = this.options;
    if (!options.nocomment && pattern.charAt(0) === '#') {
      this.comment = true;
      return;
    }
    if (!pattern) {
      this.empty = true;
      return;
    }
    this.parseNegate();
    var set = this.globSet = this.braceExpand();
    if (options.debug)
      this.debug = console.error;
    this.debug(this.pattern, set);
    set = this.globParts = set.map(function(s) {
      return s.split(slashSplit);
    });
    this.debug(this.pattern, set);
    set = set.map(function(s, si, set) {
      return s.map(this.parse, this);
    }, this);
    this.debug(this.pattern, set);
    set = set.filter(function(s) {
      return s.indexOf(false) === -1;
    });
    this.debug(this.pattern, set);
    this.set = set;
  }
  Minimatch.prototype.parseNegate = parseNegate;
  function parseNegate() {
    var pattern = this.pattern;
    var negate = false;
    var options = this.options;
    var negateOffset = 0;
    if (options.nonegate)
      return;
    for (var i = 0,
        l = pattern.length; i < l && pattern.charAt(i) === '!'; i++) {
      negate = !negate;
      negateOffset++;
    }
    if (negateOffset)
      this.pattern = pattern.substr(negateOffset);
    this.negate = negate;
  }
  minimatch.braceExpand = function(pattern, options) {
    return braceExpand(pattern, options);
  };
  Minimatch.prototype.braceExpand = braceExpand;
  function braceExpand(pattern, options) {
    if (!options) {
      if (this instanceof Minimatch) {
        options = this.options;
      } else {
        options = {};
      }
    }
    pattern = typeof pattern === 'undefined' ? this.pattern : pattern;
    if (typeof pattern === 'undefined') {
      throw new Error('undefined pattern');
    }
    if (options.nobrace || !pattern.match(/\{.*\}/)) {
      return [pattern];
    }
    return expand(pattern);
  }
  Minimatch.prototype.parse = parse;
  var SUBPARSE = {};
  function parse(pattern, isSub) {
    var options = this.options;
    if (!options.noglobstar && pattern === '**')
      return GLOBSTAR;
    if (pattern === '')
      return '';
    var re = '';
    var hasMagic = !!options.nocase;
    var escaping = false;
    var patternListStack = [];
    var negativeLists = [];
    var plType;
    var stateChar;
    var inClass = false;
    var reClassStart = -1;
    var classStart = -1;
    var patternStart = pattern.charAt(0) === '.' ? '' : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))' : '(?!\\.)';
    var self = this;
    function clearStateChar() {
      if (stateChar) {
        switch (stateChar) {
          case '*':
            re += star;
            hasMagic = true;
            break;
          case '?':
            re += qmark;
            hasMagic = true;
            break;
          default:
            re += '\\' + stateChar;
            break;
        }
        self.debug('clearStateChar %j %j', stateChar, re);
        stateChar = false;
      }
    }
    for (var i = 0,
        len = pattern.length,
        c; (i < len) && (c = pattern.charAt(i)); i++) {
      this.debug('%s\t%s %s %j', pattern, i, re, c);
      if (escaping && reSpecials[c]) {
        re += '\\' + c;
        escaping = false;
        continue;
      }
      switch (c) {
        case '/':
          return false;
        case '\\':
          clearStateChar();
          escaping = true;
          continue;
        case '?':
        case '*':
        case '+':
        case '@':
        case '!':
          this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);
          if (inClass) {
            this.debug('  in class');
            if (c === '!' && i === classStart + 1)
              c = '^';
            re += c;
            continue;
          }
          self.debug('call clearStateChar %j', stateChar);
          clearStateChar();
          stateChar = c;
          if (options.noext)
            clearStateChar();
          continue;
        case '(':
          if (inClass) {
            re += '(';
            continue;
          }
          if (!stateChar) {
            re += '\\(';
            continue;
          }
          plType = stateChar;
          patternListStack.push({
            type: plType,
            start: i - 1,
            reStart: re.length
          });
          re += stateChar === '!' ? '(?:(?!(?:' : '(?:';
          this.debug('plType %j %j', stateChar, re);
          stateChar = false;
          continue;
        case ')':
          if (inClass || !patternListStack.length) {
            re += '\\)';
            continue;
          }
          clearStateChar();
          hasMagic = true;
          re += ')';
          var pl = patternListStack.pop();
          plType = pl.type;
          switch (plType) {
            case '!':
              negativeLists.push(pl);
              re += ')[^/]*?)';
              pl.reEnd = re.length;
              break;
            case '?':
            case '+':
            case '*':
              re += plType;
              break;
            case '@':
              break;
          }
          continue;
        case '|':
          if (inClass || !patternListStack.length || escaping) {
            re += '\\|';
            escaping = false;
            continue;
          }
          clearStateChar();
          re += '|';
          continue;
        case '[':
          clearStateChar();
          if (inClass) {
            re += '\\' + c;
            continue;
          }
          inClass = true;
          classStart = i;
          reClassStart = re.length;
          re += c;
          continue;
        case ']':
          if (i === classStart + 1 || !inClass) {
            re += '\\' + c;
            escaping = false;
            continue;
          }
          if (inClass) {
            var cs = pattern.substring(classStart + 1, i);
            try {
              RegExp('[' + cs + ']');
            } catch (er) {
              var sp = this.parse(cs, SUBPARSE);
              re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]';
              hasMagic = hasMagic || sp[1];
              inClass = false;
              continue;
            }
          }
          hasMagic = true;
          inClass = false;
          re += c;
          continue;
        default:
          clearStateChar();
          if (escaping) {
            escaping = false;
          } else if (reSpecials[c] && !(c === '^' && inClass)) {
            re += '\\';
          }
          re += c;
      }
    }
    if (inClass) {
      cs = pattern.substr(classStart + 1);
      sp = this.parse(cs, SUBPARSE);
      re = re.substr(0, reClassStart) + '\\[' + sp[0];
      hasMagic = hasMagic || sp[1];
    }
    for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
      var tail = re.slice(pl.reStart + 3);
      tail = tail.replace(/((?:\\{2})*)(\\?)\|/g, function(_, $1, $2) {
        if (!$2) {
          $2 = '\\';
        }
        return $1 + $1 + $2 + '|';
      });
      this.debug('tail=%j\n   %s', tail, tail);
      var t = pl.type === '*' ? star : pl.type === '?' ? qmark : '\\' + pl.type;
      hasMagic = true;
      re = re.slice(0, pl.reStart) + t + '\\(' + tail;
    }
    clearStateChar();
    if (escaping) {
      re += '\\\\';
    }
    var addPatternStart = false;
    switch (re.charAt(0)) {
      case '.':
      case '[':
      case '(':
        addPatternStart = true;
    }
    for (var n = negativeLists.length - 1; n > -1; n--) {
      var nl = negativeLists[n];
      var nlBefore = re.slice(0, nl.reStart);
      var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
      var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
      var nlAfter = re.slice(nl.reEnd);
      nlLast += nlAfter;
      var openParensBefore = nlBefore.split('(').length - 1;
      var cleanAfter = nlAfter;
      for (i = 0; i < openParensBefore; i++) {
        cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
      }
      nlAfter = cleanAfter;
      var dollar = '';
      if (nlAfter === '' && isSub !== SUBPARSE) {
        dollar = '$';
      }
      var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
      re = newRe;
    }
    if (re !== '' && hasMagic) {
      re = '(?=.)' + re;
    }
    if (addPatternStart) {
      re = patternStart + re;
    }
    if (isSub === SUBPARSE) {
      return [re, hasMagic];
    }
    if (!hasMagic) {
      return globUnescape(pattern);
    }
    var flags = options.nocase ? 'i' : '';
    var regExp = new RegExp('^' + re + '$', flags);
    regExp._glob = pattern;
    regExp._src = re;
    return regExp;
  }
  minimatch.makeRe = function(pattern, options) {
    return new Minimatch(pattern, options || {}).makeRe();
  };
  Minimatch.prototype.makeRe = makeRe;
  function makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    var set = this.set;
    if (!set.length) {
      this.regexp = false;
      return this.regexp;
    }
    var options = this.options;
    var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
    var flags = options.nocase ? 'i' : '';
    var re = set.map(function(pattern) {
      return pattern.map(function(p) {
        return (p === GLOBSTAR) ? twoStar : (typeof p === 'string') ? regExpEscape(p) : p._src;
      }).join('\\\/');
    }).join('|');
    re = '^(?:' + re + ')$';
    if (this.negate)
      re = '^(?!' + re + ').*$';
    try {
      this.regexp = new RegExp(re, flags);
    } catch (ex) {
      this.regexp = false;
    }
    return this.regexp;
  }
  minimatch.match = function(list, pattern, options) {
    options = options || {};
    var mm = new Minimatch(pattern, options);
    list = list.filter(function(f) {
      return mm.match(f);
    });
    if (mm.options.nonull && !list.length) {
      list.push(pattern);
    }
    return list;
  };
  Minimatch.prototype.match = match;
  function match(f, partial) {
    this.debug('match', f, this.pattern);
    if (this.comment)
      return false;
    if (this.empty)
      return f === '';
    if (f === '/' && partial)
      return true;
    var options = this.options;
    if (path.sep !== '/') {
      f = f.split(path.sep).join('/');
    }
    f = f.split(slashSplit);
    this.debug(this.pattern, 'split', f);
    var set = this.set;
    this.debug(this.pattern, 'set', set);
    var filename;
    var i;
    for (i = f.length - 1; i >= 0; i--) {
      filename = f[i];
      if (filename)
        break;
    }
    for (i = 0; i < set.length; i++) {
      var pattern = set[i];
      var file = f;
      if (options.matchBase && pattern.length === 1) {
        file = [filename];
      }
      var hit = this.matchOne(file, pattern, partial);
      if (hit) {
        if (options.flipNegate)
          return true;
        return !this.negate;
      }
    }
    if (options.flipNegate)
      return false;
    return this.negate;
  }
  Minimatch.prototype.matchOne = function(file, pattern, partial) {
    var options = this.options;
    this.debug('matchOne', {
      'this': this,
      file: file,
      pattern: pattern
    });
    this.debug('matchOne', file.length, pattern.length);
    for (var fi = 0,
        pi = 0,
        fl = file.length,
        pl = pattern.length; (fi < fl) && (pi < pl); fi++, pi++) {
      this.debug('matchOne loop');
      var p = pattern[pi];
      var f = file[fi];
      this.debug(pattern, p, f);
      if (p === false)
        return false;
      if (p === GLOBSTAR) {
        this.debug('GLOBSTAR', [pattern, p, f]);
        var fr = fi;
        var pr = pi + 1;
        if (pr === pl) {
          this.debug('** at the end');
          for (; fi < fl; fi++) {
            if (file[fi] === '.' || file[fi] === '..' || (!options.dot && file[fi].charAt(0) === '.'))
              return false;
          }
          return true;
        }
        while (fr < fl) {
          var swallowee = file[fr];
          this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);
          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
            this.debug('globstar found match!', fr, fl, swallowee);
            return true;
          } else {
            if (swallowee === '.' || swallowee === '..' || (!options.dot && swallowee.charAt(0) === '.')) {
              this.debug('dot detected!', file, fr, pattern, pr);
              break;
            }
            this.debug('globstar swallow a segment, and continue');
            fr++;
          }
        }
        if (partial) {
          this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
          if (fr === fl)
            return true;
        }
        return false;
      }
      var hit;
      if (typeof p === 'string') {
        if (options.nocase) {
          hit = f.toLowerCase() === p.toLowerCase();
        } else {
          hit = f === p;
        }
        this.debug('string match', p, f, hit);
      } else {
        hit = f.match(p);
        this.debug('pattern match', p, f, hit);
      }
      if (!hit)
        return false;
    }
    if (fi === fl && pi === pl) {
      return true;
    } else if (fi === fl) {
      return partial;
    } else if (pi === pl) {
      var emptyFileEnd = (fi === fl - 1) && (file[fi] === '');
      return emptyFileEnd;
    }
    throw new Error('wtf?');
  };
  function globUnescape(s) {
    return s.replace(/\\(.)/g, '$1');
  }
  function regExpEscape(s) {
    return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("58", ["@node/util", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('@node/util').inherits;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("59", ["@node/fs", "5c", "5a", "@node/util", "@node/path", "@node/assert", "5d", "5b", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = globSync;
  globSync.GlobSync = GlobSync;
  var fs = $__require('@node/fs');
  var minimatch = $__require('5c');
  var Minimatch = minimatch.Minimatch;
  var Glob = $__require('5a').Glob;
  var util = $__require('@node/util');
  var path = $__require('@node/path');
  var assert = $__require('@node/assert');
  var isAbsolute = $__require('5d');
  var common = $__require('5b');
  var alphasort = common.alphasort;
  var alphasorti = common.alphasorti;
  var setopts = common.setopts;
  var ownProp = common.ownProp;
  var childrenIgnored = common.childrenIgnored;
  function globSync(pattern, options) {
    if (typeof options === 'function' || arguments.length === 3)
      throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
    return new GlobSync(pattern, options).found;
  }
  function GlobSync(pattern, options) {
    if (!pattern)
      throw new Error('must provide pattern');
    if (typeof options === 'function' || arguments.length === 3)
      throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
    if (!(this instanceof GlobSync))
      return new GlobSync(pattern, options);
    setopts(this, pattern, options);
    if (this.noprocess)
      return this;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    for (var i = 0; i < n; i++) {
      this._process(this.minimatch.set[i], i, false);
    }
    this._finish();
  }
  GlobSync.prototype._finish = function() {
    assert(this instanceof GlobSync);
    if (this.realpath) {
      var self = this;
      this.matches.forEach(function(matchset, index) {
        var set = self.matches[index] = Object.create(null);
        for (var p in matchset) {
          try {
            p = self._makeAbs(p);
            var real = fs.realpathSync(p, self.realpathCache);
            set[real] = true;
          } catch (er) {
            if (er.syscall === 'stat')
              set[self._makeAbs(p)] = true;
            else
              throw er;
          }
        }
      });
    }
    common.finish(this);
  };
  GlobSync.prototype._process = function(pattern, index, inGlobStar) {
    assert(this instanceof GlobSync);
    var n = 0;
    while (typeof pattern[n] === 'string') {
      n++;
    }
    var prefix;
    switch (n) {
      case pattern.length:
        this._processSimple(pattern.join('/'), index);
        return;
      case 0:
        prefix = null;
        break;
      default:
        prefix = pattern.slice(0, n).join('/');
        break;
    }
    var remain = pattern.slice(n);
    var read;
    if (prefix === null)
      read = '.';
    else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
      if (!prefix || !isAbsolute(prefix))
        prefix = '/' + prefix;
      read = prefix;
    } else
      read = prefix;
    var abs = this._makeAbs(read);
    if (childrenIgnored(this, read))
      return;
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar)
      this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
    else
      this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
  };
  GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    if (!entries)
      return;
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === '.';
    var matchedEntries = [];
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (e.charAt(0) !== '.' || dotOk) {
        var m;
        if (negate && !prefix) {
          m = !e.match(pn);
        } else {
          m = e.match(pn);
        }
        if (m)
          matchedEntries.push(e);
      }
    }
    var len = matchedEntries.length;
    if (len === 0)
      return;
    if (remain.length === 1 && !this.mark && !this.stat) {
      if (!this.matches[index])
        this.matches[index] = Object.create(null);
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        if (prefix) {
          if (prefix.slice(-1) !== '/')
            e = prefix + '/' + e;
          else
            e = prefix + e;
        }
        if (e.charAt(0) === '/' && !this.nomount) {
          e = path.join(this.root, e);
        }
        this.matches[index][e] = true;
      }
      return;
    }
    remain.shift();
    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];
      var newPattern;
      if (prefix)
        newPattern = [prefix, e];
      else
        newPattern = [e];
      this._process(newPattern.concat(remain), index, inGlobStar);
    }
  };
  GlobSync.prototype._emitMatch = function(index, e) {
    var abs = this._makeAbs(e);
    if (this.mark)
      e = this._mark(e);
    if (this.matches[index][e])
      return;
    if (this.nodir) {
      var c = this.cache[this._makeAbs(e)];
      if (c === 'DIR' || Array.isArray(c))
        return;
    }
    this.matches[index][e] = true;
    if (this.stat)
      this._stat(e);
  };
  GlobSync.prototype._readdirInGlobStar = function(abs) {
    if (this.follow)
      return this._readdir(abs, false);
    var entries;
    var lstat;
    var stat;
    try {
      lstat = fs.lstatSync(abs);
    } catch (er) {
      return null;
    }
    var isSym = lstat.isSymbolicLink();
    this.symlinks[abs] = isSym;
    if (!isSym && !lstat.isDirectory())
      this.cache[abs] = 'FILE';
    else
      entries = this._readdir(abs, false);
    return entries;
  };
  GlobSync.prototype._readdir = function(abs, inGlobStar) {
    var entries;
    if (inGlobStar && !ownProp(this.symlinks, abs))
      return this._readdirInGlobStar(abs);
    if (ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (!c || c === 'FILE')
        return null;
      if (Array.isArray(c))
        return c;
    }
    try {
      return this._readdirEntries(abs, fs.readdirSync(abs));
    } catch (er) {
      this._readdirError(abs, er);
      return null;
    }
  };
  GlobSync.prototype._readdirEntries = function(abs, entries) {
    if (!this.mark && !this.stat) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (abs === '/')
          e = abs + e;
        else
          e = abs + '/' + e;
        this.cache[e] = true;
      }
    }
    this.cache[abs] = entries;
    return entries;
  };
  GlobSync.prototype._readdirError = function(f, er) {
    switch (er.code) {
      case 'ENOTSUP':
      case 'ENOTDIR':
        this.cache[this._makeAbs(f)] = 'FILE';
        break;
      case 'ENOENT':
      case 'ELOOP':
      case 'ENAMETOOLONG':
      case 'UNKNOWN':
        this.cache[this._makeAbs(f)] = false;
        break;
      default:
        this.cache[this._makeAbs(f)] = false;
        if (this.strict)
          throw er;
        if (!this.silent)
          console.error('glob error', er);
        break;
    }
  };
  GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    if (!entries)
      return;
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    this._process(noGlobStar, index, false);
    var len = entries.length;
    var isSym = this.symlinks[abs];
    if (isSym && inGlobStar)
      return;
    for (var i = 0; i < len; i++) {
      var e = entries[i];
      if (e.charAt(0) === '.' && !this.dot)
        continue;
      var instead = gspref.concat(entries[i], remainWithoutGlobStar);
      this._process(instead, index, true);
      var below = gspref.concat(entries[i], remain);
      this._process(below, index, true);
    }
  };
  GlobSync.prototype._processSimple = function(prefix, index) {
    var exists = this._stat(prefix);
    if (!this.matches[index])
      this.matches[index] = Object.create(null);
    if (!exists)
      return;
    if (prefix && isAbsolute(prefix) && !this.nomount) {
      var trail = /[\/\\]$/.test(prefix);
      if (prefix.charAt(0) === '/') {
        prefix = path.join(this.root, prefix);
      } else {
        prefix = path.resolve(this.root, prefix);
        if (trail)
          prefix += '/';
      }
    }
    if (process.platform === 'win32')
      prefix = prefix.replace(/\\/g, '/');
    this.matches[index][prefix] = true;
  };
  GlobSync.prototype._stat = function(f) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === '/';
    if (f.length > this.maxLength)
      return false;
    if (!this.stat && ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (Array.isArray(c))
        c = 'DIR';
      if (!needDir || c === 'DIR')
        return c;
      if (needDir && c === 'FILE')
        return false;
    }
    var exists;
    var stat = this.statCache[abs];
    if (!stat) {
      var lstat;
      try {
        lstat = fs.lstatSync(abs);
      } catch (er) {
        return false;
      }
      if (lstat.isSymbolicLink()) {
        try {
          stat = fs.statSync(abs);
        } catch (er) {
          stat = lstat;
        }
      } else {
        stat = lstat;
      }
    }
    this.statCache[abs] = stat;
    var c = stat.isDirectory() ? 'DIR' : 'FILE';
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c !== 'DIR')
      return false;
    return c;
  };
  GlobSync.prototype._mark = function(p) {
    return common.mark(this, p);
  };
  GlobSync.prototype._makeAbs = function(f) {
    return common.makeAbs(this, f);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5e", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      var x = fn(xs[i], i);
      if (isArray(x))
        res.push.apply(res, x);
      else
        res.push(x);
    }
    return res;
  };
  var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5f", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = balanced;
  function balanced(a, b, str) {
    var r = range(a, b, str);
    return r && {
      start: r[0],
      end: r[1],
      pre: str.slice(0, r[0]),
      body: str.slice(r[0] + a.length, r[1]),
      post: str.slice(r[1] + b.length)
    };
  }
  balanced.range = range;
  function range(a, b, str) {
    var begs,
        beg,
        left,
        right,
        result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
      begs = [];
      left = str.length;
      while (i < str.length && i >= 0 && !result) {
        if (i == ai) {
          begs.push(i);
          ai = str.indexOf(a, i + 1);
        } else if (begs.length == 1) {
          result = [begs.pop(), bi];
        } else {
          beg = begs.pop();
          if (beg < left) {
            left = beg;
            right = bi;
          }
          bi = str.indexOf(b, i + 1);
        }
        i = ai < bi && ai >= 0 ? ai : bi;
      }
      if (begs.length) {
        result = [left, right];
      }
    }
    return result;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("57", ["5e", "5f", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var concatMap = $__require('5e');
  var balanced = $__require('5f');
  module.exports = expandTop;
  var escSlash = '\0SLASH' + Math.random() + '\0';
  var escOpen = '\0OPEN' + Math.random() + '\0';
  var escClose = '\0CLOSE' + Math.random() + '\0';
  var escComma = '\0COMMA' + Math.random() + '\0';
  var escPeriod = '\0PERIOD' + Math.random() + '\0';
  function numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
  }
  function escapeBraces(str) {
    return str.split('\\\\').join(escSlash).split('\\{').join(escOpen).split('\\}').join(escClose).split('\\,').join(escComma).split('\\.').join(escPeriod);
  }
  function unescapeBraces(str) {
    return str.split(escSlash).join('\\').split(escOpen).join('{').split(escClose).join('}').split(escComma).join(',').split(escPeriod).join('.');
  }
  function parseCommaParts(str) {
    if (!str)
      return [''];
    var parts = [];
    var m = balanced('{', '}', str);
    if (!m)
      return str.split(',');
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(',');
    p[p.length - 1] += '{' + body + '}';
    var postParts = parseCommaParts(post);
    if (post.length) {
      p[p.length - 1] += postParts.shift();
      p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
  }
  function expandTop(str) {
    if (!str)
      return [];
    return expand(escapeBraces(str), true).map(unescapeBraces);
  }
  function identity(e) {
    return e;
  }
  function embrace(str) {
    return '{' + str + '}';
  }
  function isPadded(el) {
    return /^-?0\d/.test(el);
  }
  function lte(i, y) {
    return i <= y;
  }
  function gte(i, y) {
    return i >= y;
  }
  function expand(str, isTop) {
    var expansions = [];
    var m = balanced('{', '}', str);
    if (!m || /\$$/.test(m.pre))
      return [str];
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = /^(.*,)+(.+)?$/.test(m.body);
    if (!isSequence && !isOptions) {
      if (m.post.match(/,.*\}/)) {
        str = m.pre + '{' + m.body + escClose + m.post;
        return expand(str);
      }
      return [str];
    }
    var n;
    if (isSequence) {
      n = m.body.split(/\.\./);
    } else {
      n = parseCommaParts(m.body);
      if (n.length === 1) {
        n = expand(n[0], false).map(embrace);
        if (n.length === 1) {
          var post = m.post.length ? expand(m.post, false) : [''];
          return post.map(function(p) {
            return m.pre + n[0] + p;
          });
        }
      }
    }
    var pre = m.pre;
    var post = m.post.length ? expand(m.post, false) : [''];
    var N;
    if (isSequence) {
      var x = numeric(n[0]);
      var y = numeric(n[1]);
      var width = Math.max(n[0].length, n[1].length);
      var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
      var test = lte;
      var reverse = y < x;
      if (reverse) {
        incr *= -1;
        test = gte;
      }
      var pad = n.some(isPadded);
      N = [];
      for (var i = x; test(i, y); i += incr) {
        var c;
        if (isAlphaSequence) {
          c = String.fromCharCode(i);
          if (c === '\\')
            c = '';
        } else {
          c = String(i);
          if (pad) {
            var need = width - c.length;
            if (need > 0) {
              var z = new Array(need + 1).join('0');
              if (i < 0)
                c = '-' + z + c.slice(1);
              else
                c = z + c;
            }
          }
        }
        N.push(c);
      }
    } else {
      N = concatMap(n, function(el) {
        return expand(el, false);
      });
    }
    for (var j = 0; j < N.length; j++) {
      for (var k = 0; k < post.length; k++) {
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion)
          expansions.push(expansion);
      }
    }
    return expansions;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5c", ["@node/path", "57", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = minimatch;
  minimatch.Minimatch = Minimatch;
  var path = {sep: '/'};
  try {
    path = $__require('@node/path');
  } catch (er) {}
  var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
  var expand = $__require('57');
  var qmark = '[^/]';
  var star = qmark + '*?';
  var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?';
  var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?';
  var reSpecials = charSet('().*{}+?[]^$\\!');
  function charSet(s) {
    return s.split('').reduce(function(set, c) {
      set[c] = true;
      return set;
    }, {});
  }
  var slashSplit = /\/+/;
  minimatch.filter = filter;
  function filter(pattern, options) {
    options = options || {};
    return function(p, i, list) {
      return minimatch(p, pattern, options);
    };
  }
  function ext(a, b) {
    a = a || {};
    b = b || {};
    var t = {};
    Object.keys(b).forEach(function(k) {
      t[k] = b[k];
    });
    Object.keys(a).forEach(function(k) {
      t[k] = a[k];
    });
    return t;
  }
  minimatch.defaults = function(def) {
    if (!def || !Object.keys(def).length)
      return minimatch;
    var orig = minimatch;
    var m = function minimatch(p, pattern, options) {
      return orig.minimatch(p, pattern, ext(def, options));
    };
    m.Minimatch = function Minimatch(pattern, options) {
      return new orig.Minimatch(pattern, ext(def, options));
    };
    return m;
  };
  Minimatch.defaults = function(def) {
    if (!def || !Object.keys(def).length)
      return Minimatch;
    return minimatch.defaults(def).Minimatch;
  };
  function minimatch(p, pattern, options) {
    if (typeof pattern !== 'string') {
      throw new TypeError('glob pattern string required');
    }
    if (!options)
      options = {};
    if (!options.nocomment && pattern.charAt(0) === '#') {
      return false;
    }
    if (pattern.trim() === '')
      return p === '';
    return new Minimatch(pattern, options).match(p);
  }
  function Minimatch(pattern, options) {
    if (!(this instanceof Minimatch)) {
      return new Minimatch(pattern, options);
    }
    if (typeof pattern !== 'string') {
      throw new TypeError('glob pattern string required');
    }
    if (!options)
      options = {};
    pattern = pattern.trim();
    if (path.sep !== '/') {
      pattern = pattern.split(path.sep).join('/');
    }
    this.options = options;
    this.set = [];
    this.pattern = pattern;
    this.regexp = null;
    this.negate = false;
    this.comment = false;
    this.empty = false;
    this.make();
  }
  Minimatch.prototype.debug = function() {};
  Minimatch.prototype.make = make;
  function make() {
    if (this._made)
      return;
    var pattern = this.pattern;
    var options = this.options;
    if (!options.nocomment && pattern.charAt(0) === '#') {
      this.comment = true;
      return;
    }
    if (!pattern) {
      this.empty = true;
      return;
    }
    this.parseNegate();
    var set = this.globSet = this.braceExpand();
    if (options.debug)
      this.debug = console.error;
    this.debug(this.pattern, set);
    set = this.globParts = set.map(function(s) {
      return s.split(slashSplit);
    });
    this.debug(this.pattern, set);
    set = set.map(function(s, si, set) {
      return s.map(this.parse, this);
    }, this);
    this.debug(this.pattern, set);
    set = set.filter(function(s) {
      return s.indexOf(false) === -1;
    });
    this.debug(this.pattern, set);
    this.set = set;
  }
  Minimatch.prototype.parseNegate = parseNegate;
  function parseNegate() {
    var pattern = this.pattern;
    var negate = false;
    var options = this.options;
    var negateOffset = 0;
    if (options.nonegate)
      return;
    for (var i = 0,
        l = pattern.length; i < l && pattern.charAt(i) === '!'; i++) {
      negate = !negate;
      negateOffset++;
    }
    if (negateOffset)
      this.pattern = pattern.substr(negateOffset);
    this.negate = negate;
  }
  minimatch.braceExpand = function(pattern, options) {
    return braceExpand(pattern, options);
  };
  Minimatch.prototype.braceExpand = braceExpand;
  function braceExpand(pattern, options) {
    if (!options) {
      if (this instanceof Minimatch) {
        options = this.options;
      } else {
        options = {};
      }
    }
    pattern = typeof pattern === 'undefined' ? this.pattern : pattern;
    if (typeof pattern === 'undefined') {
      throw new Error('undefined pattern');
    }
    if (options.nobrace || !pattern.match(/\{.*\}/)) {
      return [pattern];
    }
    return expand(pattern);
  }
  Minimatch.prototype.parse = parse;
  var SUBPARSE = {};
  function parse(pattern, isSub) {
    var options = this.options;
    if (!options.noglobstar && pattern === '**')
      return GLOBSTAR;
    if (pattern === '')
      return '';
    var re = '';
    var hasMagic = !!options.nocase;
    var escaping = false;
    var patternListStack = [];
    var negativeLists = [];
    var plType;
    var stateChar;
    var inClass = false;
    var reClassStart = -1;
    var classStart = -1;
    var patternStart = pattern.charAt(0) === '.' ? '' : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))' : '(?!\\.)';
    var self = this;
    function clearStateChar() {
      if (stateChar) {
        switch (stateChar) {
          case '*':
            re += star;
            hasMagic = true;
            break;
          case '?':
            re += qmark;
            hasMagic = true;
            break;
          default:
            re += '\\' + stateChar;
            break;
        }
        self.debug('clearStateChar %j %j', stateChar, re);
        stateChar = false;
      }
    }
    for (var i = 0,
        len = pattern.length,
        c; (i < len) && (c = pattern.charAt(i)); i++) {
      this.debug('%s\t%s %s %j', pattern, i, re, c);
      if (escaping && reSpecials[c]) {
        re += '\\' + c;
        escaping = false;
        continue;
      }
      switch (c) {
        case '/':
          return false;
        case '\\':
          clearStateChar();
          escaping = true;
          continue;
        case '?':
        case '*':
        case '+':
        case '@':
        case '!':
          this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);
          if (inClass) {
            this.debug('  in class');
            if (c === '!' && i === classStart + 1)
              c = '^';
            re += c;
            continue;
          }
          self.debug('call clearStateChar %j', stateChar);
          clearStateChar();
          stateChar = c;
          if (options.noext)
            clearStateChar();
          continue;
        case '(':
          if (inClass) {
            re += '(';
            continue;
          }
          if (!stateChar) {
            re += '\\(';
            continue;
          }
          plType = stateChar;
          patternListStack.push({
            type: plType,
            start: i - 1,
            reStart: re.length
          });
          re += stateChar === '!' ? '(?:(?!(?:' : '(?:';
          this.debug('plType %j %j', stateChar, re);
          stateChar = false;
          continue;
        case ')':
          if (inClass || !patternListStack.length) {
            re += '\\)';
            continue;
          }
          clearStateChar();
          hasMagic = true;
          re += ')';
          var pl = patternListStack.pop();
          plType = pl.type;
          switch (plType) {
            case '!':
              negativeLists.push(pl);
              re += ')[^/]*?)';
              pl.reEnd = re.length;
              break;
            case '?':
            case '+':
            case '*':
              re += plType;
              break;
            case '@':
              break;
          }
          continue;
        case '|':
          if (inClass || !patternListStack.length || escaping) {
            re += '\\|';
            escaping = false;
            continue;
          }
          clearStateChar();
          re += '|';
          continue;
        case '[':
          clearStateChar();
          if (inClass) {
            re += '\\' + c;
            continue;
          }
          inClass = true;
          classStart = i;
          reClassStart = re.length;
          re += c;
          continue;
        case ']':
          if (i === classStart + 1 || !inClass) {
            re += '\\' + c;
            escaping = false;
            continue;
          }
          if (inClass) {
            var cs = pattern.substring(classStart + 1, i);
            try {
              RegExp('[' + cs + ']');
            } catch (er) {
              var sp = this.parse(cs, SUBPARSE);
              re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]';
              hasMagic = hasMagic || sp[1];
              inClass = false;
              continue;
            }
          }
          hasMagic = true;
          inClass = false;
          re += c;
          continue;
        default:
          clearStateChar();
          if (escaping) {
            escaping = false;
          } else if (reSpecials[c] && !(c === '^' && inClass)) {
            re += '\\';
          }
          re += c;
      }
    }
    if (inClass) {
      cs = pattern.substr(classStart + 1);
      sp = this.parse(cs, SUBPARSE);
      re = re.substr(0, reClassStart) + '\\[' + sp[0];
      hasMagic = hasMagic || sp[1];
    }
    for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
      var tail = re.slice(pl.reStart + 3);
      tail = tail.replace(/((?:\\{2})*)(\\?)\|/g, function(_, $1, $2) {
        if (!$2) {
          $2 = '\\';
        }
        return $1 + $1 + $2 + '|';
      });
      this.debug('tail=%j\n   %s', tail, tail);
      var t = pl.type === '*' ? star : pl.type === '?' ? qmark : '\\' + pl.type;
      hasMagic = true;
      re = re.slice(0, pl.reStart) + t + '\\(' + tail;
    }
    clearStateChar();
    if (escaping) {
      re += '\\\\';
    }
    var addPatternStart = false;
    switch (re.charAt(0)) {
      case '.':
      case '[':
      case '(':
        addPatternStart = true;
    }
    for (var n = negativeLists.length - 1; n > -1; n--) {
      var nl = negativeLists[n];
      var nlBefore = re.slice(0, nl.reStart);
      var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
      var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
      var nlAfter = re.slice(nl.reEnd);
      nlLast += nlAfter;
      var openParensBefore = nlBefore.split('(').length - 1;
      var cleanAfter = nlAfter;
      for (i = 0; i < openParensBefore; i++) {
        cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
      }
      nlAfter = cleanAfter;
      var dollar = '';
      if (nlAfter === '' && isSub !== SUBPARSE) {
        dollar = '$';
      }
      var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
      re = newRe;
    }
    if (re !== '' && hasMagic) {
      re = '(?=.)' + re;
    }
    if (addPatternStart) {
      re = patternStart + re;
    }
    if (isSub === SUBPARSE) {
      return [re, hasMagic];
    }
    if (!hasMagic) {
      return globUnescape(pattern);
    }
    var flags = options.nocase ? 'i' : '';
    var regExp = new RegExp('^' + re + '$', flags);
    regExp._glob = pattern;
    regExp._src = re;
    return regExp;
  }
  minimatch.makeRe = function(pattern, options) {
    return new Minimatch(pattern, options || {}).makeRe();
  };
  Minimatch.prototype.makeRe = makeRe;
  function makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    var set = this.set;
    if (!set.length) {
      this.regexp = false;
      return this.regexp;
    }
    var options = this.options;
    var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
    var flags = options.nocase ? 'i' : '';
    var re = set.map(function(pattern) {
      return pattern.map(function(p) {
        return (p === GLOBSTAR) ? twoStar : (typeof p === 'string') ? regExpEscape(p) : p._src;
      }).join('\\\/');
    }).join('|');
    re = '^(?:' + re + ')$';
    if (this.negate)
      re = '^(?!' + re + ').*$';
    try {
      this.regexp = new RegExp(re, flags);
    } catch (ex) {
      this.regexp = false;
    }
    return this.regexp;
  }
  minimatch.match = function(list, pattern, options) {
    options = options || {};
    var mm = new Minimatch(pattern, options);
    list = list.filter(function(f) {
      return mm.match(f);
    });
    if (mm.options.nonull && !list.length) {
      list.push(pattern);
    }
    return list;
  };
  Minimatch.prototype.match = match;
  function match(f, partial) {
    this.debug('match', f, this.pattern);
    if (this.comment)
      return false;
    if (this.empty)
      return f === '';
    if (f === '/' && partial)
      return true;
    var options = this.options;
    if (path.sep !== '/') {
      f = f.split(path.sep).join('/');
    }
    f = f.split(slashSplit);
    this.debug(this.pattern, 'split', f);
    var set = this.set;
    this.debug(this.pattern, 'set', set);
    var filename;
    var i;
    for (i = f.length - 1; i >= 0; i--) {
      filename = f[i];
      if (filename)
        break;
    }
    for (i = 0; i < set.length; i++) {
      var pattern = set[i];
      var file = f;
      if (options.matchBase && pattern.length === 1) {
        file = [filename];
      }
      var hit = this.matchOne(file, pattern, partial);
      if (hit) {
        if (options.flipNegate)
          return true;
        return !this.negate;
      }
    }
    if (options.flipNegate)
      return false;
    return this.negate;
  }
  Minimatch.prototype.matchOne = function(file, pattern, partial) {
    var options = this.options;
    this.debug('matchOne', {
      'this': this,
      file: file,
      pattern: pattern
    });
    this.debug('matchOne', file.length, pattern.length);
    for (var fi = 0,
        pi = 0,
        fl = file.length,
        pl = pattern.length; (fi < fl) && (pi < pl); fi++, pi++) {
      this.debug('matchOne loop');
      var p = pattern[pi];
      var f = file[fi];
      this.debug(pattern, p, f);
      if (p === false)
        return false;
      if (p === GLOBSTAR) {
        this.debug('GLOBSTAR', [pattern, p, f]);
        var fr = fi;
        var pr = pi + 1;
        if (pr === pl) {
          this.debug('** at the end');
          for (; fi < fl; fi++) {
            if (file[fi] === '.' || file[fi] === '..' || (!options.dot && file[fi].charAt(0) === '.'))
              return false;
          }
          return true;
        }
        while (fr < fl) {
          var swallowee = file[fr];
          this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);
          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
            this.debug('globstar found match!', fr, fl, swallowee);
            return true;
          } else {
            if (swallowee === '.' || swallowee === '..' || (!options.dot && swallowee.charAt(0) === '.')) {
              this.debug('dot detected!', file, fr, pattern, pr);
              break;
            }
            this.debug('globstar swallow a segment, and continue');
            fr++;
          }
        }
        if (partial) {
          this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
          if (fr === fl)
            return true;
        }
        return false;
      }
      var hit;
      if (typeof p === 'string') {
        if (options.nocase) {
          hit = f.toLowerCase() === p.toLowerCase();
        } else {
          hit = f === p;
        }
        this.debug('string match', p, f, hit);
      } else {
        hit = f.match(p);
        this.debug('pattern match', p, f, hit);
      }
      if (!hit)
        return false;
    }
    if (fi === fl && pi === pl) {
      return true;
    } else if (fi === fl) {
      return partial;
    } else if (pi === pl) {
      var emptyFileEnd = (fi === fl - 1) && (file[fi] === '');
      return emptyFileEnd;
    }
    throw new Error('wtf?');
  };
  function globUnescape(s) {
    return s.replace(/\\(.)/g, '$1');
  }
  function regExpEscape(s) {
    return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5d", ["5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  function posix(path) {
    return path.charAt(0) === '/';
  }
  ;
  function win32(path) {
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    var result = splitDeviceRe.exec(path);
    var device = result[1] || '';
    var isUnc = !!device && device.charAt(1) !== ':';
    return !!result[2] || isUnc;
  }
  ;
  module.exports = process.platform === 'win32' ? win32 : posix;
  module.exports.posix = posix;
  module.exports.win32 = win32;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5b", ["@node/path", "5c", "5d", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.alphasort = alphasort;
  exports.alphasorti = alphasorti;
  exports.setopts = setopts;
  exports.ownProp = ownProp;
  exports.makeAbs = makeAbs;
  exports.finish = finish;
  exports.mark = mark;
  exports.isIgnored = isIgnored;
  exports.childrenIgnored = childrenIgnored;
  function ownProp(obj, field) {
    return Object.prototype.hasOwnProperty.call(obj, field);
  }
  var path = $__require('@node/path');
  var minimatch = $__require('5c');
  var isAbsolute = $__require('5d');
  var Minimatch = minimatch.Minimatch;
  function alphasorti(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }
  function alphasort(a, b) {
    return a.localeCompare(b);
  }
  function setupIgnores(self, options) {
    self.ignore = options.ignore || [];
    if (!Array.isArray(self.ignore))
      self.ignore = [self.ignore];
    if (self.ignore.length) {
      self.ignore = self.ignore.map(ignoreMap);
    }
  }
  function ignoreMap(pattern) {
    var gmatcher = null;
    if (pattern.slice(-3) === '/**') {
      var gpattern = pattern.replace(/(\/\*\*)+$/, '');
      gmatcher = new Minimatch(gpattern);
    }
    return {
      matcher: new Minimatch(pattern),
      gmatcher: gmatcher
    };
  }
  function setopts(self, pattern, options) {
    if (!options)
      options = {};
    if (options.matchBase && -1 === pattern.indexOf("/")) {
      if (options.noglobstar) {
        throw new Error("base matching requires globstar");
      }
      pattern = "**/" + pattern;
    }
    self.silent = !!options.silent;
    self.pattern = pattern;
    self.strict = options.strict !== false;
    self.realpath = !!options.realpath;
    self.realpathCache = options.realpathCache || Object.create(null);
    self.follow = !!options.follow;
    self.dot = !!options.dot;
    self.mark = !!options.mark;
    self.nodir = !!options.nodir;
    if (self.nodir)
      self.mark = true;
    self.sync = !!options.sync;
    self.nounique = !!options.nounique;
    self.nonull = !!options.nonull;
    self.nosort = !!options.nosort;
    self.nocase = !!options.nocase;
    self.stat = !!options.stat;
    self.noprocess = !!options.noprocess;
    self.maxLength = options.maxLength || Infinity;
    self.cache = options.cache || Object.create(null);
    self.statCache = options.statCache || Object.create(null);
    self.symlinks = options.symlinks || Object.create(null);
    setupIgnores(self, options);
    self.changedCwd = false;
    var cwd = process.cwd();
    if (!ownProp(options, "cwd"))
      self.cwd = cwd;
    else {
      self.cwd = options.cwd;
      self.changedCwd = path.resolve(options.cwd) !== cwd;
    }
    self.root = options.root || path.resolve(self.cwd, "/");
    self.root = path.resolve(self.root);
    if (process.platform === "win32")
      self.root = self.root.replace(/\\/g, "/");
    self.nomount = !!options.nomount;
    options.nonegate = options.nonegate === false ? false : true;
    options.nocomment = options.nocomment === false ? false : true;
    deprecationWarning(options);
    self.minimatch = new Minimatch(pattern, options);
    self.options = self.minimatch.options;
  }
  exports.deprecationWarned;
  function deprecationWarning(options) {
    if (!options.nonegate || !options.nocomment) {
      if (process.noDeprecation !== true && !exports.deprecationWarned) {
        var msg = 'glob WARNING: comments and negation will be disabled in v6';
        if (process.throwDeprecation)
          throw new Error(msg);
        else if (process.traceDeprecation)
          console.trace(msg);
        else
          console.error(msg);
        exports.deprecationWarned = true;
      }
    }
  }
  function finish(self) {
    var nou = self.nounique;
    var all = nou ? [] : Object.create(null);
    for (var i = 0,
        l = self.matches.length; i < l; i++) {
      var matches = self.matches[i];
      if (!matches || Object.keys(matches).length === 0) {
        if (self.nonull) {
          var literal = self.minimatch.globSet[i];
          if (nou)
            all.push(literal);
          else
            all[literal] = true;
        }
      } else {
        var m = Object.keys(matches);
        if (nou)
          all.push.apply(all, m);
        else
          m.forEach(function(m) {
            all[m] = true;
          });
      }
    }
    if (!nou)
      all = Object.keys(all);
    if (!self.nosort)
      all = all.sort(self.nocase ? alphasorti : alphasort);
    if (self.mark) {
      for (var i = 0; i < all.length; i++) {
        all[i] = self._mark(all[i]);
      }
      if (self.nodir) {
        all = all.filter(function(e) {
          return !(/\/$/.test(e));
        });
      }
    }
    if (self.ignore.length)
      all = all.filter(function(m) {
        return !isIgnored(self, m);
      });
    self.found = all;
  }
  function mark(self, p) {
    var abs = makeAbs(self, p);
    var c = self.cache[abs];
    var m = p;
    if (c) {
      var isDir = c === 'DIR' || Array.isArray(c);
      var slash = p.slice(-1) === '/';
      if (isDir && !slash)
        m += '/';
      else if (!isDir && slash)
        m = m.slice(0, -1);
      if (m !== p) {
        var mabs = makeAbs(self, m);
        self.statCache[mabs] = self.statCache[abs];
        self.cache[mabs] = self.cache[abs];
      }
    }
    return m;
  }
  function makeAbs(self, f) {
    var abs = f;
    if (f.charAt(0) === '/') {
      abs = path.join(self.root, f);
    } else if (isAbsolute(f) || f === '') {
      abs = f;
    } else if (self.changedCwd) {
      abs = path.resolve(self.cwd, f);
    } else {
      abs = path.resolve(f);
    }
    return abs;
  }
  function isIgnored(self, path) {
    if (!self.ignore.length)
      return false;
    return self.ignore.some(function(item) {
      return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path));
    });
  }
  function childrenIgnored(self, path) {
    if (!self.ignore.length)
      return false;
    return self.ignore.some(function(item) {
      return !!(item.gmatcher && item.gmatcher.match(path));
    });
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("60", ["61", "4c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var wrappy = $__require('61');
  var reqs = Object.create(null);
  var once = $__require('4c');
  module.exports = wrappy(inflight);
  function inflight(key, cb) {
    if (reqs[key]) {
      reqs[key].push(cb);
      return null;
    } else {
      reqs[key] = [cb];
      return makeres(key);
    }
  }
  function makeres(key) {
    return once(function RES() {
      var cbs = reqs[key];
      var len = cbs.length;
      var args = slice(arguments);
      for (var i = 0; i < len; i++) {
        cbs[i].apply(null, args);
      }
      if (cbs.length > len) {
        cbs.splice(0, len);
        process.nextTick(function() {
          RES.apply(null, args);
        });
      } else {
        delete reqs[key];
      }
    });
  }
  function slice(args) {
    var length = args.length;
    var array = [];
    for (var i = 0; i < length; i++)
      array[i] = args[i];
    return array;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("61", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = wrappy;
  function wrappy(fn, cb) {
    if (fn && cb)
      return wrappy(fn)(cb);
    if (typeof fn !== 'function')
      throw new TypeError('need wrapper function');
    Object.keys(fn).forEach(function(k) {
      wrapper[k] = fn[k];
    });
    return wrapper;
    function wrapper() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      var ret = fn.apply(this, args);
      var cb = args[args.length - 1];
      if (typeof ret === 'function' && ret !== cb) {
        Object.keys(cb).forEach(function(k) {
          ret[k] = cb[k];
        });
      }
      return ret;
    }
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4c", ["61", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var wrappy = $__require('61');
  module.exports = wrappy(once);
  once.proto = once(function() {
    Object.defineProperty(Function.prototype, 'once', {
      value: function() {
        return once(this);
      },
      configurable: true
    });
  });
  function once(fn) {
    var f = function() {
      if (f.called)
        return f.value;
      f.called = true;
      return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5a", ["@node/fs", "5c", "58", "@node/events", "@node/path", "@node/assert", "5d", "59", "5b", "60", "@node/util", "4c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = glob;
  var fs = $__require('@node/fs');
  var minimatch = $__require('5c');
  var Minimatch = minimatch.Minimatch;
  var inherits = $__require('58');
  var EE = $__require('@node/events').EventEmitter;
  var path = $__require('@node/path');
  var assert = $__require('@node/assert');
  var isAbsolute = $__require('5d');
  var globSync = $__require('59');
  var common = $__require('5b');
  var alphasort = common.alphasort;
  var alphasorti = common.alphasorti;
  var setopts = common.setopts;
  var ownProp = common.ownProp;
  var inflight = $__require('60');
  var util = $__require('@node/util');
  var childrenIgnored = common.childrenIgnored;
  var isIgnored = common.isIgnored;
  var once = $__require('4c');
  function glob(pattern, options, cb) {
    if (typeof options === 'function')
      cb = options, options = {};
    if (!options)
      options = {};
    if (options.sync) {
      if (cb)
        throw new TypeError('callback provided to sync glob');
      return globSync(pattern, options);
    }
    return new Glob(pattern, options, cb);
  }
  glob.sync = globSync;
  var GlobSync = glob.GlobSync = globSync.GlobSync;
  glob.glob = glob;
  glob.hasMagic = function(pattern, options_) {
    var options = util._extend({}, options_);
    options.noprocess = true;
    var g = new Glob(pattern, options);
    var set = g.minimatch.set;
    if (set.length > 1)
      return true;
    for (var j = 0; j < set[0].length; j++) {
      if (typeof set[0][j] !== 'string')
        return true;
    }
    return false;
  };
  glob.Glob = Glob;
  inherits(Glob, EE);
  function Glob(pattern, options, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = null;
    }
    if (options && options.sync) {
      if (cb)
        throw new TypeError('callback provided to sync glob');
      return new GlobSync(pattern, options);
    }
    if (!(this instanceof Glob))
      return new Glob(pattern, options, cb);
    setopts(this, pattern, options);
    this._didRealPath = false;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    if (typeof cb === 'function') {
      cb = once(cb);
      this.on('error', cb);
      this.on('end', function(matches) {
        cb(null, matches);
      });
    }
    var self = this;
    var n = this.minimatch.set.length;
    this._processing = 0;
    this.matches = new Array(n);
    this._emitQueue = [];
    this._processQueue = [];
    this.paused = false;
    if (this.noprocess)
      return this;
    if (n === 0)
      return done();
    for (var i = 0; i < n; i++) {
      this._process(this.minimatch.set[i], i, false, done);
    }
    function done() {
      --self._processing;
      if (self._processing <= 0)
        self._finish();
    }
  }
  Glob.prototype._finish = function() {
    assert(this instanceof Glob);
    if (this.aborted)
      return;
    if (this.realpath && !this._didRealpath)
      return this._realpath();
    common.finish(this);
    this.emit('end', this.found);
  };
  Glob.prototype._realpath = function() {
    if (this._didRealpath)
      return;
    this._didRealpath = true;
    var n = this.matches.length;
    if (n === 0)
      return this._finish();
    var self = this;
    for (var i = 0; i < this.matches.length; i++)
      this._realpathSet(i, next);
    function next() {
      if (--n === 0)
        self._finish();
    }
  };
  Glob.prototype._realpathSet = function(index, cb) {
    var matchset = this.matches[index];
    if (!matchset)
      return cb();
    var found = Object.keys(matchset);
    var self = this;
    var n = found.length;
    if (n === 0)
      return cb();
    var set = this.matches[index] = Object.create(null);
    found.forEach(function(p, i) {
      p = self._makeAbs(p);
      fs.realpath(p, self.realpathCache, function(er, real) {
        if (!er)
          set[real] = true;
        else if (er.syscall === 'stat')
          set[p] = true;
        else
          self.emit('error', er);
        if (--n === 0) {
          self.matches[index] = set;
          cb();
        }
      });
    });
  };
  Glob.prototype._mark = function(p) {
    return common.mark(this, p);
  };
  Glob.prototype._makeAbs = function(f) {
    return common.makeAbs(this, f);
  };
  Glob.prototype.abort = function() {
    this.aborted = true;
    this.emit('abort');
  };
  Glob.prototype.pause = function() {
    if (!this.paused) {
      this.paused = true;
      this.emit('pause');
    }
  };
  Glob.prototype.resume = function() {
    if (this.paused) {
      this.emit('resume');
      this.paused = false;
      if (this._emitQueue.length) {
        var eq = this._emitQueue.slice(0);
        this._emitQueue.length = 0;
        for (var i = 0; i < eq.length; i++) {
          var e = eq[i];
          this._emitMatch(e[0], e[1]);
        }
      }
      if (this._processQueue.length) {
        var pq = this._processQueue.slice(0);
        this._processQueue.length = 0;
        for (var i = 0; i < pq.length; i++) {
          var p = pq[i];
          this._processing--;
          this._process(p[0], p[1], p[2], p[3]);
        }
      }
    }
  };
  Glob.prototype._process = function(pattern, index, inGlobStar, cb) {
    assert(this instanceof Glob);
    assert(typeof cb === 'function');
    if (this.aborted)
      return;
    this._processing++;
    if (this.paused) {
      this._processQueue.push([pattern, index, inGlobStar, cb]);
      return;
    }
    var n = 0;
    while (typeof pattern[n] === 'string') {
      n++;
    }
    var prefix;
    switch (n) {
      case pattern.length:
        this._processSimple(pattern.join('/'), index, cb);
        return;
      case 0:
        prefix = null;
        break;
      default:
        prefix = pattern.slice(0, n).join('/');
        break;
    }
    var remain = pattern.slice(n);
    var read;
    if (prefix === null)
      read = '.';
    else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
      if (!prefix || !isAbsolute(prefix))
        prefix = '/' + prefix;
      read = prefix;
    } else
      read = prefix;
    var abs = this._makeAbs(read);
    if (childrenIgnored(this, read))
      return cb();
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar)
      this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);
    else
      this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
  };
  Glob.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function(er, entries) {
      return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };
  Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    if (!entries)
      return cb();
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === '.';
    var matchedEntries = [];
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (e.charAt(0) !== '.' || dotOk) {
        var m;
        if (negate && !prefix) {
          m = !e.match(pn);
        } else {
          m = e.match(pn);
        }
        if (m)
          matchedEntries.push(e);
      }
    }
    var len = matchedEntries.length;
    if (len === 0)
      return cb();
    if (remain.length === 1 && !this.mark && !this.stat) {
      if (!this.matches[index])
        this.matches[index] = Object.create(null);
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        if (prefix) {
          if (prefix !== '/')
            e = prefix + '/' + e;
          else
            e = prefix + e;
        }
        if (e.charAt(0) === '/' && !this.nomount) {
          e = path.join(this.root, e);
        }
        this._emitMatch(index, e);
      }
      return cb();
    }
    remain.shift();
    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];
      var newPattern;
      if (prefix) {
        if (prefix !== '/')
          e = prefix + '/' + e;
        else
          e = prefix + e;
      }
      this._process([e].concat(remain), index, inGlobStar, cb);
    }
    cb();
  };
  Glob.prototype._emitMatch = function(index, e) {
    if (this.aborted)
      return;
    if (this.matches[index][e])
      return;
    if (isIgnored(this, e))
      return;
    if (this.paused) {
      this._emitQueue.push([index, e]);
      return;
    }
    var abs = this._makeAbs(e);
    if (this.nodir) {
      var c = this.cache[abs];
      if (c === 'DIR' || Array.isArray(c))
        return;
    }
    if (this.mark)
      e = this._mark(e);
    this.matches[index][e] = true;
    var st = this.statCache[abs];
    if (st)
      this.emit('stat', e, st);
    this.emit('match', e);
  };
  Glob.prototype._readdirInGlobStar = function(abs, cb) {
    if (this.aborted)
      return;
    if (this.follow)
      return this._readdir(abs, false, cb);
    var lstatkey = 'lstat\0' + abs;
    var self = this;
    var lstatcb = inflight(lstatkey, lstatcb_);
    if (lstatcb)
      fs.lstat(abs, lstatcb);
    function lstatcb_(er, lstat) {
      if (er)
        return cb();
      var isSym = lstat.isSymbolicLink();
      self.symlinks[abs] = isSym;
      if (!isSym && !lstat.isDirectory()) {
        self.cache[abs] = 'FILE';
        cb();
      } else
        self._readdir(abs, false, cb);
    }
  };
  Glob.prototype._readdir = function(abs, inGlobStar, cb) {
    if (this.aborted)
      return;
    cb = inflight('readdir\0' + abs + '\0' + inGlobStar, cb);
    if (!cb)
      return;
    if (inGlobStar && !ownProp(this.symlinks, abs))
      return this._readdirInGlobStar(abs, cb);
    if (ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (!c || c === 'FILE')
        return cb();
      if (Array.isArray(c))
        return cb(null, c);
    }
    var self = this;
    fs.readdir(abs, readdirCb(this, abs, cb));
  };
  function readdirCb(self, abs, cb) {
    return function(er, entries) {
      if (er)
        self._readdirError(abs, er, cb);
      else
        self._readdirEntries(abs, entries, cb);
    };
  }
  Glob.prototype._readdirEntries = function(abs, entries, cb) {
    if (this.aborted)
      return;
    if (!this.mark && !this.stat) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (abs === '/')
          e = abs + e;
        else
          e = abs + '/' + e;
        this.cache[e] = true;
      }
    }
    this.cache[abs] = entries;
    return cb(null, entries);
  };
  Glob.prototype._readdirError = function(f, er, cb) {
    if (this.aborted)
      return;
    switch (er.code) {
      case 'ENOTSUP':
      case 'ENOTDIR':
        this.cache[this._makeAbs(f)] = 'FILE';
        break;
      case 'ENOENT':
      case 'ELOOP':
      case 'ENAMETOOLONG':
      case 'UNKNOWN':
        this.cache[this._makeAbs(f)] = false;
        break;
      default:
        this.cache[this._makeAbs(f)] = false;
        if (this.strict) {
          this.emit('error', er);
          this.abort();
        }
        if (!this.silent)
          console.error('glob error', er);
        break;
    }
    return cb();
  };
  Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function(er, entries) {
      self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };
  Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    if (!entries)
      return cb();
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    this._process(noGlobStar, index, false, cb);
    var isSym = this.symlinks[abs];
    var len = entries.length;
    if (isSym && inGlobStar)
      return cb();
    for (var i = 0; i < len; i++) {
      var e = entries[i];
      if (e.charAt(0) === '.' && !this.dot)
        continue;
      var instead = gspref.concat(entries[i], remainWithoutGlobStar);
      this._process(instead, index, true, cb);
      var below = gspref.concat(entries[i], remain);
      this._process(below, index, true, cb);
    }
    cb();
  };
  Glob.prototype._processSimple = function(prefix, index, cb) {
    var self = this;
    this._stat(prefix, function(er, exists) {
      self._processSimple2(prefix, index, er, exists, cb);
    });
  };
  Glob.prototype._processSimple2 = function(prefix, index, er, exists, cb) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null);
    if (!exists)
      return cb();
    if (prefix && isAbsolute(prefix) && !this.nomount) {
      var trail = /[\/\\]$/.test(prefix);
      if (prefix.charAt(0) === '/') {
        prefix = path.join(this.root, prefix);
      } else {
        prefix = path.resolve(this.root, prefix);
        if (trail)
          prefix += '/';
      }
    }
    if (process.platform === 'win32')
      prefix = prefix.replace(/\\/g, '/');
    this._emitMatch(index, prefix);
    cb();
  };
  Glob.prototype._stat = function(f, cb) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === '/';
    if (f.length > this.maxLength)
      return cb();
    if (!this.stat && ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (Array.isArray(c))
        c = 'DIR';
      if (!needDir || c === 'DIR')
        return cb(null, c);
      if (needDir && c === 'FILE')
        return cb();
    }
    var exists;
    var stat = this.statCache[abs];
    if (stat !== undefined) {
      if (stat === false)
        return cb(null, stat);
      else {
        var type = stat.isDirectory() ? 'DIR' : 'FILE';
        if (needDir && type === 'FILE')
          return cb();
        else
          return cb(null, type, stat);
      }
    }
    var self = this;
    var statcb = inflight('stat\0' + abs, lstatcb_);
    if (statcb)
      fs.lstat(abs, statcb);
    function lstatcb_(er, lstat) {
      if (lstat && lstat.isSymbolicLink()) {
        return fs.stat(abs, function(er, stat) {
          if (er)
            self._stat2(f, abs, null, lstat, cb);
          else
            self._stat2(f, abs, er, stat, cb);
        });
      } else {
        self._stat2(f, abs, er, lstat, cb);
      }
    }
  };
  Glob.prototype._stat2 = function(f, abs, er, stat, cb) {
    if (er) {
      this.statCache[abs] = false;
      return cb();
    }
    var needDir = f.slice(-1) === '/';
    this.statCache[abs] = stat;
    if (abs.slice(-1) === '/' && !stat.isDirectory())
      return cb(null, false, stat);
    var c = stat.isDirectory() ? 'DIR' : 'FILE';
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c !== 'DIR')
      return cb();
    return cb(null, c, stat);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("62", ["@node/util", "56", "5a", "@node/events", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var util = $__require('@node/util');
  var minimatch = $__require('56');
  var glob = $__require('5a');
  var Glob = glob.Glob;
  var EventEmitter = $__require('@node/events').EventEmitter;
  module.exports = fileset;
  function fileset(include, exclude, options, cb) {
    if (typeof exclude === 'function')
      cb = exclude, exclude = '';
    else if (typeof options === 'function')
      cb = options, options = {};
    var includes = (typeof include === 'string') ? include.split(' ') : include;
    var excludes = (typeof exclude === 'string') ? exclude.split(' ') : exclude;
    var em = new EventEmitter;
    var remaining = includes.length;
    var results = [];
    if (!includes.length)
      return cb(new Error('Must provide an include pattern'));
    em.includes = includes.map(function(pattern) {
      return new fileset.Fileset(pattern, options).on('error', cb ? cb : em.emit.bind(em, 'error')).on('match', em.emit.bind(em, 'match')).on('match', em.emit.bind(em, 'include')).on('end', next.bind({}, pattern));
    });
    function next(pattern, matches) {
      results = results.concat(matches);
      if (!(--remaining)) {
        results = results.filter(function(file) {
          return !excludes.filter(function(glob) {
            var match = minimatch(file, glob, {matchBase: true});
            if (match)
              em.emit('exclude', file);
            return match;
          }).length;
        });
        if (cb)
          cb(null, results);
        em.emit('end', results);
      }
    }
    return em;
  }
  fileset.sync = function filesetSync(include, exclude) {
    if (!exclude)
      exclude = '';
    var includes = (typeof include === 'string') ? include.split(/[\s,]/g) : include;
    var excludes = (typeof exclude === 'string') ? exclude.split(/[\s,]/g) : exclude;
    includes = includes.filter(function(pattern) {
      return pattern;
    });
    excludes = excludes.filter(function(pattern) {
      return pattern;
    });
    var options = {matchBase: true};
    var results = includes.map(function(include) {
      return glob.sync(include, options);
    }).reduce(function(a, b) {
      return a.concat(b);
    }, []);
    var ignored = excludes.map(function(exclude) {
      return glob.sync(exclude, options);
    }).reduce(function(a, b) {
      return a.concat(b);
    }, []);
    results = results.filter(function(file) {
      return !ignored.filter(function(glob) {
        return minimatch(file, glob, {matchBase: true});
      }).length;
    });
    return results;
  };
  fileset.Fileset = function Fileset(pattern, options, cb) {
    if (typeof options === 'function')
      cb = options, options = {};
    if (!options)
      options = {};
    Glob.call(this, pattern, options);
    if (typeof cb === 'function') {
      this.on('error', cb);
      this.on('end', function(matches) {
        cb(null, matches);
      });
    }
  };
  util.inherits(fileset.Fileset, Glob);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3b", ["42", "62", "@node/fs", "@node/path", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var async = $__require('42'),
      fileset = $__require('62'),
      fs = $__require('@node/fs'),
      path = $__require('@node/path'),
      seq = 0;
  function filesFor(options, callback) {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }
    options = options || {};
    var root = options.root,
        includes = options.includes,
        excludes = options.excludes,
        realpath = options.realpath,
        relative = options.relative,
        opts;
    root = root || process.cwd();
    includes = includes && Array.isArray(includes) ? includes : ['**/*.js'];
    excludes = excludes && Array.isArray(excludes) ? excludes : ['**/node_modules/**'];
    opts = {
      cwd: root,
      nodir: true
    };
    seq += 1;
    opts['x' + seq + new Date().getTime()] = true;
    fileset(includes.join(' '), excludes.join(' '), opts, function(err, files) {
      if (err) {
        return callback(err);
      }
      if (relative) {
        return callback(err, files);
      }
      if (!realpath) {
        files = files.map(function(file) {
          return path.resolve(root, file);
        });
        return callback(err, files);
      }
      var realPathCache = module.constructor._realpathCache || {};
      async.map(files, function(file, done) {
        fs.realpath(path.resolve(root, file), realPathCache, done);
      }, callback);
    });
  }
  function matcherFor(options, callback) {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }
    options = options || {};
    options.relative = false;
    options.realpath = true;
    filesFor(options, function(err, files) {
      var fileMap = {},
          matchFn;
      if (err) {
        return callback(err);
      }
      files.forEach(function(file) {
        fileMap[file] = true;
      });
      matchFn = function(file) {
        return fileMap[file];
      };
      matchFn.files = Object.keys(fileMap);
      return callback(null, matchFn);
    });
  }
  module.exports = {
    filesFor: filesFor,
    matcherFor: matcherFor
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("63", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
      define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
      factory(exports);
    } else {
      factory((root.esprima = {}));
    }
  }(this, function(exports) {
    'use strict';
    var Token,
        TokenName,
        FnExprTokens,
        Syntax,
        PlaceHolders,
        Messages,
        Regex,
        source,
        strict,
        index,
        lineNumber,
        lineStart,
        hasLineTerminator,
        lastIndex,
        lastLineNumber,
        lastLineStart,
        startIndex,
        startLineNumber,
        startLineStart,
        scanning,
        length,
        lookahead,
        state,
        extra,
        isBindingElement,
        isAssignmentTarget,
        firstCoverInitializedNameError;
    Token = {
      BooleanLiteral: 1,
      EOF: 2,
      Identifier: 3,
      Keyword: 4,
      NullLiteral: 5,
      NumericLiteral: 6,
      Punctuator: 7,
      StringLiteral: 8,
      RegularExpression: 9,
      Template: 10
    };
    TokenName = {};
    TokenName[Token.BooleanLiteral] = 'Boolean';
    TokenName[Token.EOF] = '<end>';
    TokenName[Token.Identifier] = 'Identifier';
    TokenName[Token.Keyword] = 'Keyword';
    TokenName[Token.NullLiteral] = 'Null';
    TokenName[Token.NumericLiteral] = 'Numeric';
    TokenName[Token.Punctuator] = 'Punctuator';
    TokenName[Token.StringLiteral] = 'String';
    TokenName[Token.RegularExpression] = 'RegularExpression';
    TokenName[Token.Template] = 'Template';
    FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new', 'return', 'case', 'delete', 'throw', 'void', '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', ',', '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=', '<=', '<', '>', '!=', '!=='];
    Syntax = {
      AssignmentExpression: 'AssignmentExpression',
      AssignmentPattern: 'AssignmentPattern',
      ArrayExpression: 'ArrayExpression',
      ArrayPattern: 'ArrayPattern',
      ArrowFunctionExpression: 'ArrowFunctionExpression',
      BlockStatement: 'BlockStatement',
      BinaryExpression: 'BinaryExpression',
      BreakStatement: 'BreakStatement',
      CallExpression: 'CallExpression',
      CatchClause: 'CatchClause',
      ClassBody: 'ClassBody',
      ClassDeclaration: 'ClassDeclaration',
      ClassExpression: 'ClassExpression',
      ConditionalExpression: 'ConditionalExpression',
      ContinueStatement: 'ContinueStatement',
      DoWhileStatement: 'DoWhileStatement',
      DebuggerStatement: 'DebuggerStatement',
      EmptyStatement: 'EmptyStatement',
      ExportAllDeclaration: 'ExportAllDeclaration',
      ExportDefaultDeclaration: 'ExportDefaultDeclaration',
      ExportNamedDeclaration: 'ExportNamedDeclaration',
      ExportSpecifier: 'ExportSpecifier',
      ExpressionStatement: 'ExpressionStatement',
      ForStatement: 'ForStatement',
      ForOfStatement: 'ForOfStatement',
      ForInStatement: 'ForInStatement',
      FunctionDeclaration: 'FunctionDeclaration',
      FunctionExpression: 'FunctionExpression',
      Identifier: 'Identifier',
      IfStatement: 'IfStatement',
      ImportDeclaration: 'ImportDeclaration',
      ImportDefaultSpecifier: 'ImportDefaultSpecifier',
      ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
      ImportSpecifier: 'ImportSpecifier',
      Literal: 'Literal',
      LabeledStatement: 'LabeledStatement',
      LogicalExpression: 'LogicalExpression',
      MemberExpression: 'MemberExpression',
      MetaProperty: 'MetaProperty',
      MethodDefinition: 'MethodDefinition',
      NewExpression: 'NewExpression',
      ObjectExpression: 'ObjectExpression',
      ObjectPattern: 'ObjectPattern',
      Program: 'Program',
      Property: 'Property',
      RestElement: 'RestElement',
      ReturnStatement: 'ReturnStatement',
      SequenceExpression: 'SequenceExpression',
      SpreadElement: 'SpreadElement',
      Super: 'Super',
      SwitchCase: 'SwitchCase',
      SwitchStatement: 'SwitchStatement',
      TaggedTemplateExpression: 'TaggedTemplateExpression',
      TemplateElement: 'TemplateElement',
      TemplateLiteral: 'TemplateLiteral',
      ThisExpression: 'ThisExpression',
      ThrowStatement: 'ThrowStatement',
      TryStatement: 'TryStatement',
      UnaryExpression: 'UnaryExpression',
      UpdateExpression: 'UpdateExpression',
      VariableDeclaration: 'VariableDeclaration',
      VariableDeclarator: 'VariableDeclarator',
      WhileStatement: 'WhileStatement',
      WithStatement: 'WithStatement',
      YieldExpression: 'YieldExpression'
    };
    PlaceHolders = {ArrowParameterPlaceHolder: 'ArrowParameterPlaceHolder'};
    Messages = {
      UnexpectedToken: 'Unexpected token %0',
      UnexpectedNumber: 'Unexpected number',
      UnexpectedString: 'Unexpected string',
      UnexpectedIdentifier: 'Unexpected identifier',
      UnexpectedReserved: 'Unexpected reserved word',
      UnexpectedTemplate: 'Unexpected quasi %0',
      UnexpectedEOS: 'Unexpected end of input',
      NewlineAfterThrow: 'Illegal newline after throw',
      InvalidRegExp: 'Invalid regular expression',
      UnterminatedRegExp: 'Invalid regular expression: missing /',
      InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
      InvalidLHSInForIn: 'Invalid left-hand side in for-in',
      InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
      MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
      NoCatchOrFinally: 'Missing catch or finally after try',
      UnknownLabel: 'Undefined label \'%0\'',
      Redeclaration: '%0 \'%1\' has already been declared',
      IllegalContinue: 'Illegal continue statement',
      IllegalBreak: 'Illegal break statement',
      IllegalReturn: 'Illegal return statement',
      StrictModeWith: 'Strict mode code may not include a with statement',
      StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
      StrictVarName: 'Variable name may not be eval or arguments in strict mode',
      StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
      StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
      StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
      StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
      StrictDelete: 'Delete of an unqualified identifier in strict mode.',
      StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
      StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
      StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
      StrictReservedWord: 'Use of future reserved word in strict mode',
      TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
      ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
      DefaultRestParameter: 'Unexpected token =',
      ObjectPatternAsRestParameter: 'Unexpected token {',
      DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
      ConstructorSpecialMethod: 'Class constructor may not be an accessor',
      DuplicateConstructor: 'A class may only have one constructor',
      StaticPrototype: 'Classes may not have static property named prototype',
      MissingFromClause: 'Unexpected token',
      NoAsAfterImportNamespace: 'Unexpected token',
      InvalidModuleSpecifier: 'Unexpected token',
      IllegalImportDeclaration: 'Unexpected token',
      IllegalExportDeclaration: 'Unexpected token',
      DuplicateBinding: 'Duplicate binding %0'
    };
    Regex = {
      NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    };
    function assert(condition, message) {
      if (!condition) {
        throw new Error('ASSERT: ' + message);
      }
    }
    function isDecimalDigit(ch) {
      return (ch >= 0x30 && ch <= 0x39);
    }
    function isHexDigit(ch) {
      return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
    }
    function isOctalDigit(ch) {
      return '01234567'.indexOf(ch) >= 0;
    }
    function octalToDecimal(ch) {
      var octal = (ch !== '0'),
          code = '01234567'.indexOf(ch);
      if (index < length && isOctalDigit(source[index])) {
        octal = true;
        code = code * 8 + '01234567'.indexOf(source[index++]);
        if ('0123'.indexOf(ch) >= 0 && index < length && isOctalDigit(source[index])) {
          code = code * 8 + '01234567'.indexOf(source[index++]);
        }
      }
      return {
        code: code,
        octal: octal
      };
    }
    function isWhiteSpace(ch) {
      return (ch === 0x20) || (ch === 0x09) || (ch === 0x0B) || (ch === 0x0C) || (ch === 0xA0) || (ch >= 0x1680 && [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(ch) >= 0);
    }
    function isLineTerminator(ch) {
      return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029);
    }
    function fromCodePoint(cp) {
      return (cp < 0x10000) ? String.fromCharCode(cp) : String.fromCharCode(0xD800 + ((cp - 0x10000) >> 10)) + String.fromCharCode(0xDC00 + ((cp - 0x10000) & 1023));
    }
    function isIdentifierStart(ch) {
      return (ch === 0x24) || (ch === 0x5F) || (ch >= 0x41 && ch <= 0x5A) || (ch >= 0x61 && ch <= 0x7A) || (ch === 0x5C) || ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch)));
    }
    function isIdentifierPart(ch) {
      return (ch === 0x24) || (ch === 0x5F) || (ch >= 0x41 && ch <= 0x5A) || (ch >= 0x61 && ch <= 0x7A) || (ch >= 0x30 && ch <= 0x39) || (ch === 0x5C) || ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch)));
    }
    function isFutureReservedWord(id) {
      switch (id) {
        case 'enum':
        case 'export':
        case 'import':
        case 'super':
          return true;
        default:
          return false;
      }
    }
    function isStrictModeReservedWord(id) {
      switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'yield':
        case 'let':
          return true;
        default:
          return false;
      }
    }
    function isRestrictedWord(id) {
      return id === 'eval' || id === 'arguments';
    }
    function isKeyword(id) {
      switch (id.length) {
        case 2:
          return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
          return (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try') || (id === 'let');
        case 4:
          return (id === 'this') || (id === 'else') || (id === 'case') || (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
          return (id === 'while') || (id === 'break') || (id === 'catch') || (id === 'throw') || (id === 'const') || (id === 'yield') || (id === 'class') || (id === 'super');
        case 6:
          return (id === 'return') || (id === 'typeof') || (id === 'delete') || (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
          return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
          return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
          return (id === 'instanceof');
        default:
          return false;
      }
    }
    function addComment(type, value, start, end, loc) {
      var comment;
      assert(typeof start === 'number', 'Comment must have valid position');
      state.lastCommentStart = start;
      comment = {
        type: type,
        value: value
      };
      if (extra.range) {
        comment.range = [start, end];
      }
      if (extra.loc) {
        comment.loc = loc;
      }
      extra.comments.push(comment);
      if (extra.attachComment) {
        extra.leadingComments.push(comment);
        extra.trailingComments.push(comment);
      }
      if (extra.tokenize) {
        comment.type = comment.type + 'Comment';
        if (extra.delegate) {
          comment = extra.delegate(comment);
        }
        extra.tokens.push(comment);
      }
    }
    function skipSingleLineComment(offset) {
      var start,
          loc,
          ch,
          comment;
      start = index - offset;
      loc = {start: {
          line: lineNumber,
          column: index - lineStart - offset
        }};
      while (index < length) {
        ch = source.charCodeAt(index);
        ++index;
        if (isLineTerminator(ch)) {
          hasLineTerminator = true;
          if (extra.comments) {
            comment = source.slice(start + offset, index - 1);
            loc.end = {
              line: lineNumber,
              column: index - lineStart - 1
            };
            addComment('Line', comment, start, index - 1, loc);
          }
          if (ch === 13 && source.charCodeAt(index) === 10) {
            ++index;
          }
          ++lineNumber;
          lineStart = index;
          return;
        }
      }
      if (extra.comments) {
        comment = source.slice(start + offset, index);
        loc.end = {
          line: lineNumber,
          column: index - lineStart
        };
        addComment('Line', comment, start, index, loc);
      }
    }
    function skipMultiLineComment() {
      var start,
          loc,
          ch,
          comment;
      if (extra.comments) {
        start = index - 2;
        loc = {start: {
            line: lineNumber,
            column: index - lineStart - 2
          }};
      }
      while (index < length) {
        ch = source.charCodeAt(index);
        if (isLineTerminator(ch)) {
          if (ch === 0x0D && source.charCodeAt(index + 1) === 0x0A) {
            ++index;
          }
          hasLineTerminator = true;
          ++lineNumber;
          ++index;
          lineStart = index;
        } else if (ch === 0x2A) {
          if (source.charCodeAt(index + 1) === 0x2F) {
            ++index;
            ++index;
            if (extra.comments) {
              comment = source.slice(start + 2, index - 2);
              loc.end = {
                line: lineNumber,
                column: index - lineStart
              };
              addComment('Block', comment, start, index, loc);
            }
            return;
          }
          ++index;
        } else {
          ++index;
        }
      }
      if (extra.comments) {
        loc.end = {
          line: lineNumber,
          column: index - lineStart
        };
        comment = source.slice(start + 2, index);
        addComment('Block', comment, start, index, loc);
      }
      tolerateUnexpectedToken();
    }
    function skipComment() {
      var ch,
          start;
      hasLineTerminator = false;
      start = (index === 0);
      while (index < length) {
        ch = source.charCodeAt(index);
        if (isWhiteSpace(ch)) {
          ++index;
        } else if (isLineTerminator(ch)) {
          hasLineTerminator = true;
          ++index;
          if (ch === 0x0D && source.charCodeAt(index) === 0x0A) {
            ++index;
          }
          ++lineNumber;
          lineStart = index;
          start = true;
        } else if (ch === 0x2F) {
          ch = source.charCodeAt(index + 1);
          if (ch === 0x2F) {
            ++index;
            ++index;
            skipSingleLineComment(2);
            start = true;
          } else if (ch === 0x2A) {
            ++index;
            ++index;
            skipMultiLineComment();
          } else {
            break;
          }
        } else if (start && ch === 0x2D) {
          if ((source.charCodeAt(index + 1) === 0x2D) && (source.charCodeAt(index + 2) === 0x3E)) {
            index += 3;
            skipSingleLineComment(3);
          } else {
            break;
          }
        } else if (ch === 0x3C) {
          if (source.slice(index + 1, index + 4) === '!--') {
            ++index;
            ++index;
            ++index;
            ++index;
            skipSingleLineComment(4);
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
    function scanHexEscape(prefix) {
      var i,
          len,
          ch,
          code = 0;
      len = (prefix === 'u') ? 4 : 2;
      for (i = 0; i < len; ++i) {
        if (index < length && isHexDigit(source[index])) {
          ch = source[index++];
          code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
        } else {
          return '';
        }
      }
      return String.fromCharCode(code);
    }
    function scanUnicodeCodePointEscape() {
      var ch,
          code;
      ch = source[index];
      code = 0;
      if (ch === '}') {
        throwUnexpectedToken();
      }
      while (index < length) {
        ch = source[index++];
        if (!isHexDigit(ch)) {
          break;
        }
        code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
      }
      if (code > 0x10FFFF || ch !== '}') {
        throwUnexpectedToken();
      }
      return fromCodePoint(code);
    }
    function codePointAt(i) {
      var cp,
          first,
          second;
      cp = source.charCodeAt(i);
      if (cp >= 0xD800 && cp <= 0xDBFF) {
        second = source.charCodeAt(i + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) {
          first = cp;
          cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return cp;
    }
    function getComplexIdentifier() {
      var cp,
          ch,
          id;
      cp = codePointAt(index);
      id = fromCodePoint(cp);
      index += id.length;
      if (cp === 0x5C) {
        if (source.charCodeAt(index) !== 0x75) {
          throwUnexpectedToken();
        }
        ++index;
        if (source[index] === '{') {
          ++index;
          ch = scanUnicodeCodePointEscape();
        } else {
          ch = scanHexEscape('u');
          cp = ch.charCodeAt(0);
          if (!ch || ch === '\\' || !isIdentifierStart(cp)) {
            throwUnexpectedToken();
          }
        }
        id = ch;
      }
      while (index < length) {
        cp = codePointAt(index);
        if (!isIdentifierPart(cp)) {
          break;
        }
        ch = fromCodePoint(cp);
        id += ch;
        index += ch.length;
        if (cp === 0x5C) {
          id = id.substr(0, id.length - 1);
          if (source.charCodeAt(index) !== 0x75) {
            throwUnexpectedToken();
          }
          ++index;
          if (source[index] === '{') {
            ++index;
            ch = scanUnicodeCodePointEscape();
          } else {
            ch = scanHexEscape('u');
            cp = ch.charCodeAt(0);
            if (!ch || ch === '\\' || !isIdentifierPart(cp)) {
              throwUnexpectedToken();
            }
          }
          id += ch;
        }
      }
      return id;
    }
    function getIdentifier() {
      var start,
          ch;
      start = index++;
      while (index < length) {
        ch = source.charCodeAt(index);
        if (ch === 0x5C) {
          index = start;
          return getComplexIdentifier();
        } else if (ch >= 0xD800 && ch < 0xDFFF) {
          index = start;
          return getComplexIdentifier();
        }
        if (isIdentifierPart(ch)) {
          ++index;
        } else {
          break;
        }
      }
      return source.slice(start, index);
    }
    function scanIdentifier() {
      var start,
          id,
          type;
      start = index;
      id = (source.charCodeAt(index) === 0x5C) ? getComplexIdentifier() : getIdentifier();
      if (id.length === 1) {
        type = Token.Identifier;
      } else if (isKeyword(id)) {
        type = Token.Keyword;
      } else if (id === 'null') {
        type = Token.NullLiteral;
      } else if (id === 'true' || id === 'false') {
        type = Token.BooleanLiteral;
      } else {
        type = Token.Identifier;
      }
      return {
        type: type,
        value: id,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    function scanPunctuator() {
      var token,
          str;
      token = {
        type: Token.Punctuator,
        value: '',
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: index,
        end: index
      };
      str = source[index];
      switch (str) {
        case '(':
          if (extra.tokenize) {
            extra.openParenToken = extra.tokenValues.length;
          }
          ++index;
          break;
        case '{':
          if (extra.tokenize) {
            extra.openCurlyToken = extra.tokenValues.length;
          }
          state.curlyStack.push('{');
          ++index;
          break;
        case '.':
          ++index;
          if (source[index] === '.' && source[index + 1] === '.') {
            index += 2;
            str = '...';
          }
          break;
        case '}':
          ++index;
          state.curlyStack.pop();
          break;
        case ')':
        case ';':
        case ',':
        case '[':
        case ']':
        case ':':
        case '?':
        case '~':
          ++index;
          break;
        default:
          str = source.substr(index, 4);
          if (str === '>>>=') {
            index += 4;
          } else {
            str = str.substr(0, 3);
            if (str === '===' || str === '!==' || str === '>>>' || str === '<<=' || str === '>>=') {
              index += 3;
            } else {
              str = str.substr(0, 2);
              if (str === '&&' || str === '||' || str === '==' || str === '!=' || str === '+=' || str === '-=' || str === '*=' || str === '/=' || str === '++' || str === '--' || str === '<<' || str === '>>' || str === '&=' || str === '|=' || str === '^=' || str === '%=' || str === '<=' || str === '>=' || str === '=>') {
                index += 2;
              } else {
                str = source[index];
                if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
                  ++index;
                }
              }
            }
          }
      }
      if (index === token.start) {
        throwUnexpectedToken();
      }
      token.end = index;
      token.value = str;
      return token;
    }
    function scanHexLiteral(start) {
      var number = '';
      while (index < length) {
        if (!isHexDigit(source[index])) {
          break;
        }
        number += source[index++];
      }
      if (number.length === 0) {
        throwUnexpectedToken();
      }
      if (isIdentifierStart(source.charCodeAt(index))) {
        throwUnexpectedToken();
      }
      return {
        type: Token.NumericLiteral,
        value: parseInt('0x' + number, 16),
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    function scanBinaryLiteral(start) {
      var ch,
          number;
      number = '';
      while (index < length) {
        ch = source[index];
        if (ch !== '0' && ch !== '1') {
          break;
        }
        number += source[index++];
      }
      if (number.length === 0) {
        throwUnexpectedToken();
      }
      if (index < length) {
        ch = source.charCodeAt(index);
        if (isIdentifierStart(ch) || isDecimalDigit(ch)) {
          throwUnexpectedToken();
        }
      }
      return {
        type: Token.NumericLiteral,
        value: parseInt(number, 2),
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    function scanOctalLiteral(prefix, start) {
      var number,
          octal;
      if (isOctalDigit(prefix)) {
        octal = true;
        number = '0' + source[index++];
      } else {
        octal = false;
        ++index;
        number = '';
      }
      while (index < length) {
        if (!isOctalDigit(source[index])) {
          break;
        }
        number += source[index++];
      }
      if (!octal && number.length === 0) {
        throwUnexpectedToken();
      }
      if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
        throwUnexpectedToken();
      }
      return {
        type: Token.NumericLiteral,
        value: parseInt(number, 8),
        octal: octal,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    function isImplicitOctalLiteral() {
      var i,
          ch;
      for (i = index + 1; i < length; ++i) {
        ch = source[i];
        if (ch === '8' || ch === '9') {
          return false;
        }
        if (!isOctalDigit(ch)) {
          return true;
        }
      }
      return true;
    }
    function scanNumericLiteral() {
      var number,
          start,
          ch;
      ch = source[index];
      assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'), 'Numeric literal must start with a decimal digit or a decimal point');
      start = index;
      number = '';
      if (ch !== '.') {
        number = source[index++];
        ch = source[index];
        if (number === '0') {
          if (ch === 'x' || ch === 'X') {
            ++index;
            return scanHexLiteral(start);
          }
          if (ch === 'b' || ch === 'B') {
            ++index;
            return scanBinaryLiteral(start);
          }
          if (ch === 'o' || ch === 'O') {
            return scanOctalLiteral(ch, start);
          }
          if (isOctalDigit(ch)) {
            if (isImplicitOctalLiteral()) {
              return scanOctalLiteral(ch, start);
            }
          }
        }
        while (isDecimalDigit(source.charCodeAt(index))) {
          number += source[index++];
        }
        ch = source[index];
      }
      if (ch === '.') {
        number += source[index++];
        while (isDecimalDigit(source.charCodeAt(index))) {
          number += source[index++];
        }
        ch = source[index];
      }
      if (ch === 'e' || ch === 'E') {
        number += source[index++];
        ch = source[index];
        if (ch === '+' || ch === '-') {
          number += source[index++];
        }
        if (isDecimalDigit(source.charCodeAt(index))) {
          while (isDecimalDigit(source.charCodeAt(index))) {
            number += source[index++];
          }
        } else {
          throwUnexpectedToken();
        }
      }
      if (isIdentifierStart(source.charCodeAt(index))) {
        throwUnexpectedToken();
      }
      return {
        type: Token.NumericLiteral,
        value: parseFloat(number),
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    function scanStringLiteral() {
      var str = '',
          quote,
          start,
          ch,
          unescaped,
          octToDec,
          octal = false;
      quote = source[index];
      assert((quote === '\'' || quote === '"'), 'String literal must starts with a quote');
      start = index;
      ++index;
      while (index < length) {
        ch = source[index++];
        if (ch === quote) {
          quote = '';
          break;
        } else if (ch === '\\') {
          ch = source[index++];
          if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
            switch (ch) {
              case 'u':
              case 'x':
                if (source[index] === '{') {
                  ++index;
                  str += scanUnicodeCodePointEscape();
                } else {
                  unescaped = scanHexEscape(ch);
                  if (!unescaped) {
                    throw throwUnexpectedToken();
                  }
                  str += unescaped;
                }
                break;
              case 'n':
                str += '\n';
                break;
              case 'r':
                str += '\r';
                break;
              case 't':
                str += '\t';
                break;
              case 'b':
                str += '\b';
                break;
              case 'f':
                str += '\f';
                break;
              case 'v':
                str += '\x0B';
                break;
              case '8':
              case '9':
                str += ch;
                tolerateUnexpectedToken();
                break;
              default:
                if (isOctalDigit(ch)) {
                  octToDec = octalToDecimal(ch);
                  octal = octToDec.octal || octal;
                  str += String.fromCharCode(octToDec.code);
                } else {
                  str += ch;
                }
                break;
            }
          } else {
            ++lineNumber;
            if (ch === '\r' && source[index] === '\n') {
              ++index;
            }
            lineStart = index;
          }
        } else if (isLineTerminator(ch.charCodeAt(0))) {
          break;
        } else {
          str += ch;
        }
      }
      if (quote !== '') {
        index = start;
        throwUnexpectedToken();
      }
      return {
        type: Token.StringLiteral,
        value: str,
        octal: octal,
        lineNumber: startLineNumber,
        lineStart: startLineStart,
        start: start,
        end: index
      };
    }
    function scanTemplate() {
      var cooked = '',
          ch,
          start,
          rawOffset,
          terminated,
          head,
          tail,
          restore,
          unescaped;
      terminated = false;
      tail = false;
      start = index;
      head = (source[index] === '`');
      rawOffset = 2;
      ++index;
      while (index < length) {
        ch = source[index++];
        if (ch === '`') {
          rawOffset = 1;
          tail = true;
          terminated = true;
          break;
        } else if (ch === '$') {
          if (source[index] === '{') {
            state.curlyStack.push('${');
            ++index;
            terminated = true;
            break;
          }
          cooked += ch;
        } else if (ch === '\\') {
          ch = source[index++];
          if (!isLineTerminator(ch.charCodeAt(0))) {
            switch (ch) {
              case 'n':
                cooked += '\n';
                break;
              case 'r':
                cooked += '\r';
                break;
              case 't':
                cooked += '\t';
                break;
              case 'u':
              case 'x':
                if (source[index] === '{') {
                  ++index;
                  cooked += scanUnicodeCodePointEscape();
                } else {
                  restore = index;
                  unescaped = scanHexEscape(ch);
                  if (unescaped) {
                    cooked += unescaped;
                  } else {
                    index = restore;
                    cooked += ch;
                  }
                }
                break;
              case 'b':
                cooked += '\b';
                break;
              case 'f':
                cooked += '\f';
                break;
              case 'v':
                cooked += '\v';
                break;
              default:
                if (ch === '0') {
                  if (isDecimalDigit(source.charCodeAt(index))) {
                    throwError(Messages.TemplateOctalLiteral);
                  }
                  cooked += '\0';
                } else if (isOctalDigit(ch)) {
                  throwError(Messages.TemplateOctalLiteral);
                } else {
                  cooked += ch;
                }
                break;
            }
          } else {
            ++lineNumber;
            if (ch === '\r' && source[index] === '\n') {
              ++index;
            }
            lineStart = index;
          }
        } else if (isLineTerminator(ch.charCodeAt(0))) {
          ++lineNumber;
          if (ch === '\r' && source[index] === '\n') {
            ++index;
          }
          lineStart = index;
          cooked += '\n';
        } else {
          cooked += ch;
        }
      }
      if (!terminated) {
        throwUnexpectedToken();
      }
      if (!head) {
        state.curlyStack.pop();
      }
      return {
        type: Token.Template,
        value: {
          cooked: cooked,
          raw: source.slice(start + 1, index - rawOffset)
        },
        head: head,
        tail: tail,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    function testRegExp(pattern, flags) {
      var astralSubstitute = '\uFFFF',
          tmp = pattern;
      if (flags.indexOf('u') >= 0) {
        tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function($0, $1, $2) {
          var codePoint = parseInt($1 || $2, 16);
          if (codePoint > 0x10FFFF) {
            throwUnexpectedToken(null, Messages.InvalidRegExp);
          }
          if (codePoint <= 0xFFFF) {
            return String.fromCharCode(codePoint);
          }
          return astralSubstitute;
        }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
      }
      try {
        RegExp(tmp);
      } catch (e) {
        throwUnexpectedToken(null, Messages.InvalidRegExp);
      }
      try {
        return new RegExp(pattern, flags);
      } catch (exception) {
        return null;
      }
    }
    function scanRegExpBody() {
      var ch,
          str,
          classMarker,
          terminated,
          body;
      ch = source[index];
      assert(ch === '/', 'Regular expression literal must start with a slash');
      str = source[index++];
      classMarker = false;
      terminated = false;
      while (index < length) {
        ch = source[index++];
        str += ch;
        if (ch === '\\') {
          ch = source[index++];
          if (isLineTerminator(ch.charCodeAt(0))) {
            throwUnexpectedToken(null, Messages.UnterminatedRegExp);
          }
          str += ch;
        } else if (isLineTerminator(ch.charCodeAt(0))) {
          throwUnexpectedToken(null, Messages.UnterminatedRegExp);
        } else if (classMarker) {
          if (ch === ']') {
            classMarker = false;
          }
        } else {
          if (ch === '/') {
            terminated = true;
            break;
          } else if (ch === '[') {
            classMarker = true;
          }
        }
      }
      if (!terminated) {
        throwUnexpectedToken(null, Messages.UnterminatedRegExp);
      }
      body = str.substr(1, str.length - 2);
      return {
        value: body,
        literal: str
      };
    }
    function scanRegExpFlags() {
      var ch,
          str,
          flags,
          restore;
      str = '';
      flags = '';
      while (index < length) {
        ch = source[index];
        if (!isIdentifierPart(ch.charCodeAt(0))) {
          break;
        }
        ++index;
        if (ch === '\\' && index < length) {
          ch = source[index];
          if (ch === 'u') {
            ++index;
            restore = index;
            ch = scanHexEscape('u');
            if (ch) {
              flags += ch;
              for (str += '\\u'; restore < index; ++restore) {
                str += source[restore];
              }
            } else {
              index = restore;
              flags += 'u';
              str += '\\u';
            }
            tolerateUnexpectedToken();
          } else {
            str += '\\';
            tolerateUnexpectedToken();
          }
        } else {
          flags += ch;
          str += ch;
        }
      }
      return {
        value: flags,
        literal: str
      };
    }
    function scanRegExp() {
      var start,
          body,
          flags,
          value;
      scanning = true;
      lookahead = null;
      skipComment();
      start = index;
      body = scanRegExpBody();
      flags = scanRegExpFlags();
      value = testRegExp(body.value, flags.value);
      scanning = false;
      if (extra.tokenize) {
        return {
          type: Token.RegularExpression,
          value: value,
          regex: {
            pattern: body.value,
            flags: flags.value
          },
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      return {
        literal: body.literal + flags.literal,
        value: value,
        regex: {
          pattern: body.value,
          flags: flags.value
        },
        start: start,
        end: index
      };
    }
    function collectRegex() {
      var pos,
          loc,
          regex,
          token;
      skipComment();
      pos = index;
      loc = {start: {
          line: lineNumber,
          column: index - lineStart
        }};
      regex = scanRegExp();
      loc.end = {
        line: lineNumber,
        column: index - lineStart
      };
      if (!extra.tokenize) {
        if (extra.tokens.length > 0) {
          token = extra.tokens[extra.tokens.length - 1];
          if (token.range[0] === pos && token.type === 'Punctuator') {
            if (token.value === '/' || token.value === '/=') {
              extra.tokens.pop();
            }
          }
        }
        extra.tokens.push({
          type: 'RegularExpression',
          value: regex.literal,
          regex: regex.regex,
          range: [pos, index],
          loc: loc
        });
      }
      return regex;
    }
    function isIdentifierName(token) {
      return token.type === Token.Identifier || token.type === Token.Keyword || token.type === Token.BooleanLiteral || token.type === Token.NullLiteral;
    }
    function advanceSlash() {
      var regex,
          previous,
          check;
      function testKeyword(value) {
        return value && (value.length > 1) && (value[0] >= 'a') && (value[0] <= 'z');
      }
      previous = extra.tokenValues[extra.tokens.length - 1];
      regex = (previous !== null);
      switch (previous) {
        case 'this':
        case ']':
          regex = false;
          break;
        case ')':
          check = extra.tokenValues[extra.openParenToken - 1];
          regex = (check === 'if' || check === 'while' || check === 'for' || check === 'with');
          break;
        case '}':
          regex = false;
          if (testKeyword(extra.tokenValues[extra.openCurlyToken - 3])) {
            check = extra.tokenValues[extra.openCurlyToken - 4];
            regex = check ? (FnExprTokens.indexOf(check) < 0) : false;
          } else if (testKeyword(extra.tokenValues[extra.openCurlyToken - 4])) {
            check = extra.tokenValues[extra.openCurlyToken - 5];
            regex = check ? (FnExprTokens.indexOf(check) < 0) : true;
          }
      }
      return regex ? collectRegex() : scanPunctuator();
    }
    function advance() {
      var cp,
          token;
      if (index >= length) {
        return {
          type: Token.EOF,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: index,
          end: index
        };
      }
      cp = source.charCodeAt(index);
      if (isIdentifierStart(cp)) {
        token = scanIdentifier();
        if (strict && isStrictModeReservedWord(token.value)) {
          token.type = Token.Keyword;
        }
        return token;
      }
      if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
        return scanPunctuator();
      }
      if (cp === 0x27 || cp === 0x22) {
        return scanStringLiteral();
      }
      if (cp === 0x2E) {
        if (isDecimalDigit(source.charCodeAt(index + 1))) {
          return scanNumericLiteral();
        }
        return scanPunctuator();
      }
      if (isDecimalDigit(cp)) {
        return scanNumericLiteral();
      }
      if (extra.tokenize && cp === 0x2F) {
        return advanceSlash();
      }
      if (cp === 0x60 || (cp === 0x7D && state.curlyStack[state.curlyStack.length - 1] === '${')) {
        return scanTemplate();
      }
      if (cp >= 0xD800 && cp < 0xDFFF) {
        cp = codePointAt(index);
        if (isIdentifierStart(cp)) {
          return scanIdentifier();
        }
      }
      return scanPunctuator();
    }
    function collectToken() {
      var loc,
          token,
          value,
          entry;
      loc = {start: {
          line: lineNumber,
          column: index - lineStart
        }};
      token = advance();
      loc.end = {
        line: lineNumber,
        column: index - lineStart
      };
      if (token.type !== Token.EOF) {
        value = source.slice(token.start, token.end);
        entry = {
          type: TokenName[token.type],
          value: value,
          range: [token.start, token.end],
          loc: loc
        };
        if (token.regex) {
          entry.regex = {
            pattern: token.regex.pattern,
            flags: token.regex.flags
          };
        }
        if (extra.tokenValues) {
          extra.tokenValues.push((entry.type === 'Punctuator' || entry.type === 'Keyword') ? entry.value : null);
        }
        if (extra.tokenize) {
          if (!extra.range) {
            delete entry.range;
          }
          if (!extra.loc) {
            delete entry.loc;
          }
          if (extra.delegate) {
            entry = extra.delegate(entry);
          }
        }
        extra.tokens.push(entry);
      }
      return token;
    }
    function lex() {
      var token;
      scanning = true;
      lastIndex = index;
      lastLineNumber = lineNumber;
      lastLineStart = lineStart;
      skipComment();
      token = lookahead;
      startIndex = index;
      startLineNumber = lineNumber;
      startLineStart = lineStart;
      lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();
      scanning = false;
      return token;
    }
    function peek() {
      scanning = true;
      skipComment();
      lastIndex = index;
      lastLineNumber = lineNumber;
      lastLineStart = lineStart;
      startIndex = index;
      startLineNumber = lineNumber;
      startLineStart = lineStart;
      lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();
      scanning = false;
    }
    function Position() {
      this.line = startLineNumber;
      this.column = startIndex - startLineStart;
    }
    function SourceLocation() {
      this.start = new Position();
      this.end = null;
    }
    function WrappingSourceLocation(startToken) {
      this.start = {
        line: startToken.lineNumber,
        column: startToken.start - startToken.lineStart
      };
      this.end = null;
    }
    function Node() {
      if (extra.range) {
        this.range = [startIndex, 0];
      }
      if (extra.loc) {
        this.loc = new SourceLocation();
      }
    }
    function WrappingNode(startToken) {
      if (extra.range) {
        this.range = [startToken.start, 0];
      }
      if (extra.loc) {
        this.loc = new WrappingSourceLocation(startToken);
      }
    }
    WrappingNode.prototype = Node.prototype = {
      processComment: function() {
        var lastChild,
            innerComments,
            leadingComments,
            trailingComments,
            bottomRight = extra.bottomRightStack,
            i,
            comment,
            last = bottomRight[bottomRight.length - 1];
        if (this.type === Syntax.Program) {
          if (this.body.length > 0) {
            return;
          }
        }
        if (this.type === Syntax.BlockStatement && this.body.length === 0) {
          innerComments = [];
          for (i = extra.leadingComments.length - 1; i >= 0; --i) {
            comment = extra.leadingComments[i];
            if (this.range[1] >= comment.range[1]) {
              innerComments.unshift(comment);
              extra.leadingComments.splice(i, 1);
              extra.trailingComments.splice(i, 1);
            }
          }
          if (innerComments.length) {
            this.innerComments = innerComments;
            return;
          }
        }
        if (extra.trailingComments.length > 0) {
          trailingComments = [];
          for (i = extra.trailingComments.length - 1; i >= 0; --i) {
            comment = extra.trailingComments[i];
            if (comment.range[0] >= this.range[1]) {
              trailingComments.unshift(comment);
              extra.trailingComments.splice(i, 1);
            }
          }
          extra.trailingComments = [];
        } else {
          if (last && last.trailingComments && last.trailingComments[0].range[0] >= this.range[1]) {
            trailingComments = last.trailingComments;
            delete last.trailingComments;
          }
        }
        while (last && last.range[0] >= this.range[0]) {
          lastChild = bottomRight.pop();
          last = bottomRight[bottomRight.length - 1];
        }
        if (lastChild) {
          if (lastChild.leadingComments) {
            leadingComments = [];
            for (i = lastChild.leadingComments.length - 1; i >= 0; --i) {
              comment = lastChild.leadingComments[i];
              if (comment.range[1] <= this.range[0]) {
                leadingComments.unshift(comment);
                lastChild.leadingComments.splice(i, 1);
              }
            }
            if (!lastChild.leadingComments.length) {
              lastChild.leadingComments = undefined;
            }
          }
        } else if (extra.leadingComments.length > 0) {
          leadingComments = [];
          for (i = extra.leadingComments.length - 1; i >= 0; --i) {
            comment = extra.leadingComments[i];
            if (comment.range[1] <= this.range[0]) {
              leadingComments.unshift(comment);
              extra.leadingComments.splice(i, 1);
            }
          }
        }
        if (leadingComments && leadingComments.length > 0) {
          this.leadingComments = leadingComments;
        }
        if (trailingComments && trailingComments.length > 0) {
          this.trailingComments = trailingComments;
        }
        bottomRight.push(this);
      },
      finish: function() {
        if (extra.range) {
          this.range[1] = lastIndex;
        }
        if (extra.loc) {
          this.loc.end = {
            line: lastLineNumber,
            column: lastIndex - lastLineStart
          };
          if (extra.source) {
            this.loc.source = extra.source;
          }
        }
        if (extra.attachComment) {
          this.processComment();
        }
      },
      finishArrayExpression: function(elements) {
        this.type = Syntax.ArrayExpression;
        this.elements = elements;
        this.finish();
        return this;
      },
      finishArrayPattern: function(elements) {
        this.type = Syntax.ArrayPattern;
        this.elements = elements;
        this.finish();
        return this;
      },
      finishArrowFunctionExpression: function(params, defaults, body, expression) {
        this.type = Syntax.ArrowFunctionExpression;
        this.id = null;
        this.params = params;
        this.defaults = defaults;
        this.body = body;
        this.generator = false;
        this.expression = expression;
        this.finish();
        return this;
      },
      finishAssignmentExpression: function(operator, left, right) {
        this.type = Syntax.AssignmentExpression;
        this.operator = operator;
        this.left = left;
        this.right = right;
        this.finish();
        return this;
      },
      finishAssignmentPattern: function(left, right) {
        this.type = Syntax.AssignmentPattern;
        this.left = left;
        this.right = right;
        this.finish();
        return this;
      },
      finishBinaryExpression: function(operator, left, right) {
        this.type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression : Syntax.BinaryExpression;
        this.operator = operator;
        this.left = left;
        this.right = right;
        this.finish();
        return this;
      },
      finishBlockStatement: function(body) {
        this.type = Syntax.BlockStatement;
        this.body = body;
        this.finish();
        return this;
      },
      finishBreakStatement: function(label) {
        this.type = Syntax.BreakStatement;
        this.label = label;
        this.finish();
        return this;
      },
      finishCallExpression: function(callee, args) {
        this.type = Syntax.CallExpression;
        this.callee = callee;
        this.arguments = args;
        this.finish();
        return this;
      },
      finishCatchClause: function(param, body) {
        this.type = Syntax.CatchClause;
        this.param = param;
        this.body = body;
        this.finish();
        return this;
      },
      finishClassBody: function(body) {
        this.type = Syntax.ClassBody;
        this.body = body;
        this.finish();
        return this;
      },
      finishClassDeclaration: function(id, superClass, body) {
        this.type = Syntax.ClassDeclaration;
        this.id = id;
        this.superClass = superClass;
        this.body = body;
        this.finish();
        return this;
      },
      finishClassExpression: function(id, superClass, body) {
        this.type = Syntax.ClassExpression;
        this.id = id;
        this.superClass = superClass;
        this.body = body;
        this.finish();
        return this;
      },
      finishConditionalExpression: function(test, consequent, alternate) {
        this.type = Syntax.ConditionalExpression;
        this.test = test;
        this.consequent = consequent;
        this.alternate = alternate;
        this.finish();
        return this;
      },
      finishContinueStatement: function(label) {
        this.type = Syntax.ContinueStatement;
        this.label = label;
        this.finish();
        return this;
      },
      finishDebuggerStatement: function() {
        this.type = Syntax.DebuggerStatement;
        this.finish();
        return this;
      },
      finishDoWhileStatement: function(body, test) {
        this.type = Syntax.DoWhileStatement;
        this.body = body;
        this.test = test;
        this.finish();
        return this;
      },
      finishEmptyStatement: function() {
        this.type = Syntax.EmptyStatement;
        this.finish();
        return this;
      },
      finishExpressionStatement: function(expression) {
        this.type = Syntax.ExpressionStatement;
        this.expression = expression;
        this.finish();
        return this;
      },
      finishForStatement: function(init, test, update, body) {
        this.type = Syntax.ForStatement;
        this.init = init;
        this.test = test;
        this.update = update;
        this.body = body;
        this.finish();
        return this;
      },
      finishForOfStatement: function(left, right, body) {
        this.type = Syntax.ForOfStatement;
        this.left = left;
        this.right = right;
        this.body = body;
        this.finish();
        return this;
      },
      finishForInStatement: function(left, right, body) {
        this.type = Syntax.ForInStatement;
        this.left = left;
        this.right = right;
        this.body = body;
        this.each = false;
        this.finish();
        return this;
      },
      finishFunctionDeclaration: function(id, params, defaults, body, generator) {
        this.type = Syntax.FunctionDeclaration;
        this.id = id;
        this.params = params;
        this.defaults = defaults;
        this.body = body;
        this.generator = generator;
        this.expression = false;
        this.finish();
        return this;
      },
      finishFunctionExpression: function(id, params, defaults, body, generator) {
        this.type = Syntax.FunctionExpression;
        this.id = id;
        this.params = params;
        this.defaults = defaults;
        this.body = body;
        this.generator = generator;
        this.expression = false;
        this.finish();
        return this;
      },
      finishIdentifier: function(name) {
        this.type = Syntax.Identifier;
        this.name = name;
        this.finish();
        return this;
      },
      finishIfStatement: function(test, consequent, alternate) {
        this.type = Syntax.IfStatement;
        this.test = test;
        this.consequent = consequent;
        this.alternate = alternate;
        this.finish();
        return this;
      },
      finishLabeledStatement: function(label, body) {
        this.type = Syntax.LabeledStatement;
        this.label = label;
        this.body = body;
        this.finish();
        return this;
      },
      finishLiteral: function(token) {
        this.type = Syntax.Literal;
        this.value = token.value;
        this.raw = source.slice(token.start, token.end);
        if (token.regex) {
          this.regex = token.regex;
        }
        this.finish();
        return this;
      },
      finishMemberExpression: function(accessor, object, property) {
        this.type = Syntax.MemberExpression;
        this.computed = accessor === '[';
        this.object = object;
        this.property = property;
        this.finish();
        return this;
      },
      finishMetaProperty: function(meta, property) {
        this.type = Syntax.MetaProperty;
        this.meta = meta;
        this.property = property;
        this.finish();
        return this;
      },
      finishNewExpression: function(callee, args) {
        this.type = Syntax.NewExpression;
        this.callee = callee;
        this.arguments = args;
        this.finish();
        return this;
      },
      finishObjectExpression: function(properties) {
        this.type = Syntax.ObjectExpression;
        this.properties = properties;
        this.finish();
        return this;
      },
      finishObjectPattern: function(properties) {
        this.type = Syntax.ObjectPattern;
        this.properties = properties;
        this.finish();
        return this;
      },
      finishPostfixExpression: function(operator, argument) {
        this.type = Syntax.UpdateExpression;
        this.operator = operator;
        this.argument = argument;
        this.prefix = false;
        this.finish();
        return this;
      },
      finishProgram: function(body, sourceType) {
        this.type = Syntax.Program;
        this.body = body;
        this.sourceType = sourceType;
        this.finish();
        return this;
      },
      finishProperty: function(kind, key, computed, value, method, shorthand) {
        this.type = Syntax.Property;
        this.key = key;
        this.computed = computed;
        this.value = value;
        this.kind = kind;
        this.method = method;
        this.shorthand = shorthand;
        this.finish();
        return this;
      },
      finishRestElement: function(argument) {
        this.type = Syntax.RestElement;
        this.argument = argument;
        this.finish();
        return this;
      },
      finishReturnStatement: function(argument) {
        this.type = Syntax.ReturnStatement;
        this.argument = argument;
        this.finish();
        return this;
      },
      finishSequenceExpression: function(expressions) {
        this.type = Syntax.SequenceExpression;
        this.expressions = expressions;
        this.finish();
        return this;
      },
      finishSpreadElement: function(argument) {
        this.type = Syntax.SpreadElement;
        this.argument = argument;
        this.finish();
        return this;
      },
      finishSwitchCase: function(test, consequent) {
        this.type = Syntax.SwitchCase;
        this.test = test;
        this.consequent = consequent;
        this.finish();
        return this;
      },
      finishSuper: function() {
        this.type = Syntax.Super;
        this.finish();
        return this;
      },
      finishSwitchStatement: function(discriminant, cases) {
        this.type = Syntax.SwitchStatement;
        this.discriminant = discriminant;
        this.cases = cases;
        this.finish();
        return this;
      },
      finishTaggedTemplateExpression: function(tag, quasi) {
        this.type = Syntax.TaggedTemplateExpression;
        this.tag = tag;
        this.quasi = quasi;
        this.finish();
        return this;
      },
      finishTemplateElement: function(value, tail) {
        this.type = Syntax.TemplateElement;
        this.value = value;
        this.tail = tail;
        this.finish();
        return this;
      },
      finishTemplateLiteral: function(quasis, expressions) {
        this.type = Syntax.TemplateLiteral;
        this.quasis = quasis;
        this.expressions = expressions;
        this.finish();
        return this;
      },
      finishThisExpression: function() {
        this.type = Syntax.ThisExpression;
        this.finish();
        return this;
      },
      finishThrowStatement: function(argument) {
        this.type = Syntax.ThrowStatement;
        this.argument = argument;
        this.finish();
        return this;
      },
      finishTryStatement: function(block, handler, finalizer) {
        this.type = Syntax.TryStatement;
        this.block = block;
        this.guardedHandlers = [];
        this.handlers = handler ? [handler] : [];
        this.handler = handler;
        this.finalizer = finalizer;
        this.finish();
        return this;
      },
      finishUnaryExpression: function(operator, argument) {
        this.type = (operator === '++' || operator === '--') ? Syntax.UpdateExpression : Syntax.UnaryExpression;
        this.operator = operator;
        this.argument = argument;
        this.prefix = true;
        this.finish();
        return this;
      },
      finishVariableDeclaration: function(declarations) {
        this.type = Syntax.VariableDeclaration;
        this.declarations = declarations;
        this.kind = 'var';
        this.finish();
        return this;
      },
      finishLexicalDeclaration: function(declarations, kind) {
        this.type = Syntax.VariableDeclaration;
        this.declarations = declarations;
        this.kind = kind;
        this.finish();
        return this;
      },
      finishVariableDeclarator: function(id, init) {
        this.type = Syntax.VariableDeclarator;
        this.id = id;
        this.init = init;
        this.finish();
        return this;
      },
      finishWhileStatement: function(test, body) {
        this.type = Syntax.WhileStatement;
        this.test = test;
        this.body = body;
        this.finish();
        return this;
      },
      finishWithStatement: function(object, body) {
        this.type = Syntax.WithStatement;
        this.object = object;
        this.body = body;
        this.finish();
        return this;
      },
      finishExportSpecifier: function(local, exported) {
        this.type = Syntax.ExportSpecifier;
        this.exported = exported || local;
        this.local = local;
        this.finish();
        return this;
      },
      finishImportDefaultSpecifier: function(local) {
        this.type = Syntax.ImportDefaultSpecifier;
        this.local = local;
        this.finish();
        return this;
      },
      finishImportNamespaceSpecifier: function(local) {
        this.type = Syntax.ImportNamespaceSpecifier;
        this.local = local;
        this.finish();
        return this;
      },
      finishExportNamedDeclaration: function(declaration, specifiers, src) {
        this.type = Syntax.ExportNamedDeclaration;
        this.declaration = declaration;
        this.specifiers = specifiers;
        this.source = src;
        this.finish();
        return this;
      },
      finishExportDefaultDeclaration: function(declaration) {
        this.type = Syntax.ExportDefaultDeclaration;
        this.declaration = declaration;
        this.finish();
        return this;
      },
      finishExportAllDeclaration: function(src) {
        this.type = Syntax.ExportAllDeclaration;
        this.source = src;
        this.finish();
        return this;
      },
      finishImportSpecifier: function(local, imported) {
        this.type = Syntax.ImportSpecifier;
        this.local = local || imported;
        this.imported = imported;
        this.finish();
        return this;
      },
      finishImportDeclaration: function(specifiers, src) {
        this.type = Syntax.ImportDeclaration;
        this.specifiers = specifiers;
        this.source = src;
        this.finish();
        return this;
      },
      finishYieldExpression: function(argument, delegate) {
        this.type = Syntax.YieldExpression;
        this.argument = argument;
        this.delegate = delegate;
        this.finish();
        return this;
      }
    };
    function recordError(error) {
      var e,
          existing;
      for (e = 0; e < extra.errors.length; e++) {
        existing = extra.errors[e];
        if (existing.index === error.index && existing.message === error.message) {
          return;
        }
      }
      extra.errors.push(error);
    }
    function constructError(msg, column) {
      var error = new Error(msg);
      try {
        throw error;
      } catch (base) {
        if (Object.create && Object.defineProperty) {
          error = Object.create(base);
          Object.defineProperty(error, 'column', {value: column});
        }
      } finally {
        return error;
      }
    }
    function createError(line, pos, description) {
      var msg,
          column,
          error;
      msg = 'Line ' + line + ': ' + description;
      column = pos - (scanning ? lineStart : lastLineStart) + 1;
      error = constructError(msg, column);
      error.lineNumber = line;
      error.description = description;
      error.index = pos;
      return error;
    }
    function throwError(messageFormat) {
      var args,
          msg;
      args = Array.prototype.slice.call(arguments, 1);
      msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
        assert(idx < args.length, 'Message reference must be in range');
        return args[idx];
      });
      throw createError(lastLineNumber, lastIndex, msg);
    }
    function tolerateError(messageFormat) {
      var args,
          msg,
          error;
      args = Array.prototype.slice.call(arguments, 1);
      msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
        assert(idx < args.length, 'Message reference must be in range');
        return args[idx];
      });
      error = createError(lineNumber, lastIndex, msg);
      if (extra.errors) {
        recordError(error);
      } else {
        throw error;
      }
    }
    function unexpectedTokenError(token, message) {
      var value,
          msg = message || Messages.UnexpectedToken;
      if (token) {
        if (!message) {
          msg = (token.type === Token.EOF) ? Messages.UnexpectedEOS : (token.type === Token.Identifier) ? Messages.UnexpectedIdentifier : (token.type === Token.NumericLiteral) ? Messages.UnexpectedNumber : (token.type === Token.StringLiteral) ? Messages.UnexpectedString : (token.type === Token.Template) ? Messages.UnexpectedTemplate : Messages.UnexpectedToken;
          if (token.type === Token.Keyword) {
            if (isFutureReservedWord(token.value)) {
              msg = Messages.UnexpectedReserved;
            } else if (strict && isStrictModeReservedWord(token.value)) {
              msg = Messages.StrictReservedWord;
            }
          }
        }
        value = (token.type === Token.Template) ? token.value.raw : token.value;
      } else {
        value = 'ILLEGAL';
      }
      msg = msg.replace('%0', value);
      return (token && typeof token.lineNumber === 'number') ? createError(token.lineNumber, token.start, msg) : createError(scanning ? lineNumber : lastLineNumber, scanning ? index : lastIndex, msg);
    }
    function throwUnexpectedToken(token, message) {
      throw unexpectedTokenError(token, message);
    }
    function tolerateUnexpectedToken(token, message) {
      var error = unexpectedTokenError(token, message);
      if (extra.errors) {
        recordError(error);
      } else {
        throw error;
      }
    }
    function expect(value) {
      var token = lex();
      if (token.type !== Token.Punctuator || token.value !== value) {
        throwUnexpectedToken(token);
      }
    }
    function expectCommaSeparator() {
      var token;
      if (extra.errors) {
        token = lookahead;
        if (token.type === Token.Punctuator && token.value === ',') {
          lex();
        } else if (token.type === Token.Punctuator && token.value === ';') {
          lex();
          tolerateUnexpectedToken(token);
        } else {
          tolerateUnexpectedToken(token, Messages.UnexpectedToken);
        }
      } else {
        expect(',');
      }
    }
    function expectKeyword(keyword) {
      var token = lex();
      if (token.type !== Token.Keyword || token.value !== keyword) {
        throwUnexpectedToken(token);
      }
    }
    function match(value) {
      return lookahead.type === Token.Punctuator && lookahead.value === value;
    }
    function matchKeyword(keyword) {
      return lookahead.type === Token.Keyword && lookahead.value === keyword;
    }
    function matchContextualKeyword(keyword) {
      return lookahead.type === Token.Identifier && lookahead.value === keyword;
    }
    function matchAssign() {
      var op;
      if (lookahead.type !== Token.Punctuator) {
        return false;
      }
      op = lookahead.value;
      return op === '=' || op === '*=' || op === '/=' || op === '%=' || op === '+=' || op === '-=' || op === '<<=' || op === '>>=' || op === '>>>=' || op === '&=' || op === '^=' || op === '|=';
    }
    function consumeSemicolon() {
      if (source.charCodeAt(startIndex) === 0x3B || match(';')) {
        lex();
        return;
      }
      if (hasLineTerminator) {
        return;
      }
      lastIndex = startIndex;
      lastLineNumber = startLineNumber;
      lastLineStart = startLineStart;
      if (lookahead.type !== Token.EOF && !match('}')) {
        throwUnexpectedToken(lookahead);
      }
    }
    function isolateCoverGrammar(parser) {
      var oldIsBindingElement = isBindingElement,
          oldIsAssignmentTarget = isAssignmentTarget,
          oldFirstCoverInitializedNameError = firstCoverInitializedNameError,
          result;
      isBindingElement = true;
      isAssignmentTarget = true;
      firstCoverInitializedNameError = null;
      result = parser();
      if (firstCoverInitializedNameError !== null) {
        throwUnexpectedToken(firstCoverInitializedNameError);
      }
      isBindingElement = oldIsBindingElement;
      isAssignmentTarget = oldIsAssignmentTarget;
      firstCoverInitializedNameError = oldFirstCoverInitializedNameError;
      return result;
    }
    function inheritCoverGrammar(parser) {
      var oldIsBindingElement = isBindingElement,
          oldIsAssignmentTarget = isAssignmentTarget,
          oldFirstCoverInitializedNameError = firstCoverInitializedNameError,
          result;
      isBindingElement = true;
      isAssignmentTarget = true;
      firstCoverInitializedNameError = null;
      result = parser();
      isBindingElement = isBindingElement && oldIsBindingElement;
      isAssignmentTarget = isAssignmentTarget && oldIsAssignmentTarget;
      firstCoverInitializedNameError = oldFirstCoverInitializedNameError || firstCoverInitializedNameError;
      return result;
    }
    function parseArrayPattern(params, kind) {
      var node = new Node(),
          elements = [],
          rest,
          restNode;
      expect('[');
      while (!match(']')) {
        if (match(',')) {
          lex();
          elements.push(null);
        } else {
          if (match('...')) {
            restNode = new Node();
            lex();
            params.push(lookahead);
            rest = parseVariableIdentifier(kind);
            elements.push(restNode.finishRestElement(rest));
            break;
          } else {
            elements.push(parsePatternWithDefault(params, kind));
          }
          if (!match(']')) {
            expect(',');
          }
        }
      }
      expect(']');
      return node.finishArrayPattern(elements);
    }
    function parsePropertyPattern(params, kind) {
      var node = new Node(),
          key,
          keyToken,
          computed = match('['),
          init;
      if (lookahead.type === Token.Identifier) {
        keyToken = lookahead;
        key = parseVariableIdentifier();
        if (match('=')) {
          params.push(keyToken);
          lex();
          init = parseAssignmentExpression();
          return node.finishProperty('init', key, false, new WrappingNode(keyToken).finishAssignmentPattern(key, init), false, true);
        } else if (!match(':')) {
          params.push(keyToken);
          return node.finishProperty('init', key, false, key, false, true);
        }
      } else {
        key = parseObjectPropertyKey();
      }
      expect(':');
      init = parsePatternWithDefault(params, kind);
      return node.finishProperty('init', key, computed, init, false, false);
    }
    function parseObjectPattern(params, kind) {
      var node = new Node(),
          properties = [];
      expect('{');
      while (!match('}')) {
        properties.push(parsePropertyPattern(params, kind));
        if (!match('}')) {
          expect(',');
        }
      }
      lex();
      return node.finishObjectPattern(properties);
    }
    function parsePattern(params, kind) {
      if (match('[')) {
        return parseArrayPattern(params, kind);
      } else if (match('{')) {
        return parseObjectPattern(params, kind);
      } else if (matchKeyword('let')) {
        if (kind === 'const' || kind === 'let') {
          tolerateUnexpectedToken(lookahead, Messages.UnexpectedToken);
        }
      }
      params.push(lookahead);
      return parseVariableIdentifier(kind);
    }
    function parsePatternWithDefault(params, kind) {
      var startToken = lookahead,
          pattern,
          previousAllowYield,
          right;
      pattern = parsePattern(params, kind);
      if (match('=')) {
        lex();
        previousAllowYield = state.allowYield;
        state.allowYield = true;
        right = isolateCoverGrammar(parseAssignmentExpression);
        state.allowYield = previousAllowYield;
        pattern = new WrappingNode(startToken).finishAssignmentPattern(pattern, right);
      }
      return pattern;
    }
    function parseArrayInitializer() {
      var elements = [],
          node = new Node(),
          restSpread;
      expect('[');
      while (!match(']')) {
        if (match(',')) {
          lex();
          elements.push(null);
        } else if (match('...')) {
          restSpread = new Node();
          lex();
          restSpread.finishSpreadElement(inheritCoverGrammar(parseAssignmentExpression));
          if (!match(']')) {
            isAssignmentTarget = isBindingElement = false;
            expect(',');
          }
          elements.push(restSpread);
        } else {
          elements.push(inheritCoverGrammar(parseAssignmentExpression));
          if (!match(']')) {
            expect(',');
          }
        }
      }
      lex();
      return node.finishArrayExpression(elements);
    }
    function parsePropertyFunction(node, paramInfo, isGenerator) {
      var previousStrict,
          body;
      isAssignmentTarget = isBindingElement = false;
      previousStrict = strict;
      body = isolateCoverGrammar(parseFunctionSourceElements);
      if (strict && paramInfo.firstRestricted) {
        tolerateUnexpectedToken(paramInfo.firstRestricted, paramInfo.message);
      }
      if (strict && paramInfo.stricted) {
        tolerateUnexpectedToken(paramInfo.stricted, paramInfo.message);
      }
      strict = previousStrict;
      return node.finishFunctionExpression(null, paramInfo.params, paramInfo.defaults, body, isGenerator);
    }
    function parsePropertyMethodFunction() {
      var params,
          method,
          node = new Node(),
          previousAllowYield = state.allowYield;
      state.allowYield = false;
      params = parseParams();
      state.allowYield = previousAllowYield;
      state.allowYield = false;
      method = parsePropertyFunction(node, params, false);
      state.allowYield = previousAllowYield;
      return method;
    }
    function parseObjectPropertyKey() {
      var token,
          node = new Node(),
          expr;
      token = lex();
      switch (token.type) {
        case Token.StringLiteral:
        case Token.NumericLiteral:
          if (strict && token.octal) {
            tolerateUnexpectedToken(token, Messages.StrictOctalLiteral);
          }
          return node.finishLiteral(token);
        case Token.Identifier:
        case Token.BooleanLiteral:
        case Token.NullLiteral:
        case Token.Keyword:
          return node.finishIdentifier(token.value);
        case Token.Punctuator:
          if (token.value === '[') {
            expr = isolateCoverGrammar(parseAssignmentExpression);
            expect(']');
            return expr;
          }
          break;
      }
      throwUnexpectedToken(token);
    }
    function lookaheadPropertyName() {
      switch (lookahead.type) {
        case Token.Identifier:
        case Token.StringLiteral:
        case Token.BooleanLiteral:
        case Token.NullLiteral:
        case Token.NumericLiteral:
        case Token.Keyword:
          return true;
        case Token.Punctuator:
          return lookahead.value === '[';
      }
      return false;
    }
    function tryParseMethodDefinition(token, key, computed, node) {
      var value,
          options,
          methodNode,
          params,
          previousAllowYield = state.allowYield;
      if (token.type === Token.Identifier) {
        if (token.value === 'get' && lookaheadPropertyName()) {
          computed = match('[');
          key = parseObjectPropertyKey();
          methodNode = new Node();
          expect('(');
          expect(')');
          state.allowYield = false;
          value = parsePropertyFunction(methodNode, {
            params: [],
            defaults: [],
            stricted: null,
            firstRestricted: null,
            message: null
          }, false);
          state.allowYield = previousAllowYield;
          return node.finishProperty('get', key, computed, value, false, false);
        } else if (token.value === 'set' && lookaheadPropertyName()) {
          computed = match('[');
          key = parseObjectPropertyKey();
          methodNode = new Node();
          expect('(');
          options = {
            params: [],
            defaultCount: 0,
            defaults: [],
            firstRestricted: null,
            paramSet: {}
          };
          if (match(')')) {
            tolerateUnexpectedToken(lookahead);
          } else {
            state.allowYield = false;
            parseParam(options);
            state.allowYield = previousAllowYield;
            if (options.defaultCount === 0) {
              options.defaults = [];
            }
          }
          expect(')');
          state.allowYield = false;
          value = parsePropertyFunction(methodNode, options, false);
          state.allowYield = previousAllowYield;
          return node.finishProperty('set', key, computed, value, false, false);
        }
      } else if (token.type === Token.Punctuator && token.value === '*' && lookaheadPropertyName()) {
        computed = match('[');
        key = parseObjectPropertyKey();
        methodNode = new Node();
        state.allowYield = true;
        params = parseParams();
        state.allowYield = previousAllowYield;
        state.allowYield = false;
        value = parsePropertyFunction(methodNode, params, true);
        state.allowYield = previousAllowYield;
        return node.finishProperty('init', key, computed, value, true, false);
      }
      if (key && match('(')) {
        value = parsePropertyMethodFunction();
        return node.finishProperty('init', key, computed, value, true, false);
      }
      return null;
    }
    function parseObjectProperty(hasProto) {
      var token = lookahead,
          node = new Node(),
          computed,
          key,
          maybeMethod,
          proto,
          value;
      computed = match('[');
      if (match('*')) {
        lex();
      } else {
        key = parseObjectPropertyKey();
      }
      maybeMethod = tryParseMethodDefinition(token, key, computed, node);
      if (maybeMethod) {
        return maybeMethod;
      }
      if (!key) {
        throwUnexpectedToken(lookahead);
      }
      if (!computed) {
        proto = (key.type === Syntax.Identifier && key.name === '__proto__') || (key.type === Syntax.Literal && key.value === '__proto__');
        if (hasProto.value && proto) {
          tolerateError(Messages.DuplicateProtoProperty);
        }
        hasProto.value |= proto;
      }
      if (match(':')) {
        lex();
        value = inheritCoverGrammar(parseAssignmentExpression);
        return node.finishProperty('init', key, computed, value, false, false);
      }
      if (token.type === Token.Identifier) {
        if (match('=')) {
          firstCoverInitializedNameError = lookahead;
          lex();
          value = isolateCoverGrammar(parseAssignmentExpression);
          return node.finishProperty('init', key, computed, new WrappingNode(token).finishAssignmentPattern(key, value), false, true);
        }
        return node.finishProperty('init', key, computed, key, false, true);
      }
      throwUnexpectedToken(lookahead);
    }
    function parseObjectInitializer() {
      var properties = [],
          hasProto = {value: false},
          node = new Node();
      expect('{');
      while (!match('}')) {
        properties.push(parseObjectProperty(hasProto));
        if (!match('}')) {
          expectCommaSeparator();
        }
      }
      expect('}');
      return node.finishObjectExpression(properties);
    }
    function reinterpretExpressionAsPattern(expr) {
      var i;
      switch (expr.type) {
        case Syntax.Identifier:
        case Syntax.MemberExpression:
        case Syntax.RestElement:
        case Syntax.AssignmentPattern:
          break;
        case Syntax.SpreadElement:
          expr.type = Syntax.RestElement;
          reinterpretExpressionAsPattern(expr.argument);
          break;
        case Syntax.ArrayExpression:
          expr.type = Syntax.ArrayPattern;
          for (i = 0; i < expr.elements.length; i++) {
            if (expr.elements[i] !== null) {
              reinterpretExpressionAsPattern(expr.elements[i]);
            }
          }
          break;
        case Syntax.ObjectExpression:
          expr.type = Syntax.ObjectPattern;
          for (i = 0; i < expr.properties.length; i++) {
            reinterpretExpressionAsPattern(expr.properties[i].value);
          }
          break;
        case Syntax.AssignmentExpression:
          expr.type = Syntax.AssignmentPattern;
          reinterpretExpressionAsPattern(expr.left);
          break;
        default:
          break;
      }
    }
    function parseTemplateElement(option) {
      var node,
          token;
      if (lookahead.type !== Token.Template || (option.head && !lookahead.head)) {
        throwUnexpectedToken();
      }
      node = new Node();
      token = lex();
      return node.finishTemplateElement({
        raw: token.value.raw,
        cooked: token.value.cooked
      }, token.tail);
    }
    function parseTemplateLiteral() {
      var quasi,
          quasis,
          expressions,
          node = new Node();
      quasi = parseTemplateElement({head: true});
      quasis = [quasi];
      expressions = [];
      while (!quasi.tail) {
        expressions.push(parseExpression());
        quasi = parseTemplateElement({head: false});
        quasis.push(quasi);
      }
      return node.finishTemplateLiteral(quasis, expressions);
    }
    function parseGroupExpression() {
      var expr,
          expressions,
          startToken,
          i,
          params = [];
      expect('(');
      if (match(')')) {
        lex();
        if (!match('=>')) {
          expect('=>');
        }
        return {
          type: PlaceHolders.ArrowParameterPlaceHolder,
          params: [],
          rawParams: []
        };
      }
      startToken = lookahead;
      if (match('...')) {
        expr = parseRestElement(params);
        expect(')');
        if (!match('=>')) {
          expect('=>');
        }
        return {
          type: PlaceHolders.ArrowParameterPlaceHolder,
          params: [expr]
        };
      }
      isBindingElement = true;
      expr = inheritCoverGrammar(parseAssignmentExpression);
      if (match(',')) {
        isAssignmentTarget = false;
        expressions = [expr];
        while (startIndex < length) {
          if (!match(',')) {
            break;
          }
          lex();
          if (match('...')) {
            if (!isBindingElement) {
              throwUnexpectedToken(lookahead);
            }
            expressions.push(parseRestElement(params));
            expect(')');
            if (!match('=>')) {
              expect('=>');
            }
            isBindingElement = false;
            for (i = 0; i < expressions.length; i++) {
              reinterpretExpressionAsPattern(expressions[i]);
            }
            return {
              type: PlaceHolders.ArrowParameterPlaceHolder,
              params: expressions
            };
          }
          expressions.push(inheritCoverGrammar(parseAssignmentExpression));
        }
        expr = new WrappingNode(startToken).finishSequenceExpression(expressions);
      }
      expect(')');
      if (match('=>')) {
        if (expr.type === Syntax.Identifier && expr.name === 'yield') {
          return {
            type: PlaceHolders.ArrowParameterPlaceHolder,
            params: [expr]
          };
        }
        if (!isBindingElement) {
          throwUnexpectedToken(lookahead);
        }
        if (expr.type === Syntax.SequenceExpression) {
          for (i = 0; i < expr.expressions.length; i++) {
            reinterpretExpressionAsPattern(expr.expressions[i]);
          }
        } else {
          reinterpretExpressionAsPattern(expr);
        }
        expr = {
          type: PlaceHolders.ArrowParameterPlaceHolder,
          params: expr.type === Syntax.SequenceExpression ? expr.expressions : [expr]
        };
      }
      isBindingElement = false;
      return expr;
    }
    function parsePrimaryExpression() {
      var type,
          token,
          expr,
          node;
      if (match('(')) {
        isBindingElement = false;
        return inheritCoverGrammar(parseGroupExpression);
      }
      if (match('[')) {
        return inheritCoverGrammar(parseArrayInitializer);
      }
      if (match('{')) {
        return inheritCoverGrammar(parseObjectInitializer);
      }
      type = lookahead.type;
      node = new Node();
      if (type === Token.Identifier) {
        if (state.sourceType === 'module' && lookahead.value === 'await') {
          tolerateUnexpectedToken(lookahead);
        }
        expr = node.finishIdentifier(lex().value);
      } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
        isAssignmentTarget = isBindingElement = false;
        if (strict && lookahead.octal) {
          tolerateUnexpectedToken(lookahead, Messages.StrictOctalLiteral);
        }
        expr = node.finishLiteral(lex());
      } else if (type === Token.Keyword) {
        if (!strict && state.allowYield && matchKeyword('yield')) {
          return parseNonComputedProperty();
        }
        if (!strict && matchKeyword('let')) {
          return node.finishIdentifier(lex().value);
        }
        isAssignmentTarget = isBindingElement = false;
        if (matchKeyword('function')) {
          return parseFunctionExpression();
        }
        if (matchKeyword('this')) {
          lex();
          return node.finishThisExpression();
        }
        if (matchKeyword('class')) {
          return parseClassExpression();
        }
        throwUnexpectedToken(lex());
      } else if (type === Token.BooleanLiteral) {
        isAssignmentTarget = isBindingElement = false;
        token = lex();
        token.value = (token.value === 'true');
        expr = node.finishLiteral(token);
      } else if (type === Token.NullLiteral) {
        isAssignmentTarget = isBindingElement = false;
        token = lex();
        token.value = null;
        expr = node.finishLiteral(token);
      } else if (match('/') || match('/=')) {
        isAssignmentTarget = isBindingElement = false;
        index = startIndex;
        if (typeof extra.tokens !== 'undefined') {
          token = collectRegex();
        } else {
          token = scanRegExp();
        }
        lex();
        expr = node.finishLiteral(token);
      } else if (type === Token.Template) {
        expr = parseTemplateLiteral();
      } else {
        throwUnexpectedToken(lex());
      }
      return expr;
    }
    function parseArguments() {
      var args = [],
          expr;
      expect('(');
      if (!match(')')) {
        while (startIndex < length) {
          if (match('...')) {
            expr = new Node();
            lex();
            expr.finishSpreadElement(isolateCoverGrammar(parseAssignmentExpression));
          } else {
            expr = isolateCoverGrammar(parseAssignmentExpression);
          }
          args.push(expr);
          if (match(')')) {
            break;
          }
          expectCommaSeparator();
        }
      }
      expect(')');
      return args;
    }
    function parseNonComputedProperty() {
      var token,
          node = new Node();
      token = lex();
      if (!isIdentifierName(token)) {
        throwUnexpectedToken(token);
      }
      return node.finishIdentifier(token.value);
    }
    function parseNonComputedMember() {
      expect('.');
      return parseNonComputedProperty();
    }
    function parseComputedMember() {
      var expr;
      expect('[');
      expr = isolateCoverGrammar(parseExpression);
      expect(']');
      return expr;
    }
    function parseNewExpression() {
      var callee,
          args,
          node = new Node();
      expectKeyword('new');
      if (match('.')) {
        lex();
        if (lookahead.type === Token.Identifier && lookahead.value === 'target') {
          if (state.inFunctionBody) {
            lex();
            return node.finishMetaProperty('new', 'target');
          }
        }
        throwUnexpectedToken(lookahead);
      }
      callee = isolateCoverGrammar(parseLeftHandSideExpression);
      args = match('(') ? parseArguments() : [];
      isAssignmentTarget = isBindingElement = false;
      return node.finishNewExpression(callee, args);
    }
    function parseLeftHandSideExpressionAllowCall() {
      var quasi,
          expr,
          args,
          property,
          startToken,
          previousAllowIn = state.allowIn;
      startToken = lookahead;
      state.allowIn = true;
      if (matchKeyword('super') && state.inFunctionBody) {
        expr = new Node();
        lex();
        expr = expr.finishSuper();
        if (!match('(') && !match('.') && !match('[')) {
          throwUnexpectedToken(lookahead);
        }
      } else {
        expr = inheritCoverGrammar(matchKeyword('new') ? parseNewExpression : parsePrimaryExpression);
      }
      for (; ; ) {
        if (match('.')) {
          isBindingElement = false;
          isAssignmentTarget = true;
          property = parseNonComputedMember();
          expr = new WrappingNode(startToken).finishMemberExpression('.', expr, property);
        } else if (match('(')) {
          isBindingElement = false;
          isAssignmentTarget = false;
          args = parseArguments();
          expr = new WrappingNode(startToken).finishCallExpression(expr, args);
        } else if (match('[')) {
          isBindingElement = false;
          isAssignmentTarget = true;
          property = parseComputedMember();
          expr = new WrappingNode(startToken).finishMemberExpression('[', expr, property);
        } else if (lookahead.type === Token.Template && lookahead.head) {
          quasi = parseTemplateLiteral();
          expr = new WrappingNode(startToken).finishTaggedTemplateExpression(expr, quasi);
        } else {
          break;
        }
      }
      state.allowIn = previousAllowIn;
      return expr;
    }
    function parseLeftHandSideExpression() {
      var quasi,
          expr,
          property,
          startToken;
      assert(state.allowIn, 'callee of new expression always allow in keyword.');
      startToken = lookahead;
      if (matchKeyword('super') && state.inFunctionBody) {
        expr = new Node();
        lex();
        expr = expr.finishSuper();
        if (!match('[') && !match('.')) {
          throwUnexpectedToken(lookahead);
        }
      } else {
        expr = inheritCoverGrammar(matchKeyword('new') ? parseNewExpression : parsePrimaryExpression);
      }
      for (; ; ) {
        if (match('[')) {
          isBindingElement = false;
          isAssignmentTarget = true;
          property = parseComputedMember();
          expr = new WrappingNode(startToken).finishMemberExpression('[', expr, property);
        } else if (match('.')) {
          isBindingElement = false;
          isAssignmentTarget = true;
          property = parseNonComputedMember();
          expr = new WrappingNode(startToken).finishMemberExpression('.', expr, property);
        } else if (lookahead.type === Token.Template && lookahead.head) {
          quasi = parseTemplateLiteral();
          expr = new WrappingNode(startToken).finishTaggedTemplateExpression(expr, quasi);
        } else {
          break;
        }
      }
      return expr;
    }
    function parsePostfixExpression() {
      var expr,
          token,
          startToken = lookahead;
      expr = inheritCoverGrammar(parseLeftHandSideExpressionAllowCall);
      if (!hasLineTerminator && lookahead.type === Token.Punctuator) {
        if (match('++') || match('--')) {
          if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
            tolerateError(Messages.StrictLHSPostfix);
          }
          if (!isAssignmentTarget) {
            tolerateError(Messages.InvalidLHSInAssignment);
          }
          isAssignmentTarget = isBindingElement = false;
          token = lex();
          expr = new WrappingNode(startToken).finishPostfixExpression(token.value, expr);
        }
      }
      return expr;
    }
    function parseUnaryExpression() {
      var token,
          expr,
          startToken;
      if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
        expr = parsePostfixExpression();
      } else if (match('++') || match('--')) {
        startToken = lookahead;
        token = lex();
        expr = inheritCoverGrammar(parseUnaryExpression);
        if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
          tolerateError(Messages.StrictLHSPrefix);
        }
        if (!isAssignmentTarget) {
          tolerateError(Messages.InvalidLHSInAssignment);
        }
        expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
        isAssignmentTarget = isBindingElement = false;
      } else if (match('+') || match('-') || match('~') || match('!')) {
        startToken = lookahead;
        token = lex();
        expr = inheritCoverGrammar(parseUnaryExpression);
        expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
        isAssignmentTarget = isBindingElement = false;
      } else if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
        startToken = lookahead;
        token = lex();
        expr = inheritCoverGrammar(parseUnaryExpression);
        expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
        if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
          tolerateError(Messages.StrictDelete);
        }
        isAssignmentTarget = isBindingElement = false;
      } else {
        expr = parsePostfixExpression();
      }
      return expr;
    }
    function binaryPrecedence(token, allowIn) {
      var prec = 0;
      if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
        return 0;
      }
      switch (token.value) {
        case '||':
          prec = 1;
          break;
        case '&&':
          prec = 2;
          break;
        case '|':
          prec = 3;
          break;
        case '^':
          prec = 4;
          break;
        case '&':
          prec = 5;
          break;
        case '==':
        case '!=':
        case '===':
        case '!==':
          prec = 6;
          break;
        case '<':
        case '>':
        case '<=':
        case '>=':
        case 'instanceof':
          prec = 7;
          break;
        case 'in':
          prec = allowIn ? 7 : 0;
          break;
        case '<<':
        case '>>':
        case '>>>':
          prec = 8;
          break;
        case '+':
        case '-':
          prec = 9;
          break;
        case '*':
        case '/':
        case '%':
          prec = 11;
          break;
        default:
          break;
      }
      return prec;
    }
    function parseBinaryExpression() {
      var marker,
          markers,
          expr,
          token,
          prec,
          stack,
          right,
          operator,
          left,
          i;
      marker = lookahead;
      left = inheritCoverGrammar(parseUnaryExpression);
      token = lookahead;
      prec = binaryPrecedence(token, state.allowIn);
      if (prec === 0) {
        return left;
      }
      isAssignmentTarget = isBindingElement = false;
      token.prec = prec;
      lex();
      markers = [marker, lookahead];
      right = isolateCoverGrammar(parseUnaryExpression);
      stack = [left, token, right];
      while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {
        while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
          right = stack.pop();
          operator = stack.pop().value;
          left = stack.pop();
          markers.pop();
          expr = new WrappingNode(markers[markers.length - 1]).finishBinaryExpression(operator, left, right);
          stack.push(expr);
        }
        token = lex();
        token.prec = prec;
        stack.push(token);
        markers.push(lookahead);
        expr = isolateCoverGrammar(parseUnaryExpression);
        stack.push(expr);
      }
      i = stack.length - 1;
      expr = stack[i];
      markers.pop();
      while (i > 1) {
        expr = new WrappingNode(markers.pop()).finishBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
        i -= 2;
      }
      return expr;
    }
    function parseConditionalExpression() {
      var expr,
          previousAllowIn,
          consequent,
          alternate,
          startToken;
      startToken = lookahead;
      expr = inheritCoverGrammar(parseBinaryExpression);
      if (match('?')) {
        lex();
        previousAllowIn = state.allowIn;
        state.allowIn = true;
        consequent = isolateCoverGrammar(parseAssignmentExpression);
        state.allowIn = previousAllowIn;
        expect(':');
        alternate = isolateCoverGrammar(parseAssignmentExpression);
        expr = new WrappingNode(startToken).finishConditionalExpression(expr, consequent, alternate);
        isAssignmentTarget = isBindingElement = false;
      }
      return expr;
    }
    function parseConciseBody() {
      if (match('{')) {
        return parseFunctionSourceElements();
      }
      return isolateCoverGrammar(parseAssignmentExpression);
    }
    function checkPatternParam(options, param) {
      var i;
      switch (param.type) {
        case Syntax.Identifier:
          validateParam(options, param, param.name);
          break;
        case Syntax.RestElement:
          checkPatternParam(options, param.argument);
          break;
        case Syntax.AssignmentPattern:
          checkPatternParam(options, param.left);
          break;
        case Syntax.ArrayPattern:
          for (i = 0; i < param.elements.length; i++) {
            if (param.elements[i] !== null) {
              checkPatternParam(options, param.elements[i]);
            }
          }
          break;
        case Syntax.YieldExpression:
          break;
        default:
          assert(param.type === Syntax.ObjectPattern, 'Invalid type');
          for (i = 0; i < param.properties.length; i++) {
            checkPatternParam(options, param.properties[i].value);
          }
          break;
      }
    }
    function reinterpretAsCoverFormalsList(expr) {
      var i,
          len,
          param,
          params,
          defaults,
          defaultCount,
          options,
          token;
      defaults = [];
      defaultCount = 0;
      params = [expr];
      switch (expr.type) {
        case Syntax.Identifier:
          break;
        case PlaceHolders.ArrowParameterPlaceHolder:
          params = expr.params;
          break;
        default:
          return null;
      }
      options = {paramSet: {}};
      for (i = 0, len = params.length; i < len; i += 1) {
        param = params[i];
        switch (param.type) {
          case Syntax.AssignmentPattern:
            params[i] = param.left;
            if (param.right.type === Syntax.YieldExpression) {
              if (param.right.argument) {
                throwUnexpectedToken(lookahead);
              }
              param.right.type = Syntax.Identifier;
              param.right.name = 'yield';
              delete param.right.argument;
              delete param.right.delegate;
            }
            defaults.push(param.right);
            ++defaultCount;
            checkPatternParam(options, param.left);
            break;
          default:
            checkPatternParam(options, param);
            params[i] = param;
            defaults.push(null);
            break;
        }
      }
      if (strict || !state.allowYield) {
        for (i = 0, len = params.length; i < len; i += 1) {
          param = params[i];
          if (param.type === Syntax.YieldExpression) {
            throwUnexpectedToken(lookahead);
          }
        }
      }
      if (options.message === Messages.StrictParamDupe) {
        token = strict ? options.stricted : options.firstRestricted;
        throwUnexpectedToken(token, options.message);
      }
      if (defaultCount === 0) {
        defaults = [];
      }
      return {
        params: params,
        defaults: defaults,
        stricted: options.stricted,
        firstRestricted: options.firstRestricted,
        message: options.message
      };
    }
    function parseArrowFunctionExpression(options, node) {
      var previousStrict,
          previousAllowYield,
          body;
      if (hasLineTerminator) {
        tolerateUnexpectedToken(lookahead);
      }
      expect('=>');
      previousStrict = strict;
      previousAllowYield = state.allowYield;
      state.allowYield = true;
      body = parseConciseBody();
      if (strict && options.firstRestricted) {
        throwUnexpectedToken(options.firstRestricted, options.message);
      }
      if (strict && options.stricted) {
        tolerateUnexpectedToken(options.stricted, options.message);
      }
      strict = previousStrict;
      state.allowYield = previousAllowYield;
      return node.finishArrowFunctionExpression(options.params, options.defaults, body, body.type !== Syntax.BlockStatement);
    }
    function parseYieldExpression() {
      var argument,
          expr,
          delegate,
          previousAllowYield;
      argument = null;
      expr = new Node();
      delegate = false;
      expectKeyword('yield');
      if (!hasLineTerminator) {
        previousAllowYield = state.allowYield;
        state.allowYield = false;
        delegate = match('*');
        if (delegate) {
          lex();
          argument = parseAssignmentExpression();
        } else {
          if (!match(';') && !match('}') && !match(')') && lookahead.type !== Token.EOF) {
            argument = parseAssignmentExpression();
          }
        }
        state.allowYield = previousAllowYield;
      }
      return expr.finishYieldExpression(argument, delegate);
    }
    function parseAssignmentExpression() {
      var token,
          expr,
          right,
          list,
          startToken;
      startToken = lookahead;
      token = lookahead;
      if (!state.allowYield && matchKeyword('yield')) {
        return parseYieldExpression();
      }
      expr = parseConditionalExpression();
      if (expr.type === PlaceHolders.ArrowParameterPlaceHolder || match('=>')) {
        isAssignmentTarget = isBindingElement = false;
        list = reinterpretAsCoverFormalsList(expr);
        if (list) {
          firstCoverInitializedNameError = null;
          return parseArrowFunctionExpression(list, new WrappingNode(startToken));
        }
        return expr;
      }
      if (matchAssign()) {
        if (!isAssignmentTarget) {
          tolerateError(Messages.InvalidLHSInAssignment);
        }
        if (strict && expr.type === Syntax.Identifier) {
          if (isRestrictedWord(expr.name)) {
            tolerateUnexpectedToken(token, Messages.StrictLHSAssignment);
          }
          if (isStrictModeReservedWord(expr.name)) {
            tolerateUnexpectedToken(token, Messages.StrictReservedWord);
          }
        }
        if (!match('=')) {
          isAssignmentTarget = isBindingElement = false;
        } else {
          reinterpretExpressionAsPattern(expr);
        }
        token = lex();
        right = isolateCoverGrammar(parseAssignmentExpression);
        expr = new WrappingNode(startToken).finishAssignmentExpression(token.value, expr, right);
        firstCoverInitializedNameError = null;
      }
      return expr;
    }
    function parseExpression() {
      var expr,
          startToken = lookahead,
          expressions;
      expr = isolateCoverGrammar(parseAssignmentExpression);
      if (match(',')) {
        expressions = [expr];
        while (startIndex < length) {
          if (!match(',')) {
            break;
          }
          lex();
          expressions.push(isolateCoverGrammar(parseAssignmentExpression));
        }
        expr = new WrappingNode(startToken).finishSequenceExpression(expressions);
      }
      return expr;
    }
    function parseStatementListItem() {
      if (lookahead.type === Token.Keyword) {
        switch (lookahead.value) {
          case 'export':
            if (state.sourceType !== 'module') {
              tolerateUnexpectedToken(lookahead, Messages.IllegalExportDeclaration);
            }
            return parseExportDeclaration();
          case 'import':
            if (state.sourceType !== 'module') {
              tolerateUnexpectedToken(lookahead, Messages.IllegalImportDeclaration);
            }
            return parseImportDeclaration();
          case 'const':
            return parseLexicalDeclaration({inFor: false});
          case 'function':
            return parseFunctionDeclaration(new Node());
          case 'class':
            return parseClassDeclaration();
        }
      }
      if (matchKeyword('let') && isLexicalDeclaration()) {
        return parseLexicalDeclaration({inFor: false});
      }
      return parseStatement();
    }
    function parseStatementList() {
      var list = [];
      while (startIndex < length) {
        if (match('}')) {
          break;
        }
        list.push(parseStatementListItem());
      }
      return list;
    }
    function parseBlock() {
      var block,
          node = new Node();
      expect('{');
      block = parseStatementList();
      expect('}');
      return node.finishBlockStatement(block);
    }
    function parseVariableIdentifier(kind) {
      var token,
          node = new Node();
      token = lex();
      if (token.type === Token.Keyword && token.value === 'yield') {
        if (strict) {
          tolerateUnexpectedToken(token, Messages.StrictReservedWord);
        }
        if (!state.allowYield) {
          throwUnexpectedToken(token);
        }
      } else if (token.type !== Token.Identifier) {
        if (strict && token.type === Token.Keyword && isStrictModeReservedWord(token.value)) {
          tolerateUnexpectedToken(token, Messages.StrictReservedWord);
        } else {
          if (strict || token.value !== 'let' || kind !== 'var') {
            throwUnexpectedToken(token);
          }
        }
      } else if (state.sourceType === 'module' && token.type === Token.Identifier && token.value === 'await') {
        tolerateUnexpectedToken(token);
      }
      return node.finishIdentifier(token.value);
    }
    function parseVariableDeclaration(options) {
      var init = null,
          id,
          node = new Node(),
          params = [];
      id = parsePattern(params, 'var');
      if (strict && isRestrictedWord(id.name)) {
        tolerateError(Messages.StrictVarName);
      }
      if (match('=')) {
        lex();
        init = isolateCoverGrammar(parseAssignmentExpression);
      } else if (id.type !== Syntax.Identifier && !options.inFor) {
        expect('=');
      }
      return node.finishVariableDeclarator(id, init);
    }
    function parseVariableDeclarationList(options) {
      var opt,
          list;
      opt = {inFor: options.inFor};
      list = [parseVariableDeclaration(opt)];
      while (match(',')) {
        lex();
        list.push(parseVariableDeclaration(opt));
      }
      return list;
    }
    function parseVariableStatement(node) {
      var declarations;
      expectKeyword('var');
      declarations = parseVariableDeclarationList({inFor: false});
      consumeSemicolon();
      return node.finishVariableDeclaration(declarations);
    }
    function parseLexicalBinding(kind, options) {
      var init = null,
          id,
          node = new Node(),
          params = [];
      id = parsePattern(params, kind);
      if (strict && id.type === Syntax.Identifier && isRestrictedWord(id.name)) {
        tolerateError(Messages.StrictVarName);
      }
      if (kind === 'const') {
        if (!matchKeyword('in') && !matchContextualKeyword('of')) {
          expect('=');
          init = isolateCoverGrammar(parseAssignmentExpression);
        }
      } else if ((!options.inFor && id.type !== Syntax.Identifier) || match('=')) {
        expect('=');
        init = isolateCoverGrammar(parseAssignmentExpression);
      }
      return node.finishVariableDeclarator(id, init);
    }
    function parseBindingList(kind, options) {
      var list = [parseLexicalBinding(kind, options)];
      while (match(',')) {
        lex();
        list.push(parseLexicalBinding(kind, options));
      }
      return list;
    }
    function tokenizerState() {
      return {
        index: index,
        lineNumber: lineNumber,
        lineStart: lineStart,
        hasLineTerminator: hasLineTerminator,
        lastIndex: lastIndex,
        lastLineNumber: lastLineNumber,
        lastLineStart: lastLineStart,
        startIndex: startIndex,
        startLineNumber: startLineNumber,
        startLineStart: startLineStart,
        lookahead: lookahead,
        tokenCount: extra.tokens ? extra.tokens.length : 0
      };
    }
    function resetTokenizerState(ts) {
      index = ts.index;
      lineNumber = ts.lineNumber;
      lineStart = ts.lineStart;
      hasLineTerminator = ts.hasLineTerminator;
      lastIndex = ts.lastIndex;
      lastLineNumber = ts.lastLineNumber;
      lastLineStart = ts.lastLineStart;
      startIndex = ts.startIndex;
      startLineNumber = ts.startLineNumber;
      startLineStart = ts.startLineStart;
      lookahead = ts.lookahead;
      if (extra.tokens) {
        extra.tokens.splice(ts.tokenCount, extra.tokens.length);
      }
    }
    function isLexicalDeclaration() {
      var lexical,
          ts;
      ts = tokenizerState();
      lex();
      lexical = (lookahead.type === Token.Identifier) || match('[') || match('{') || matchKeyword('let') || matchKeyword('yield');
      resetTokenizerState(ts);
      return lexical;
    }
    function parseLexicalDeclaration(options) {
      var kind,
          declarations,
          node = new Node();
      kind = lex().value;
      assert(kind === 'let' || kind === 'const', 'Lexical declaration must be either let or const');
      declarations = parseBindingList(kind, options);
      consumeSemicolon();
      return node.finishLexicalDeclaration(declarations, kind);
    }
    function parseRestElement(params) {
      var param,
          node = new Node();
      lex();
      if (match('{')) {
        throwError(Messages.ObjectPatternAsRestParameter);
      }
      params.push(lookahead);
      param = parseVariableIdentifier();
      if (match('=')) {
        throwError(Messages.DefaultRestParameter);
      }
      if (!match(')')) {
        throwError(Messages.ParameterAfterRestParameter);
      }
      return node.finishRestElement(param);
    }
    function parseEmptyStatement(node) {
      expect(';');
      return node.finishEmptyStatement();
    }
    function parseExpressionStatement(node) {
      var expr = parseExpression();
      consumeSemicolon();
      return node.finishExpressionStatement(expr);
    }
    function parseIfStatement(node) {
      var test,
          consequent,
          alternate;
      expectKeyword('if');
      expect('(');
      test = parseExpression();
      expect(')');
      consequent = parseStatement();
      if (matchKeyword('else')) {
        lex();
        alternate = parseStatement();
      } else {
        alternate = null;
      }
      return node.finishIfStatement(test, consequent, alternate);
    }
    function parseDoWhileStatement(node) {
      var body,
          test,
          oldInIteration;
      expectKeyword('do');
      oldInIteration = state.inIteration;
      state.inIteration = true;
      body = parseStatement();
      state.inIteration = oldInIteration;
      expectKeyword('while');
      expect('(');
      test = parseExpression();
      expect(')');
      if (match(';')) {
        lex();
      }
      return node.finishDoWhileStatement(body, test);
    }
    function parseWhileStatement(node) {
      var test,
          body,
          oldInIteration;
      expectKeyword('while');
      expect('(');
      test = parseExpression();
      expect(')');
      oldInIteration = state.inIteration;
      state.inIteration = true;
      body = parseStatement();
      state.inIteration = oldInIteration;
      return node.finishWhileStatement(test, body);
    }
    function parseForStatement(node) {
      var init,
          forIn,
          initSeq,
          initStartToken,
          test,
          update,
          left,
          right,
          kind,
          declarations,
          body,
          oldInIteration,
          previousAllowIn = state.allowIn;
      init = test = update = null;
      forIn = true;
      expectKeyword('for');
      expect('(');
      if (match(';')) {
        lex();
      } else {
        if (matchKeyword('var')) {
          init = new Node();
          lex();
          state.allowIn = false;
          declarations = parseVariableDeclarationList({inFor: true});
          state.allowIn = previousAllowIn;
          if (declarations.length === 1 && matchKeyword('in')) {
            init = init.finishVariableDeclaration(declarations);
            lex();
            left = init;
            right = parseExpression();
            init = null;
          } else if (declarations.length === 1 && declarations[0].init === null && matchContextualKeyword('of')) {
            init = init.finishVariableDeclaration(declarations);
            lex();
            left = init;
            right = parseAssignmentExpression();
            init = null;
            forIn = false;
          } else {
            init = init.finishVariableDeclaration(declarations);
            expect(';');
          }
        } else if (matchKeyword('const') || matchKeyword('let')) {
          init = new Node();
          kind = lex().value;
          if (!strict && lookahead.value === 'in') {
            init = init.finishIdentifier(kind);
            lex();
            left = init;
            right = parseExpression();
            init = null;
          } else {
            state.allowIn = false;
            declarations = parseBindingList(kind, {inFor: true});
            state.allowIn = previousAllowIn;
            if (declarations.length === 1 && declarations[0].init === null && matchKeyword('in')) {
              init = init.finishLexicalDeclaration(declarations, kind);
              lex();
              left = init;
              right = parseExpression();
              init = null;
            } else if (declarations.length === 1 && declarations[0].init === null && matchContextualKeyword('of')) {
              init = init.finishLexicalDeclaration(declarations, kind);
              lex();
              left = init;
              right = parseAssignmentExpression();
              init = null;
              forIn = false;
            } else {
              consumeSemicolon();
              init = init.finishLexicalDeclaration(declarations, kind);
            }
          }
        } else {
          initStartToken = lookahead;
          state.allowIn = false;
          init = inheritCoverGrammar(parseAssignmentExpression);
          state.allowIn = previousAllowIn;
          if (matchKeyword('in')) {
            if (!isAssignmentTarget) {
              tolerateError(Messages.InvalidLHSInForIn);
            }
            lex();
            reinterpretExpressionAsPattern(init);
            left = init;
            right = parseExpression();
            init = null;
          } else if (matchContextualKeyword('of')) {
            if (!isAssignmentTarget) {
              tolerateError(Messages.InvalidLHSInForLoop);
            }
            lex();
            reinterpretExpressionAsPattern(init);
            left = init;
            right = parseAssignmentExpression();
            init = null;
            forIn = false;
          } else {
            if (match(',')) {
              initSeq = [init];
              while (match(',')) {
                lex();
                initSeq.push(isolateCoverGrammar(parseAssignmentExpression));
              }
              init = new WrappingNode(initStartToken).finishSequenceExpression(initSeq);
            }
            expect(';');
          }
        }
      }
      if (typeof left === 'undefined') {
        if (!match(';')) {
          test = parseExpression();
        }
        expect(';');
        if (!match(')')) {
          update = parseExpression();
        }
      }
      expect(')');
      oldInIteration = state.inIteration;
      state.inIteration = true;
      body = isolateCoverGrammar(parseStatement);
      state.inIteration = oldInIteration;
      return (typeof left === 'undefined') ? node.finishForStatement(init, test, update, body) : forIn ? node.finishForInStatement(left, right, body) : node.finishForOfStatement(left, right, body);
    }
    function parseContinueStatement(node) {
      var label = null,
          key;
      expectKeyword('continue');
      if (source.charCodeAt(startIndex) === 0x3B) {
        lex();
        if (!state.inIteration) {
          throwError(Messages.IllegalContinue);
        }
        return node.finishContinueStatement(null);
      }
      if (hasLineTerminator) {
        if (!state.inIteration) {
          throwError(Messages.IllegalContinue);
        }
        return node.finishContinueStatement(null);
      }
      if (lookahead.type === Token.Identifier) {
        label = parseVariableIdentifier();
        key = '$' + label.name;
        if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
          throwError(Messages.UnknownLabel, label.name);
        }
      }
      consumeSemicolon();
      if (label === null && !state.inIteration) {
        throwError(Messages.IllegalContinue);
      }
      return node.finishContinueStatement(label);
    }
    function parseBreakStatement(node) {
      var label = null,
          key;
      expectKeyword('break');
      if (source.charCodeAt(lastIndex) === 0x3B) {
        lex();
        if (!(state.inIteration || state.inSwitch)) {
          throwError(Messages.IllegalBreak);
        }
        return node.finishBreakStatement(null);
      }
      if (hasLineTerminator) {
        if (!(state.inIteration || state.inSwitch)) {
          throwError(Messages.IllegalBreak);
        }
      } else if (lookahead.type === Token.Identifier) {
        label = parseVariableIdentifier();
        key = '$' + label.name;
        if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
          throwError(Messages.UnknownLabel, label.name);
        }
      }
      consumeSemicolon();
      if (label === null && !(state.inIteration || state.inSwitch)) {
        throwError(Messages.IllegalBreak);
      }
      return node.finishBreakStatement(label);
    }
    function parseReturnStatement(node) {
      var argument = null;
      expectKeyword('return');
      if (!state.inFunctionBody) {
        tolerateError(Messages.IllegalReturn);
      }
      if (source.charCodeAt(lastIndex) === 0x20) {
        if (isIdentifierStart(source.charCodeAt(lastIndex + 1))) {
          argument = parseExpression();
          consumeSemicolon();
          return node.finishReturnStatement(argument);
        }
      }
      if (hasLineTerminator) {
        return node.finishReturnStatement(null);
      }
      if (!match(';')) {
        if (!match('}') && lookahead.type !== Token.EOF) {
          argument = parseExpression();
        }
      }
      consumeSemicolon();
      return node.finishReturnStatement(argument);
    }
    function parseWithStatement(node) {
      var object,
          body;
      if (strict) {
        tolerateError(Messages.StrictModeWith);
      }
      expectKeyword('with');
      expect('(');
      object = parseExpression();
      expect(')');
      body = parseStatement();
      return node.finishWithStatement(object, body);
    }
    function parseSwitchCase() {
      var test,
          consequent = [],
          statement,
          node = new Node();
      if (matchKeyword('default')) {
        lex();
        test = null;
      } else {
        expectKeyword('case');
        test = parseExpression();
      }
      expect(':');
      while (startIndex < length) {
        if (match('}') || matchKeyword('default') || matchKeyword('case')) {
          break;
        }
        statement = parseStatementListItem();
        consequent.push(statement);
      }
      return node.finishSwitchCase(test, consequent);
    }
    function parseSwitchStatement(node) {
      var discriminant,
          cases,
          clause,
          oldInSwitch,
          defaultFound;
      expectKeyword('switch');
      expect('(');
      discriminant = parseExpression();
      expect(')');
      expect('{');
      cases = [];
      if (match('}')) {
        lex();
        return node.finishSwitchStatement(discriminant, cases);
      }
      oldInSwitch = state.inSwitch;
      state.inSwitch = true;
      defaultFound = false;
      while (startIndex < length) {
        if (match('}')) {
          break;
        }
        clause = parseSwitchCase();
        if (clause.test === null) {
          if (defaultFound) {
            throwError(Messages.MultipleDefaultsInSwitch);
          }
          defaultFound = true;
        }
        cases.push(clause);
      }
      state.inSwitch = oldInSwitch;
      expect('}');
      return node.finishSwitchStatement(discriminant, cases);
    }
    function parseThrowStatement(node) {
      var argument;
      expectKeyword('throw');
      if (hasLineTerminator) {
        throwError(Messages.NewlineAfterThrow);
      }
      argument = parseExpression();
      consumeSemicolon();
      return node.finishThrowStatement(argument);
    }
    function parseCatchClause() {
      var param,
          params = [],
          paramMap = {},
          key,
          i,
          body,
          node = new Node();
      expectKeyword('catch');
      expect('(');
      if (match(')')) {
        throwUnexpectedToken(lookahead);
      }
      param = parsePattern(params);
      for (i = 0; i < params.length; i++) {
        key = '$' + params[i].value;
        if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
          tolerateError(Messages.DuplicateBinding, params[i].value);
        }
        paramMap[key] = true;
      }
      if (strict && isRestrictedWord(param.name)) {
        tolerateError(Messages.StrictCatchVariable);
      }
      expect(')');
      body = parseBlock();
      return node.finishCatchClause(param, body);
    }
    function parseTryStatement(node) {
      var block,
          handler = null,
          finalizer = null;
      expectKeyword('try');
      block = parseBlock();
      if (matchKeyword('catch')) {
        handler = parseCatchClause();
      }
      if (matchKeyword('finally')) {
        lex();
        finalizer = parseBlock();
      }
      if (!handler && !finalizer) {
        throwError(Messages.NoCatchOrFinally);
      }
      return node.finishTryStatement(block, handler, finalizer);
    }
    function parseDebuggerStatement(node) {
      expectKeyword('debugger');
      consumeSemicolon();
      return node.finishDebuggerStatement();
    }
    function parseStatement() {
      var type = lookahead.type,
          expr,
          labeledBody,
          key,
          node;
      if (type === Token.EOF) {
        throwUnexpectedToken(lookahead);
      }
      if (type === Token.Punctuator && lookahead.value === '{') {
        return parseBlock();
      }
      isAssignmentTarget = isBindingElement = true;
      node = new Node();
      if (type === Token.Punctuator) {
        switch (lookahead.value) {
          case ';':
            return parseEmptyStatement(node);
          case '(':
            return parseExpressionStatement(node);
          default:
            break;
        }
      } else if (type === Token.Keyword) {
        switch (lookahead.value) {
          case 'break':
            return parseBreakStatement(node);
          case 'continue':
            return parseContinueStatement(node);
          case 'debugger':
            return parseDebuggerStatement(node);
          case 'do':
            return parseDoWhileStatement(node);
          case 'for':
            return parseForStatement(node);
          case 'function':
            return parseFunctionDeclaration(node);
          case 'if':
            return parseIfStatement(node);
          case 'return':
            return parseReturnStatement(node);
          case 'switch':
            return parseSwitchStatement(node);
          case 'throw':
            return parseThrowStatement(node);
          case 'try':
            return parseTryStatement(node);
          case 'var':
            return parseVariableStatement(node);
          case 'while':
            return parseWhileStatement(node);
          case 'with':
            return parseWithStatement(node);
          default:
            break;
        }
      }
      expr = parseExpression();
      if ((expr.type === Syntax.Identifier) && match(':')) {
        lex();
        key = '$' + expr.name;
        if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
          throwError(Messages.Redeclaration, 'Label', expr.name);
        }
        state.labelSet[key] = true;
        labeledBody = parseStatement();
        delete state.labelSet[key];
        return node.finishLabeledStatement(expr, labeledBody);
      }
      consumeSemicolon();
      return node.finishExpressionStatement(expr);
    }
    function parseFunctionSourceElements() {
      var statement,
          body = [],
          token,
          directive,
          firstRestricted,
          oldLabelSet,
          oldInIteration,
          oldInSwitch,
          oldInFunctionBody,
          node = new Node();
      expect('{');
      while (startIndex < length) {
        if (lookahead.type !== Token.StringLiteral) {
          break;
        }
        token = lookahead;
        statement = parseStatementListItem();
        body.push(statement);
        if (statement.expression.type !== Syntax.Literal) {
          break;
        }
        directive = source.slice(token.start + 1, token.end - 1);
        if (directive === 'use strict') {
          strict = true;
          if (firstRestricted) {
            tolerateUnexpectedToken(firstRestricted, Messages.StrictOctalLiteral);
          }
        } else {
          if (!firstRestricted && token.octal) {
            firstRestricted = token;
          }
        }
      }
      oldLabelSet = state.labelSet;
      oldInIteration = state.inIteration;
      oldInSwitch = state.inSwitch;
      oldInFunctionBody = state.inFunctionBody;
      state.labelSet = {};
      state.inIteration = false;
      state.inSwitch = false;
      state.inFunctionBody = true;
      while (startIndex < length) {
        if (match('}')) {
          break;
        }
        body.push(parseStatementListItem());
      }
      expect('}');
      state.labelSet = oldLabelSet;
      state.inIteration = oldInIteration;
      state.inSwitch = oldInSwitch;
      state.inFunctionBody = oldInFunctionBody;
      return node.finishBlockStatement(body);
    }
    function validateParam(options, param, name) {
      var key = '$' + name;
      if (strict) {
        if (isRestrictedWord(name)) {
          options.stricted = param;
          options.message = Messages.StrictParamName;
        }
        if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
          options.stricted = param;
          options.message = Messages.StrictParamDupe;
        }
      } else if (!options.firstRestricted) {
        if (isRestrictedWord(name)) {
          options.firstRestricted = param;
          options.message = Messages.StrictParamName;
        } else if (isStrictModeReservedWord(name)) {
          options.firstRestricted = param;
          options.message = Messages.StrictReservedWord;
        } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
          options.stricted = param;
          options.message = Messages.StrictParamDupe;
        }
      }
      options.paramSet[key] = true;
    }
    function parseParam(options) {
      var token,
          param,
          params = [],
          i,
          def;
      token = lookahead;
      if (token.value === '...') {
        param = parseRestElement(params);
        validateParam(options, param.argument, param.argument.name);
        options.params.push(param);
        options.defaults.push(null);
        return false;
      }
      param = parsePatternWithDefault(params);
      for (i = 0; i < params.length; i++) {
        validateParam(options, params[i], params[i].value);
      }
      if (param.type === Syntax.AssignmentPattern) {
        def = param.right;
        param = param.left;
        ++options.defaultCount;
      }
      options.params.push(param);
      options.defaults.push(def);
      return !match(')');
    }
    function parseParams(firstRestricted) {
      var options;
      options = {
        params: [],
        defaultCount: 0,
        defaults: [],
        firstRestricted: firstRestricted
      };
      expect('(');
      if (!match(')')) {
        options.paramSet = {};
        while (startIndex < length) {
          if (!parseParam(options)) {
            break;
          }
          expect(',');
        }
      }
      expect(')');
      if (options.defaultCount === 0) {
        options.defaults = [];
      }
      return {
        params: options.params,
        defaults: options.defaults,
        stricted: options.stricted,
        firstRestricted: options.firstRestricted,
        message: options.message
      };
    }
    function parseFunctionDeclaration(node, identifierIsOptional) {
      var id = null,
          params = [],
          defaults = [],
          body,
          token,
          stricted,
          tmp,
          firstRestricted,
          message,
          previousStrict,
          isGenerator,
          previousAllowYield;
      previousAllowYield = state.allowYield;
      expectKeyword('function');
      isGenerator = match('*');
      if (isGenerator) {
        lex();
      }
      if (!identifierIsOptional || !match('(')) {
        token = lookahead;
        id = parseVariableIdentifier();
        if (strict) {
          if (isRestrictedWord(token.value)) {
            tolerateUnexpectedToken(token, Messages.StrictFunctionName);
          }
        } else {
          if (isRestrictedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictFunctionName;
          } else if (isStrictModeReservedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictReservedWord;
          }
        }
      }
      state.allowYield = !isGenerator;
      tmp = parseParams(firstRestricted);
      params = tmp.params;
      defaults = tmp.defaults;
      stricted = tmp.stricted;
      firstRestricted = tmp.firstRestricted;
      if (tmp.message) {
        message = tmp.message;
      }
      previousStrict = strict;
      body = parseFunctionSourceElements();
      if (strict && firstRestricted) {
        throwUnexpectedToken(firstRestricted, message);
      }
      if (strict && stricted) {
        tolerateUnexpectedToken(stricted, message);
      }
      strict = previousStrict;
      state.allowYield = previousAllowYield;
      return node.finishFunctionDeclaration(id, params, defaults, body, isGenerator);
    }
    function parseFunctionExpression() {
      var token,
          id = null,
          stricted,
          firstRestricted,
          message,
          tmp,
          params = [],
          defaults = [],
          body,
          previousStrict,
          node = new Node(),
          isGenerator,
          previousAllowYield;
      previousAllowYield = state.allowYield;
      expectKeyword('function');
      isGenerator = match('*');
      if (isGenerator) {
        lex();
      }
      state.allowYield = !isGenerator;
      if (!match('(')) {
        token = lookahead;
        id = (!strict && !isGenerator && matchKeyword('yield')) ? parseNonComputedProperty() : parseVariableIdentifier();
        if (strict) {
          if (isRestrictedWord(token.value)) {
            tolerateUnexpectedToken(token, Messages.StrictFunctionName);
          }
        } else {
          if (isRestrictedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictFunctionName;
          } else if (isStrictModeReservedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictReservedWord;
          }
        }
      }
      tmp = parseParams(firstRestricted);
      params = tmp.params;
      defaults = tmp.defaults;
      stricted = tmp.stricted;
      firstRestricted = tmp.firstRestricted;
      if (tmp.message) {
        message = tmp.message;
      }
      previousStrict = strict;
      body = parseFunctionSourceElements();
      if (strict && firstRestricted) {
        throwUnexpectedToken(firstRestricted, message);
      }
      if (strict && stricted) {
        tolerateUnexpectedToken(stricted, message);
      }
      strict = previousStrict;
      state.allowYield = previousAllowYield;
      return node.finishFunctionExpression(id, params, defaults, body, isGenerator);
    }
    function parseClassBody() {
      var classBody,
          token,
          isStatic,
          hasConstructor = false,
          body,
          method,
          computed,
          key;
      classBody = new Node();
      expect('{');
      body = [];
      while (!match('}')) {
        if (match(';')) {
          lex();
        } else {
          method = new Node();
          token = lookahead;
          isStatic = false;
          computed = match('[');
          if (match('*')) {
            lex();
          } else {
            key = parseObjectPropertyKey();
            if (key.name === 'static' && (lookaheadPropertyName() || match('*'))) {
              token = lookahead;
              isStatic = true;
              computed = match('[');
              if (match('*')) {
                lex();
              } else {
                key = parseObjectPropertyKey();
              }
            }
          }
          method = tryParseMethodDefinition(token, key, computed, method);
          if (method) {
            method['static'] = isStatic;
            if (method.kind === 'init') {
              method.kind = 'method';
            }
            if (!isStatic) {
              if (!method.computed && (method.key.name || method.key.value.toString()) === 'constructor') {
                if (method.kind !== 'method' || !method.method || method.value.generator) {
                  throwUnexpectedToken(token, Messages.ConstructorSpecialMethod);
                }
                if (hasConstructor) {
                  throwUnexpectedToken(token, Messages.DuplicateConstructor);
                } else {
                  hasConstructor = true;
                }
                method.kind = 'constructor';
              }
            } else {
              if (!method.computed && (method.key.name || method.key.value.toString()) === 'prototype') {
                throwUnexpectedToken(token, Messages.StaticPrototype);
              }
            }
            method.type = Syntax.MethodDefinition;
            delete method.method;
            delete method.shorthand;
            body.push(method);
          } else {
            throwUnexpectedToken(lookahead);
          }
        }
      }
      lex();
      return classBody.finishClassBody(body);
    }
    function parseClassDeclaration(identifierIsOptional) {
      var id = null,
          superClass = null,
          classNode = new Node(),
          classBody,
          previousStrict = strict;
      strict = true;
      expectKeyword('class');
      if (!identifierIsOptional || lookahead.type === Token.Identifier) {
        id = parseVariableIdentifier();
      }
      if (matchKeyword('extends')) {
        lex();
        superClass = isolateCoverGrammar(parseLeftHandSideExpressionAllowCall);
      }
      classBody = parseClassBody();
      strict = previousStrict;
      return classNode.finishClassDeclaration(id, superClass, classBody);
    }
    function parseClassExpression() {
      var id = null,
          superClass = null,
          classNode = new Node(),
          classBody,
          previousStrict = strict;
      strict = true;
      expectKeyword('class');
      if (lookahead.type === Token.Identifier) {
        id = parseVariableIdentifier();
      }
      if (matchKeyword('extends')) {
        lex();
        superClass = isolateCoverGrammar(parseLeftHandSideExpressionAllowCall);
      }
      classBody = parseClassBody();
      strict = previousStrict;
      return classNode.finishClassExpression(id, superClass, classBody);
    }
    function parseModuleSpecifier() {
      var node = new Node();
      if (lookahead.type !== Token.StringLiteral) {
        throwError(Messages.InvalidModuleSpecifier);
      }
      return node.finishLiteral(lex());
    }
    function parseExportSpecifier() {
      var exported,
          local,
          node = new Node(),
          def;
      if (matchKeyword('default')) {
        def = new Node();
        lex();
        local = def.finishIdentifier('default');
      } else {
        local = parseVariableIdentifier();
      }
      if (matchContextualKeyword('as')) {
        lex();
        exported = parseNonComputedProperty();
      }
      return node.finishExportSpecifier(local, exported);
    }
    function parseExportNamedDeclaration(node) {
      var declaration = null,
          isExportFromIdentifier,
          src = null,
          specifiers = [];
      if (lookahead.type === Token.Keyword) {
        switch (lookahead.value) {
          case 'let':
          case 'const':
            declaration = parseLexicalDeclaration({inFor: false});
            return node.finishExportNamedDeclaration(declaration, specifiers, null);
          case 'var':
          case 'class':
          case 'function':
            declaration = parseStatementListItem();
            return node.finishExportNamedDeclaration(declaration, specifiers, null);
        }
      }
      expect('{');
      while (!match('}')) {
        isExportFromIdentifier = isExportFromIdentifier || matchKeyword('default');
        specifiers.push(parseExportSpecifier());
        if (!match('}')) {
          expect(',');
          if (match('}')) {
            break;
          }
        }
      }
      expect('}');
      if (matchContextualKeyword('from')) {
        lex();
        src = parseModuleSpecifier();
        consumeSemicolon();
      } else if (isExportFromIdentifier) {
        throwError(lookahead.value ? Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
      } else {
        consumeSemicolon();
      }
      return node.finishExportNamedDeclaration(declaration, specifiers, src);
    }
    function parseExportDefaultDeclaration(node) {
      var declaration = null,
          expression = null;
      expectKeyword('default');
      if (matchKeyword('function')) {
        declaration = parseFunctionDeclaration(new Node(), true);
        return node.finishExportDefaultDeclaration(declaration);
      }
      if (matchKeyword('class')) {
        declaration = parseClassDeclaration(true);
        return node.finishExportDefaultDeclaration(declaration);
      }
      if (matchContextualKeyword('from')) {
        throwError(Messages.UnexpectedToken, lookahead.value);
      }
      if (match('{')) {
        expression = parseObjectInitializer();
      } else if (match('[')) {
        expression = parseArrayInitializer();
      } else {
        expression = parseAssignmentExpression();
      }
      consumeSemicolon();
      return node.finishExportDefaultDeclaration(expression);
    }
    function parseExportAllDeclaration(node) {
      var src;
      expect('*');
      if (!matchContextualKeyword('from')) {
        throwError(lookahead.value ? Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
      }
      lex();
      src = parseModuleSpecifier();
      consumeSemicolon();
      return node.finishExportAllDeclaration(src);
    }
    function parseExportDeclaration() {
      var node = new Node();
      if (state.inFunctionBody) {
        throwError(Messages.IllegalExportDeclaration);
      }
      expectKeyword('export');
      if (matchKeyword('default')) {
        return parseExportDefaultDeclaration(node);
      }
      if (match('*')) {
        return parseExportAllDeclaration(node);
      }
      return parseExportNamedDeclaration(node);
    }
    function parseImportSpecifier() {
      var local,
          imported,
          node = new Node();
      imported = parseNonComputedProperty();
      if (matchContextualKeyword('as')) {
        lex();
        local = parseVariableIdentifier();
      }
      return node.finishImportSpecifier(local, imported);
    }
    function parseNamedImports() {
      var specifiers = [];
      expect('{');
      while (!match('}')) {
        specifiers.push(parseImportSpecifier());
        if (!match('}')) {
          expect(',');
          if (match('}')) {
            break;
          }
        }
      }
      expect('}');
      return specifiers;
    }
    function parseImportDefaultSpecifier() {
      var local,
          node = new Node();
      local = parseNonComputedProperty();
      return node.finishImportDefaultSpecifier(local);
    }
    function parseImportNamespaceSpecifier() {
      var local,
          node = new Node();
      expect('*');
      if (!matchContextualKeyword('as')) {
        throwError(Messages.NoAsAfterImportNamespace);
      }
      lex();
      local = parseNonComputedProperty();
      return node.finishImportNamespaceSpecifier(local);
    }
    function parseImportDeclaration() {
      var specifiers = [],
          src,
          node = new Node();
      if (state.inFunctionBody) {
        throwError(Messages.IllegalImportDeclaration);
      }
      expectKeyword('import');
      if (lookahead.type === Token.StringLiteral) {
        src = parseModuleSpecifier();
      } else {
        if (match('{')) {
          specifiers = specifiers.concat(parseNamedImports());
        } else if (match('*')) {
          specifiers.push(parseImportNamespaceSpecifier());
        } else if (isIdentifierName(lookahead) && !matchKeyword('default')) {
          specifiers.push(parseImportDefaultSpecifier());
          if (match(',')) {
            lex();
            if (match('*')) {
              specifiers.push(parseImportNamespaceSpecifier());
            } else if (match('{')) {
              specifiers = specifiers.concat(parseNamedImports());
            } else {
              throwUnexpectedToken(lookahead);
            }
          }
        } else {
          throwUnexpectedToken(lex());
        }
        if (!matchContextualKeyword('from')) {
          throwError(lookahead.value ? Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
        }
        lex();
        src = parseModuleSpecifier();
      }
      consumeSemicolon();
      return node.finishImportDeclaration(specifiers, src);
    }
    function parseScriptBody() {
      var statement,
          body = [],
          token,
          directive,
          firstRestricted;
      while (startIndex < length) {
        token = lookahead;
        if (token.type !== Token.StringLiteral) {
          break;
        }
        statement = parseStatementListItem();
        body.push(statement);
        if (statement.expression.type !== Syntax.Literal) {
          break;
        }
        directive = source.slice(token.start + 1, token.end - 1);
        if (directive === 'use strict') {
          strict = true;
          if (firstRestricted) {
            tolerateUnexpectedToken(firstRestricted, Messages.StrictOctalLiteral);
          }
        } else {
          if (!firstRestricted && token.octal) {
            firstRestricted = token;
          }
        }
      }
      while (startIndex < length) {
        statement = parseStatementListItem();
        if (typeof statement === 'undefined') {
          break;
        }
        body.push(statement);
      }
      return body;
    }
    function parseProgram() {
      var body,
          node;
      peek();
      node = new Node();
      body = parseScriptBody();
      return node.finishProgram(body, state.sourceType);
    }
    function filterTokenLocation() {
      var i,
          entry,
          token,
          tokens = [];
      for (i = 0; i < extra.tokens.length; ++i) {
        entry = extra.tokens[i];
        token = {
          type: entry.type,
          value: entry.value
        };
        if (entry.regex) {
          token.regex = {
            pattern: entry.regex.pattern,
            flags: entry.regex.flags
          };
        }
        if (extra.range) {
          token.range = entry.range;
        }
        if (extra.loc) {
          token.loc = entry.loc;
        }
        tokens.push(token);
      }
      extra.tokens = tokens;
    }
    function tokenize(code, options, delegate) {
      var toString,
          tokens;
      toString = String;
      if (typeof code !== 'string' && !(code instanceof String)) {
        code = toString(code);
      }
      source = code;
      index = 0;
      lineNumber = (source.length > 0) ? 1 : 0;
      lineStart = 0;
      startIndex = index;
      startLineNumber = lineNumber;
      startLineStart = lineStart;
      length = source.length;
      lookahead = null;
      state = {
        allowIn: true,
        allowYield: true,
        labelSet: {},
        inFunctionBody: false,
        inIteration: false,
        inSwitch: false,
        lastCommentStart: -1,
        curlyStack: []
      };
      extra = {};
      options = options || {};
      options.tokens = true;
      extra.tokens = [];
      extra.tokenValues = [];
      extra.tokenize = true;
      extra.delegate = delegate;
      extra.openParenToken = -1;
      extra.openCurlyToken = -1;
      extra.range = (typeof options.range === 'boolean') && options.range;
      extra.loc = (typeof options.loc === 'boolean') && options.loc;
      if (typeof options.comment === 'boolean' && options.comment) {
        extra.comments = [];
      }
      if (typeof options.tolerant === 'boolean' && options.tolerant) {
        extra.errors = [];
      }
      try {
        peek();
        if (lookahead.type === Token.EOF) {
          return extra.tokens;
        }
        lex();
        while (lookahead.type !== Token.EOF) {
          try {
            lex();
          } catch (lexError) {
            if (extra.errors) {
              recordError(lexError);
              break;
            } else {
              throw lexError;
            }
          }
        }
        tokens = extra.tokens;
        if (typeof extra.errors !== 'undefined') {
          tokens.errors = extra.errors;
        }
      } catch (e) {
        throw e;
      } finally {
        extra = {};
      }
      return tokens;
    }
    function parse(code, options) {
      var program,
          toString;
      toString = String;
      if (typeof code !== 'string' && !(code instanceof String)) {
        code = toString(code);
      }
      source = code;
      index = 0;
      lineNumber = (source.length > 0) ? 1 : 0;
      lineStart = 0;
      startIndex = index;
      startLineNumber = lineNumber;
      startLineStart = lineStart;
      length = source.length;
      lookahead = null;
      state = {
        allowIn: true,
        allowYield: true,
        labelSet: {},
        inFunctionBody: false,
        inIteration: false,
        inSwitch: false,
        lastCommentStart: -1,
        curlyStack: [],
        sourceType: 'script'
      };
      strict = false;
      extra = {};
      if (typeof options !== 'undefined') {
        extra.range = (typeof options.range === 'boolean') && options.range;
        extra.loc = (typeof options.loc === 'boolean') && options.loc;
        extra.attachComment = (typeof options.attachComment === 'boolean') && options.attachComment;
        if (extra.loc && options.source !== null && options.source !== undefined) {
          extra.source = toString(options.source);
        }
        if (typeof options.tokens === 'boolean' && options.tokens) {
          extra.tokens = [];
        }
        if (typeof options.comment === 'boolean' && options.comment) {
          extra.comments = [];
        }
        if (typeof options.tolerant === 'boolean' && options.tolerant) {
          extra.errors = [];
        }
        if (extra.attachComment) {
          extra.range = true;
          extra.comments = [];
          extra.bottomRightStack = [];
          extra.trailingComments = [];
          extra.leadingComments = [];
        }
        if (options.sourceType === 'module') {
          state.sourceType = options.sourceType;
          strict = true;
        }
      }
      try {
        program = parseProgram();
        if (typeof extra.comments !== 'undefined') {
          program.comments = extra.comments;
        }
        if (typeof extra.tokens !== 'undefined') {
          filterTokenLocation();
          program.tokens = extra.tokens;
        }
        if (typeof extra.errors !== 'undefined') {
          program.errors = extra.errors;
        }
      } catch (e) {
        throw e;
      } finally {
        extra = {};
      }
      return program;
    }
    exports.version = '2.7.2';
    exports.tokenize = tokenize;
    exports.parse = parse;
    exports.Syntax = (function() {
      var name,
          types = {};
      if (typeof Object.create === 'function') {
        types = Object.create(null);
      }
      for (name in Syntax) {
        if (Syntax.hasOwnProperty(name)) {
          types[name] = Syntax[name];
        }
      }
      if (typeof Object.freeze === 'function') {
        Object.freeze(types);
      }
      return types;
    }());
  }));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("64", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
      define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
      factory(exports);
    } else {
      factory((root.estraverse = {}));
    }
  }(this, function clone(exports) {
    'use strict';
    var Syntax,
        isArray,
        VisitorOption,
        VisitorKeys,
        objectCreate,
        objectKeys,
        BREAK,
        SKIP,
        REMOVE;
    function ignoreJSHintError() {}
    isArray = Array.isArray;
    if (!isArray) {
      isArray = function isArray(array) {
        return Object.prototype.toString.call(array) === '[object Array]';
      };
    }
    function deepCopy(obj) {
      var ret = {},
          key,
          val;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          val = obj[key];
          if (typeof val === 'object' && val !== null) {
            ret[key] = deepCopy(val);
          } else {
            ret[key] = val;
          }
        }
      }
      return ret;
    }
    function shallowCopy(obj) {
      var ret = {},
          key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          ret[key] = obj[key];
        }
      }
      return ret;
    }
    ignoreJSHintError(shallowCopy);
    function upperBound(array, func) {
      var diff,
          len,
          i,
          current;
      len = array.length;
      i = 0;
      while (len) {
        diff = len >>> 1;
        current = i + diff;
        if (func(array[current])) {
          len = diff;
        } else {
          i = current + 1;
          len -= diff + 1;
        }
      }
      return i;
    }
    function lowerBound(array, func) {
      var diff,
          len,
          i,
          current;
      len = array.length;
      i = 0;
      while (len) {
        diff = len >>> 1;
        current = i + diff;
        if (func(array[current])) {
          i = current + 1;
          len -= diff + 1;
        } else {
          len = diff;
        }
      }
      return i;
    }
    ignoreJSHintError(lowerBound);
    objectCreate = Object.create || (function() {
      function F() {}
      return function(o) {
        F.prototype = o;
        return new F();
      };
    })();
    objectKeys = Object.keys || function(o) {
      var keys = [],
          key;
      for (key in o) {
        keys.push(key);
      }
      return keys;
    };
    function extend(to, from) {
      var keys = objectKeys(from),
          key,
          i,
          len;
      for (i = 0, len = keys.length; i < len; i += 1) {
        key = keys[i];
        to[key] = from[key];
      }
      return to;
    }
    Syntax = {
      AssignmentExpression: 'AssignmentExpression',
      ArrayExpression: 'ArrayExpression',
      ArrayPattern: 'ArrayPattern',
      ArrowFunctionExpression: 'ArrowFunctionExpression',
      AwaitExpression: 'AwaitExpression',
      BlockStatement: 'BlockStatement',
      BinaryExpression: 'BinaryExpression',
      BreakStatement: 'BreakStatement',
      CallExpression: 'CallExpression',
      CatchClause: 'CatchClause',
      ClassBody: 'ClassBody',
      ClassDeclaration: 'ClassDeclaration',
      ClassExpression: 'ClassExpression',
      ComprehensionBlock: 'ComprehensionBlock',
      ComprehensionExpression: 'ComprehensionExpression',
      ConditionalExpression: 'ConditionalExpression',
      ContinueStatement: 'ContinueStatement',
      DebuggerStatement: 'DebuggerStatement',
      DirectiveStatement: 'DirectiveStatement',
      DoWhileStatement: 'DoWhileStatement',
      EmptyStatement: 'EmptyStatement',
      ExportBatchSpecifier: 'ExportBatchSpecifier',
      ExportDeclaration: 'ExportDeclaration',
      ExportSpecifier: 'ExportSpecifier',
      ExpressionStatement: 'ExpressionStatement',
      ForStatement: 'ForStatement',
      ForInStatement: 'ForInStatement',
      ForOfStatement: 'ForOfStatement',
      FunctionDeclaration: 'FunctionDeclaration',
      FunctionExpression: 'FunctionExpression',
      GeneratorExpression: 'GeneratorExpression',
      Identifier: 'Identifier',
      IfStatement: 'IfStatement',
      ImportDeclaration: 'ImportDeclaration',
      ImportDefaultSpecifier: 'ImportDefaultSpecifier',
      ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
      ImportSpecifier: 'ImportSpecifier',
      Literal: 'Literal',
      LabeledStatement: 'LabeledStatement',
      LogicalExpression: 'LogicalExpression',
      MemberExpression: 'MemberExpression',
      MethodDefinition: 'MethodDefinition',
      ModuleSpecifier: 'ModuleSpecifier',
      NewExpression: 'NewExpression',
      ObjectExpression: 'ObjectExpression',
      ObjectPattern: 'ObjectPattern',
      Program: 'Program',
      Property: 'Property',
      ReturnStatement: 'ReturnStatement',
      SequenceExpression: 'SequenceExpression',
      SpreadElement: 'SpreadElement',
      SwitchStatement: 'SwitchStatement',
      SwitchCase: 'SwitchCase',
      TaggedTemplateExpression: 'TaggedTemplateExpression',
      TemplateElement: 'TemplateElement',
      TemplateLiteral: 'TemplateLiteral',
      ThisExpression: 'ThisExpression',
      ThrowStatement: 'ThrowStatement',
      TryStatement: 'TryStatement',
      UnaryExpression: 'UnaryExpression',
      UpdateExpression: 'UpdateExpression',
      VariableDeclaration: 'VariableDeclaration',
      VariableDeclarator: 'VariableDeclarator',
      WhileStatement: 'WhileStatement',
      WithStatement: 'WithStatement',
      YieldExpression: 'YieldExpression'
    };
    VisitorKeys = {
      AssignmentExpression: ['left', 'right'],
      ArrayExpression: ['elements'],
      ArrayPattern: ['elements'],
      ArrowFunctionExpression: ['params', 'defaults', 'rest', 'body'],
      AwaitExpression: ['argument'],
      BlockStatement: ['body'],
      BinaryExpression: ['left', 'right'],
      BreakStatement: ['label'],
      CallExpression: ['callee', 'arguments'],
      CatchClause: ['param', 'body'],
      ClassBody: ['body'],
      ClassDeclaration: ['id', 'body', 'superClass'],
      ClassExpression: ['id', 'body', 'superClass'],
      ComprehensionBlock: ['left', 'right'],
      ComprehensionExpression: ['blocks', 'filter', 'body'],
      ConditionalExpression: ['test', 'consequent', 'alternate'],
      ContinueStatement: ['label'],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ['body', 'test'],
      EmptyStatement: [],
      ExportBatchSpecifier: [],
      ExportDeclaration: ['declaration', 'specifiers', 'source'],
      ExportSpecifier: ['id', 'name'],
      ExpressionStatement: ['expression'],
      ForStatement: ['init', 'test', 'update', 'body'],
      ForInStatement: ['left', 'right', 'body'],
      ForOfStatement: ['left', 'right', 'body'],
      FunctionDeclaration: ['id', 'params', 'defaults', 'rest', 'body'],
      FunctionExpression: ['id', 'params', 'defaults', 'rest', 'body'],
      GeneratorExpression: ['blocks', 'filter', 'body'],
      Identifier: [],
      IfStatement: ['test', 'consequent', 'alternate'],
      ImportDeclaration: ['specifiers', 'source'],
      ImportDefaultSpecifier: ['id'],
      ImportNamespaceSpecifier: ['id'],
      ImportSpecifier: ['id', 'name'],
      Literal: [],
      LabeledStatement: ['label', 'body'],
      LogicalExpression: ['left', 'right'],
      MemberExpression: ['object', 'property'],
      MethodDefinition: ['key', 'value'],
      ModuleSpecifier: [],
      NewExpression: ['callee', 'arguments'],
      ObjectExpression: ['properties'],
      ObjectPattern: ['properties'],
      Program: ['body'],
      Property: ['key', 'value'],
      ReturnStatement: ['argument'],
      SequenceExpression: ['expressions'],
      SpreadElement: ['argument'],
      SwitchStatement: ['discriminant', 'cases'],
      SwitchCase: ['test', 'consequent'],
      TaggedTemplateExpression: ['tag', 'quasi'],
      TemplateElement: [],
      TemplateLiteral: ['quasis', 'expressions'],
      ThisExpression: [],
      ThrowStatement: ['argument'],
      TryStatement: ['block', 'handlers', 'handler', 'guardedHandlers', 'finalizer'],
      UnaryExpression: ['argument'],
      UpdateExpression: ['argument'],
      VariableDeclaration: ['declarations'],
      VariableDeclarator: ['id', 'init'],
      WhileStatement: ['test', 'body'],
      WithStatement: ['object', 'body'],
      YieldExpression: ['argument']
    };
    BREAK = {};
    SKIP = {};
    REMOVE = {};
    VisitorOption = {
      Break: BREAK,
      Skip: SKIP,
      Remove: REMOVE
    };
    function Reference(parent, key) {
      this.parent = parent;
      this.key = key;
    }
    Reference.prototype.replace = function replace(node) {
      this.parent[this.key] = node;
    };
    Reference.prototype.remove = function remove() {
      if (isArray(this.parent)) {
        this.parent.splice(this.key, 1);
        return true;
      } else {
        this.replace(null);
        return false;
      }
    };
    function Element(node, path, wrap, ref) {
      this.node = node;
      this.path = path;
      this.wrap = wrap;
      this.ref = ref;
    }
    function Controller() {}
    Controller.prototype.path = function path() {
      var i,
          iz,
          j,
          jz,
          result,
          element;
      function addToPath(result, path) {
        if (isArray(path)) {
          for (j = 0, jz = path.length; j < jz; ++j) {
            result.push(path[j]);
          }
        } else {
          result.push(path);
        }
      }
      if (!this.__current.path) {
        return null;
      }
      result = [];
      for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
        element = this.__leavelist[i];
        addToPath(result, element.path);
      }
      addToPath(result, this.__current.path);
      return result;
    };
    Controller.prototype.type = function() {
      var node = this.current();
      return node.type || this.__current.wrap;
    };
    Controller.prototype.parents = function parents() {
      var i,
          iz,
          result;
      result = [];
      for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
        result.push(this.__leavelist[i].node);
      }
      return result;
    };
    Controller.prototype.current = function current() {
      return this.__current.node;
    };
    Controller.prototype.__execute = function __execute(callback, element) {
      var previous,
          result;
      result = undefined;
      previous = this.__current;
      this.__current = element;
      this.__state = null;
      if (callback) {
        result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
      }
      this.__current = previous;
      return result;
    };
    Controller.prototype.notify = function notify(flag) {
      this.__state = flag;
    };
    Controller.prototype.skip = function() {
      this.notify(SKIP);
    };
    Controller.prototype['break'] = function() {
      this.notify(BREAK);
    };
    Controller.prototype.remove = function() {
      this.notify(REMOVE);
    };
    Controller.prototype.__initialize = function(root, visitor) {
      this.visitor = visitor;
      this.root = root;
      this.__worklist = [];
      this.__leavelist = [];
      this.__current = null;
      this.__state = null;
      this.__fallback = visitor.fallback === 'iteration';
      this.__keys = VisitorKeys;
      if (visitor.keys) {
        this.__keys = extend(objectCreate(this.__keys), visitor.keys);
      }
    };
    function isNode(node) {
      if (node == null) {
        return false;
      }
      return typeof node === 'object' && typeof node.type === 'string';
    }
    function isProperty(nodeType, key) {
      return (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && 'properties' === key;
    }
    Controller.prototype.traverse = function traverse(root, visitor) {
      var worklist,
          leavelist,
          element,
          node,
          nodeType,
          ret,
          key,
          current,
          current2,
          candidates,
          candidate,
          sentinel;
      this.__initialize(root, visitor);
      sentinel = {};
      worklist = this.__worklist;
      leavelist = this.__leavelist;
      worklist.push(new Element(root, null, null, null));
      leavelist.push(new Element(null, null, null, null));
      while (worklist.length) {
        element = worklist.pop();
        if (element === sentinel) {
          element = leavelist.pop();
          ret = this.__execute(visitor.leave, element);
          if (this.__state === BREAK || ret === BREAK) {
            return;
          }
          continue;
        }
        if (element.node) {
          ret = this.__execute(visitor.enter, element);
          if (this.__state === BREAK || ret === BREAK) {
            return;
          }
          worklist.push(sentinel);
          leavelist.push(element);
          if (this.__state === SKIP || ret === SKIP) {
            continue;
          }
          node = element.node;
          nodeType = element.wrap || node.type;
          candidates = this.__keys[nodeType];
          if (!candidates) {
            if (this.__fallback) {
              candidates = objectKeys(node);
            } else {
              throw new Error('Unknown node type ' + nodeType + '.');
            }
          }
          current = candidates.length;
          while ((current -= 1) >= 0) {
            key = candidates[current];
            candidate = node[key];
            if (!candidate) {
              continue;
            }
            if (isArray(candidate)) {
              current2 = candidate.length;
              while ((current2 -= 1) >= 0) {
                if (!candidate[current2]) {
                  continue;
                }
                if (isProperty(nodeType, candidates[current])) {
                  element = new Element(candidate[current2], [key, current2], 'Property', null);
                } else if (isNode(candidate[current2])) {
                  element = new Element(candidate[current2], [key, current2], null, null);
                } else {
                  continue;
                }
                worklist.push(element);
              }
            } else if (isNode(candidate)) {
              worklist.push(new Element(candidate, key, null, null));
            }
          }
        }
      }
    };
    Controller.prototype.replace = function replace(root, visitor) {
      function removeElem(element) {
        var i,
            key,
            nextElem,
            parent;
        if (element.ref.remove()) {
          key = element.ref.key;
          parent = element.ref.parent;
          i = worklist.length;
          while (i--) {
            nextElem = worklist[i];
            if (nextElem.ref && nextElem.ref.parent === parent) {
              if (nextElem.ref.key < key) {
                break;
              }
              --nextElem.ref.key;
            }
          }
        }
      }
      var worklist,
          leavelist,
          node,
          nodeType,
          target,
          element,
          current,
          current2,
          candidates,
          candidate,
          sentinel,
          outer,
          key;
      this.__initialize(root, visitor);
      sentinel = {};
      worklist = this.__worklist;
      leavelist = this.__leavelist;
      outer = {root: root};
      element = new Element(root, null, null, new Reference(outer, 'root'));
      worklist.push(element);
      leavelist.push(element);
      while (worklist.length) {
        element = worklist.pop();
        if (element === sentinel) {
          element = leavelist.pop();
          target = this.__execute(visitor.leave, element);
          if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
            element.ref.replace(target);
          }
          if (this.__state === REMOVE || target === REMOVE) {
            removeElem(element);
          }
          if (this.__state === BREAK || target === BREAK) {
            return outer.root;
          }
          continue;
        }
        target = this.__execute(visitor.enter, element);
        if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
          element.ref.replace(target);
          element.node = target;
        }
        if (this.__state === REMOVE || target === REMOVE) {
          removeElem(element);
          element.node = null;
        }
        if (this.__state === BREAK || target === BREAK) {
          return outer.root;
        }
        node = element.node;
        if (!node) {
          continue;
        }
        worklist.push(sentinel);
        leavelist.push(element);
        if (this.__state === SKIP || target === SKIP) {
          continue;
        }
        nodeType = element.wrap || node.type;
        candidates = this.__keys[nodeType];
        if (!candidates) {
          if (this.__fallback) {
            candidates = objectKeys(node);
          } else {
            throw new Error('Unknown node type ' + nodeType + '.');
          }
        }
        current = candidates.length;
        while ((current -= 1) >= 0) {
          key = candidates[current];
          candidate = node[key];
          if (!candidate) {
            continue;
          }
          if (isArray(candidate)) {
            current2 = candidate.length;
            while ((current2 -= 1) >= 0) {
              if (!candidate[current2]) {
                continue;
              }
              if (isProperty(nodeType, candidates[current])) {
                element = new Element(candidate[current2], [key, current2], 'Property', new Reference(candidate, current2));
              } else if (isNode(candidate[current2])) {
                element = new Element(candidate[current2], [key, current2], null, new Reference(candidate, current2));
              } else {
                continue;
              }
              worklist.push(element);
            }
          } else if (isNode(candidate)) {
            worklist.push(new Element(candidate, key, null, new Reference(node, key)));
          }
        }
      }
      return outer.root;
    };
    function traverse(root, visitor) {
      var controller = new Controller();
      return controller.traverse(root, visitor);
    }
    function replace(root, visitor) {
      var controller = new Controller();
      return controller.replace(root, visitor);
    }
    function extendCommentRange(comment, tokens) {
      var target;
      target = upperBound(tokens, function search(token) {
        return token.range[0] > comment.range[0];
      });
      comment.extendedRange = [comment.range[0], comment.range[1]];
      if (target !== tokens.length) {
        comment.extendedRange[1] = tokens[target].range[0];
      }
      target -= 1;
      if (target >= 0) {
        comment.extendedRange[0] = tokens[target].range[1];
      }
      return comment;
    }
    function attachComments(tree, providedComments, tokens) {
      var comments = [],
          comment,
          len,
          i,
          cursor;
      if (!tree.range) {
        throw new Error('attachComments needs range information');
      }
      if (!tokens.length) {
        if (providedComments.length) {
          for (i = 0, len = providedComments.length; i < len; i += 1) {
            comment = deepCopy(providedComments[i]);
            comment.extendedRange = [0, tree.range[0]];
            comments.push(comment);
          }
          tree.leadingComments = comments;
        }
        return tree;
      }
      for (i = 0, len = providedComments.length; i < len; i += 1) {
        comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
      }
      cursor = 0;
      traverse(tree, {enter: function(node) {
          var comment;
          while (cursor < comments.length) {
            comment = comments[cursor];
            if (comment.extendedRange[1] > node.range[0]) {
              break;
            }
            if (comment.extendedRange[1] === node.range[0]) {
              if (!node.leadingComments) {
                node.leadingComments = [];
              }
              node.leadingComments.push(comment);
              comments.splice(cursor, 1);
            } else {
              cursor += 1;
            }
          }
          if (cursor === comments.length) {
            return VisitorOption.Break;
          }
          if (comments[cursor].extendedRange[0] > node.range[1]) {
            return VisitorOption.Skip;
          }
        }});
      cursor = 0;
      traverse(tree, {leave: function(node) {
          var comment;
          while (cursor < comments.length) {
            comment = comments[cursor];
            if (node.range[1] < comment.extendedRange[0]) {
              break;
            }
            if (node.range[1] === comment.extendedRange[0]) {
              if (!node.trailingComments) {
                node.trailingComments = [];
              }
              node.trailingComments.push(comment);
              comments.splice(cursor, 1);
            } else {
              cursor += 1;
            }
          }
          if (cursor === comments.length) {
            return VisitorOption.Break;
          }
          if (comments[cursor].extendedRange[0] > node.range[1]) {
            return VisitorOption.Skip;
          }
        }});
      return tree;
    }
    exports.version = '1.8.1-dev';
    exports.Syntax = Syntax;
    exports.traverse = traverse;
    exports.replace = replace;
    exports.attachComments = attachComments;
    exports.VisitorKeys = VisitorKeys;
    exports.VisitorOption = VisitorOption;
    exports.Controller = Controller;
    exports.cloneEnvironment = function() {
      return clone({});
    };
    return exports;
  }));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("65", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function() {
    'use strict';
    function isExpression(node) {
      if (node == null) {
        return false;
      }
      switch (node.type) {
        case 'ArrayExpression':
        case 'AssignmentExpression':
        case 'BinaryExpression':
        case 'CallExpression':
        case 'ConditionalExpression':
        case 'FunctionExpression':
        case 'Identifier':
        case 'Literal':
        case 'LogicalExpression':
        case 'MemberExpression':
        case 'NewExpression':
        case 'ObjectExpression':
        case 'SequenceExpression':
        case 'ThisExpression':
        case 'UnaryExpression':
        case 'UpdateExpression':
          return true;
      }
      return false;
    }
    function isIterationStatement(node) {
      if (node == null) {
        return false;
      }
      switch (node.type) {
        case 'DoWhileStatement':
        case 'ForInStatement':
        case 'ForStatement':
        case 'WhileStatement':
          return true;
      }
      return false;
    }
    function isStatement(node) {
      if (node == null) {
        return false;
      }
      switch (node.type) {
        case 'BlockStatement':
        case 'BreakStatement':
        case 'ContinueStatement':
        case 'DebuggerStatement':
        case 'DoWhileStatement':
        case 'EmptyStatement':
        case 'ExpressionStatement':
        case 'ForInStatement':
        case 'ForStatement':
        case 'IfStatement':
        case 'LabeledStatement':
        case 'ReturnStatement':
        case 'SwitchStatement':
        case 'ThrowStatement':
        case 'TryStatement':
        case 'VariableDeclaration':
        case 'WhileStatement':
        case 'WithStatement':
          return true;
      }
      return false;
    }
    function isSourceElement(node) {
      return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
    }
    function trailingStatement(node) {
      switch (node.type) {
        case 'IfStatement':
          if (node.alternate != null) {
            return node.alternate;
          }
          return node.consequent;
        case 'LabeledStatement':
        case 'ForStatement':
        case 'ForInStatement':
        case 'WhileStatement':
        case 'WithStatement':
          return node.body;
      }
      return null;
    }
    function isProblematicIfStatement(node) {
      var current;
      if (node.type !== 'IfStatement') {
        return false;
      }
      if (node.alternate == null) {
        return false;
      }
      current = node.consequent;
      do {
        if (current.type === 'IfStatement') {
          if (current.alternate == null) {
            return true;
          }
        }
        current = trailingStatement(current);
      } while (current);
      return false;
    }
    module.exports = {
      isExpression: isExpression,
      isStatement: isStatement,
      isIterationStatement: isIterationStatement,
      isSourceElement: isSourceElement,
      isProblematicIfStatement: isProblematicIfStatement,
      trailingStatement: trailingStatement
    };
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("66", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function() {
    'use strict';
    var ES6Regex,
        ES5Regex,
        NON_ASCII_WHITESPACES,
        IDENTIFIER_START,
        IDENTIFIER_PART,
        ch;
    ES5Regex = {
      NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
    };
    ES6Regex = {
      NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    };
    function isDecimalDigit(ch) {
      return 0x30 <= ch && ch <= 0x39;
    }
    function isHexDigit(ch) {
      return 0x30 <= ch && ch <= 0x39 || 0x61 <= ch && ch <= 0x66 || 0x41 <= ch && ch <= 0x46;
    }
    function isOctalDigit(ch) {
      return ch >= 0x30 && ch <= 0x37;
    }
    NON_ASCII_WHITESPACES = [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF];
    function isWhiteSpace(ch) {
      return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 || ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
    }
    function isLineTerminator(ch) {
      return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
    }
    function fromCodePoint(cp) {
      if (cp <= 0xFFFF) {
        return String.fromCharCode(cp);
      }
      var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
      var cu2 = String.fromCharCode(((cp - 0x10000) % 0x400) + 0xDC00);
      return cu1 + cu2;
    }
    IDENTIFIER_START = new Array(0x80);
    for (ch = 0; ch < 0x80; ++ch) {
      IDENTIFIER_START[ch] = ch >= 0x61 && ch <= 0x7A || ch >= 0x41 && ch <= 0x5A || ch === 0x24 || ch === 0x5F;
    }
    IDENTIFIER_PART = new Array(0x80);
    for (ch = 0; ch < 0x80; ++ch) {
      IDENTIFIER_PART[ch] = ch >= 0x61 && ch <= 0x7A || ch >= 0x41 && ch <= 0x5A || ch >= 0x30 && ch <= 0x39 || ch === 0x24 || ch === 0x5F;
    }
    function isIdentifierStartES5(ch) {
      return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }
    function isIdentifierPartES5(ch) {
      return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }
    function isIdentifierStartES6(ch) {
      return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }
    function isIdentifierPartES6(ch) {
      return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }
    module.exports = {
      isDecimalDigit: isDecimalDigit,
      isHexDigit: isHexDigit,
      isOctalDigit: isOctalDigit,
      isWhiteSpace: isWhiteSpace,
      isLineTerminator: isLineTerminator,
      isIdentifierStartES5: isIdentifierStartES5,
      isIdentifierPartES5: isIdentifierPartES5,
      isIdentifierStartES6: isIdentifierStartES6,
      isIdentifierPartES6: isIdentifierPartES6
    };
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("67", ["66", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function() {
    'use strict';
    var code = $__require('66');
    function isStrictModeReservedWordES6(id) {
      switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'let':
          return true;
        default:
          return false;
      }
    }
    function isKeywordES5(id, strict) {
      if (!strict && id === 'yield') {
        return false;
      }
      return isKeywordES6(id, strict);
    }
    function isKeywordES6(id, strict) {
      if (strict && isStrictModeReservedWordES6(id)) {
        return true;
      }
      switch (id.length) {
        case 2:
          return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
          return (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
        case 4:
          return (id === 'this') || (id === 'else') || (id === 'case') || (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
          return (id === 'while') || (id === 'break') || (id === 'catch') || (id === 'throw') || (id === 'const') || (id === 'yield') || (id === 'class') || (id === 'super');
        case 6:
          return (id === 'return') || (id === 'typeof') || (id === 'delete') || (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
          return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
          return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
          return (id === 'instanceof');
        default:
          return false;
      }
    }
    function isReservedWordES5(id, strict) {
      return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
    }
    function isReservedWordES6(id, strict) {
      return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
    }
    function isRestrictedWord(id) {
      return id === 'eval' || id === 'arguments';
    }
    function isIdentifierNameES5(id) {
      var i,
          iz,
          ch;
      if (id.length === 0) {
        return false;
      }
      ch = id.charCodeAt(0);
      if (!code.isIdentifierStartES5(ch)) {
        return false;
      }
      for (i = 1, iz = id.length; i < iz; ++i) {
        ch = id.charCodeAt(i);
        if (!code.isIdentifierPartES5(ch)) {
          return false;
        }
      }
      return true;
    }
    function decodeUtf16(lead, trail) {
      return (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
    }
    function isIdentifierNameES6(id) {
      var i,
          iz,
          ch,
          lowCh,
          check;
      if (id.length === 0) {
        return false;
      }
      check = code.isIdentifierStartES6;
      for (i = 0, iz = id.length; i < iz; ++i) {
        ch = id.charCodeAt(i);
        if (0xD800 <= ch && ch <= 0xDBFF) {
          ++i;
          if (i >= iz) {
            return false;
          }
          lowCh = id.charCodeAt(i);
          if (!(0xDC00 <= lowCh && lowCh <= 0xDFFF)) {
            return false;
          }
          ch = decodeUtf16(ch, lowCh);
        }
        if (!check(ch)) {
          return false;
        }
        check = code.isIdentifierPartES6;
      }
      return true;
    }
    function isIdentifierES5(id, strict) {
      return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
    }
    function isIdentifierES6(id, strict) {
      return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
    }
    module.exports = {
      isKeywordES5: isKeywordES5,
      isKeywordES6: isKeywordES6,
      isReservedWordES5: isReservedWordES5,
      isReservedWordES6: isReservedWordES6,
      isRestrictedWord: isRestrictedWord,
      isIdentifierNameES5: isIdentifierNameES5,
      isIdentifierNameES6: isIdentifierNameES6,
      isIdentifierES5: isIdentifierES5,
      isIdentifierES6: isIdentifierES6
    };
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("68", ["65", "66", "67", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function() {
    'use strict';
    exports.ast = $__require('65');
    exports.code = $__require('66');
    exports.keyword = $__require('67');
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("69", ["6e", "6a", "6b", "6c", "6d", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    var util = $__require('6a');
    var binarySearch = $__require('6b');
    var SourceMapConsumer = $__require('6c').SourceMapConsumer;
    var BasicSourceMapConsumer = $__require('6d').BasicSourceMapConsumer;
    function IndexedSourceMapConsumer(aSourceMap) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === 'string') {
        sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
      }
      var version = util.getArg(sourceMap, 'version');
      var sections = util.getArg(sourceMap, 'sections');
      if (version != this._version) {
        throw new Error('Unsupported version: ' + version);
      }
      var lastOffset = {
        line: -1,
        column: 0
      };
      this._sections = sections.map(function(s) {
        if (s.url) {
          throw new Error('Support for url field in sections not implemented.');
        }
        var offset = util.getArg(s, 'offset');
        var offsetLine = util.getArg(offset, 'line');
        var offsetColumn = util.getArg(offset, 'column');
        if (offsetLine < lastOffset.line || (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
          throw new Error('Section offsets must be ordered and non-overlapping.');
        }
        lastOffset = offset;
        return {
          generatedOffset: {
            generatedLine: offsetLine + 1,
            generatedColumn: offsetColumn + 1
          },
          consumer: new SourceMapConsumer(util.getArg(s, 'map'))
        };
      });
    }
    IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
    IndexedSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {get: function() {
        var sources = [];
        for (var i = 0; i < this._sections.length; i++) {
          for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
            sources.push(this._sections[i].consumer.sources[j]);
          }
        }
        ;
        return sources;
      }});
    IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
      };
      var sectionIndex = binarySearch.search(needle, this._sections, function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }
        return (needle.generatedColumn - section.generatedOffset.generatedColumn);
      });
      var section = this._sections[sectionIndex];
      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }
      return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0)
      });
    };
    IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
          };
          return ret;
        }
      }
      return {
        line: null,
        column: null
      };
    };
    IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[i];
          var source = mapping.source;
          var sourceRoot = section.consumer.sourceRoot;
          if (source != null && sourceRoot != null) {
            source = util.join(sourceRoot, source);
          }
          var adjustedMapping = {
            source: source,
            generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.column + (section.generatedOffset.generatedLine === mapping.generatedLine) ? section.generatedOffset.generatedColumn - 1 : 0,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name
          };
          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === 'number') {
            this.__originalMappings.push(adjustedMapping);
          }
        }
        ;
      }
      ;
      this.__generatedMappings.sort(util.compareByGeneratedPositions);
      this.__originalMappings.sort(util.compareByOriginalPositions);
    };
    exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6b", ["6e", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare);
        }
        return mid;
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare);
        }
        return aLow < 0 ? -1 : aLow;
      }
    }
    exports.search = function search(aNeedle, aHaystack, aCompare) {
      if (aHaystack.length === 0) {
        return -1;
      }
      return recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare);
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6d", ["6e", "6a", "6b", "6f", "70", "6c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    var util = $__require('6a');
    var binarySearch = $__require('6b');
    var ArraySet = $__require('6f').ArraySet;
    var base64VLQ = $__require('70');
    var SourceMapConsumer = $__require('6c').SourceMapConsumer;
    function BasicSourceMapConsumer(aSourceMap) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === 'string') {
        sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
      }
      var version = util.getArg(sourceMap, 'version');
      var sources = util.getArg(sourceMap, 'sources');
      var names = util.getArg(sourceMap, 'names', []);
      var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
      var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
      var mappings = util.getArg(sourceMap, 'mappings');
      var file = util.getArg(sourceMap, 'file', null);
      if (version != this._version) {
        throw new Error('Unsupported version: ' + version);
      }
      sources = sources.map(util.normalize);
      this._names = ArraySet.fromArray(names, true);
      this._sources = ArraySet.fromArray(sources, true);
      this.sourceRoot = sourceRoot;
      this.sourcesContent = sourcesContent;
      this._mappings = mappings;
      this.file = file;
    }
    BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
    BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);
      smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
      smc.file = aSourceMap._file;
      smc.__generatedMappings = aSourceMap._mappings.toArray().slice();
      smc.__originalMappings = aSourceMap._mappings.toArray().slice().sort(util.compareByOriginalPositions);
      return smc;
    };
    BasicSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {get: function() {
        return this._sources.toArray().map(function(s) {
          return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
        }, this);
      }});
    BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var str = aStr;
      var temp = {};
      var mapping;
      while (str.length > 0) {
        if (str.charAt(0) === ';') {
          generatedLine++;
          str = str.slice(1);
          previousGeneratedColumn = 0;
        } else if (str.charAt(0) === ',') {
          str = str.slice(1);
        } else {
          mapping = {};
          mapping.generatedLine = generatedLine;
          base64VLQ.decode(str, temp);
          mapping.generatedColumn = previousGeneratedColumn + temp.value;
          previousGeneratedColumn = mapping.generatedColumn;
          str = temp.rest;
          if (str.length > 0 && !this._nextCharIsMappingSeparator(str)) {
            base64VLQ.decode(str, temp);
            mapping.source = this._sources.at(previousSource + temp.value);
            previousSource += temp.value;
            str = temp.rest;
            if (str.length === 0 || this._nextCharIsMappingSeparator(str)) {
              throw new Error('Found a source, but no line and column');
            }
            base64VLQ.decode(str, temp);
            mapping.originalLine = previousOriginalLine + temp.value;
            previousOriginalLine = mapping.originalLine;
            mapping.originalLine += 1;
            str = temp.rest;
            if (str.length === 0 || this._nextCharIsMappingSeparator(str)) {
              throw new Error('Found a source and line, but no column');
            }
            base64VLQ.decode(str, temp);
            mapping.originalColumn = previousOriginalColumn + temp.value;
            previousOriginalColumn = mapping.originalColumn;
            str = temp.rest;
            if (str.length > 0 && !this._nextCharIsMappingSeparator(str)) {
              base64VLQ.decode(str, temp);
              mapping.name = this._names.at(previousName + temp.value);
              previousName += temp.value;
              str = temp.rest;
            }
          }
          this.__generatedMappings.push(mapping);
          if (typeof mapping.originalLine === 'number') {
            this.__originalMappings.push(mapping);
          }
        }
      }
      this.__generatedMappings.sort(util.compareByGeneratedPositions);
      this.__originalMappings.sort(util.compareByOriginalPositions);
    };
    BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator) {
      if (aNeedle[aLineName] <= 0) {
        throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
      }
      return binarySearch.search(aNeedle, aMappings, aComparator);
    };
    BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
      for (var index = 0; index < this._generatedMappings.length; ++index) {
        var mapping = this._generatedMappings[index];
        if (index + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index + 1];
          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }
        mapping.lastGeneratedColumn = Infinity;
      }
    };
    BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
      };
      var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositions);
      if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
          var source = util.getArg(mapping, 'source', null);
          if (source != null && this.sourceRoot != null) {
            source = util.join(this.sourceRoot, source);
          }
          return {
            source: source,
            line: util.getArg(mapping, 'originalLine', null),
            column: util.getArg(mapping, 'originalColumn', null),
            name: util.getArg(mapping, 'name', null)
          };
        }
      }
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };
    BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }
      if (this.sourceRoot != null) {
        aSource = util.relative(this.sourceRoot, aSource);
      }
      if (this._sources.has(aSource)) {
        return this.sourcesContent[this._sources.indexOf(aSource)];
      }
      var url;
      if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + aSource)];
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
      var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
      };
      if (this.sourceRoot != null) {
        needle.source = util.relative(this.sourceRoot, needle.source);
      }
      var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions);
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };
    exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6c", ["6e", "6a", "69", "6d", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    var util = $__require('6a');
    function SourceMapConsumer(aSourceMap) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === 'string') {
        sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
      }
      if (sourceMap.sections != null) {
        var indexedSourceMapConsumer = $__require('69');
        return new indexedSourceMapConsumer.IndexedSourceMapConsumer(sourceMap);
      } else {
        var basicSourceMapConsumer = $__require('6d');
        return new basicSourceMapConsumer.BasicSourceMapConsumer(sourceMap);
      }
    }
    SourceMapConsumer.fromSourceMap = function(aSourceMap) {
      var basicSourceMapConsumer = $__require('6d');
      return basicSourceMapConsumer.BasicSourceMapConsumer.fromSourceMap(aSourceMap);
    };
    SourceMapConsumer.prototype._version = 3;
    SourceMapConsumer.prototype.__generatedMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {get: function() {
        if (!this.__generatedMappings) {
          this.__generatedMappings = [];
          this.__originalMappings = [];
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
      }});
    SourceMapConsumer.prototype.__originalMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {get: function() {
        if (!this.__originalMappings) {
          this.__generatedMappings = [];
          this.__originalMappings = [];
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
      }});
    SourceMapConsumer.prototype._nextCharIsMappingSeparator = function SourceMapConsumer_nextCharIsMappingSeparator(aStr) {
      var c = aStr.charAt(0);
      return c === ";" || c === ",";
    };
    SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };
    SourceMapConsumer.GENERATED_ORDER = 1;
    SourceMapConsumer.ORIGINAL_ORDER = 2;
    SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
      var mappings;
      switch (order) {
        case SourceMapConsumer.GENERATED_ORDER:
          mappings = this._generatedMappings;
          break;
        case SourceMapConsumer.ORIGINAL_ORDER:
          mappings = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var sourceRoot = this.sourceRoot;
      mappings.map(function(mapping) {
        var source = mapping.source;
        if (source != null && sourceRoot != null) {
          source = util.join(sourceRoot, source);
        }
        return {
          source: source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name
        };
      }).forEach(aCallback, context);
    };
    SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: Infinity
      };
      if (this.sourceRoot != null) {
        needle.source = util.relative(this.sourceRoot, needle.source);
      }
      var mappings = [];
      var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions);
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        while (mapping && mapping.originalLine === needle.originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });
          mapping = this._originalMappings[--index];
        }
      }
      return mappings.reverse();
    };
    exports.SourceMapConsumer = SourceMapConsumer;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("71", ["6e", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    var charToIntMap = {};
    var intToCharMap = {};
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('').forEach(function(ch, index) {
      charToIntMap[ch] = index;
      intToCharMap[index] = ch;
    });
    exports.encode = function base64_encode(aNumber) {
      if (aNumber in intToCharMap) {
        return intToCharMap[aNumber];
      }
      throw new TypeError("Must be between 0 and 63: " + aNumber);
    };
    exports.decode = function base64_decode(aChar) {
      if (aChar in charToIntMap) {
        return charToIntMap[aChar];
      }
      throw new TypeError("Not a valid base 64 digit: " + aChar);
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("70", ["6e", "71", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    var base64 = $__require('71');
    var VLQ_BASE_SHIFT = 5;
    var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
    var VLQ_BASE_MASK = VLQ_BASE - 1;
    var VLQ_CONTINUATION_BIT = VLQ_BASE;
    function toVLQSigned(aValue) {
      return aValue < 0 ? ((-aValue) << 1) + 1 : (aValue << 1) + 0;
    }
    function fromVLQSigned(aValue) {
      var isNegative = (aValue & 1) === 1;
      var shifted = aValue >> 1;
      return isNegative ? -shifted : shifted;
    }
    exports.encode = function base64VLQ_encode(aValue) {
      var encoded = "";
      var digit;
      var vlq = toVLQSigned(aValue);
      do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
          digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
      } while (vlq > 0);
      return encoded;
    };
    exports.decode = function base64VLQ_decode(aStr, aOutParam) {
      var i = 0;
      var strLen = aStr.length;
      var result = 0;
      var shift = 0;
      var continuation,
          digit;
      do {
        if (i >= strLen) {
          throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charAt(i++));
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
      } while (continuation);
      aOutParam.value = fromVLQSigned(result);
      aOutParam.rest = aStr.slice(i);
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6f", ["6e", "6a", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    var util = $__require('6a');
    function ArraySet() {
      this._array = [];
      this._set = {};
    }
    ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
      var set = new ArraySet();
      for (var i = 0,
          len = aArray.length; i < len; i++) {
        set.add(aArray[i], aAllowDuplicates);
      }
      return set;
    };
    ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
      var isDuplicate = this.has(aStr);
      var idx = this._array.length;
      if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
      }
      if (!isDuplicate) {
        this._set[util.toSetString(aStr)] = idx;
      }
    };
    ArraySet.prototype.has = function ArraySet_has(aStr) {
      return Object.prototype.hasOwnProperty.call(this._set, util.toSetString(aStr));
    };
    ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
      if (this.has(aStr)) {
        return this._set[util.toSetString(aStr)];
      }
      throw new Error('"' + aStr + '" is not in the set.');
    };
    ArraySet.prototype.at = function ArraySet_at(aIdx) {
      if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
      }
      throw new Error('No element indexed by ' + aIdx);
    };
    ArraySet.prototype.toArray = function ArraySet_toArray() {
      return this._array.slice();
    };
    exports.ArraySet = ArraySet;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("72", ["6e", "6a", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    var util = $__require('6a');
    function generatedPositionAfter(mappingA, mappingB) {
      var lineA = mappingA.generatedLine;
      var lineB = mappingB.generatedLine;
      var columnA = mappingA.generatedColumn;
      var columnB = mappingB.generatedColumn;
      return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositions(mappingA, mappingB) <= 0;
    }
    function MappingList() {
      this._array = [];
      this._sorted = true;
      this._last = {
        generatedLine: -1,
        generatedColumn: 0
      };
    }
    MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };
    MappingList.prototype.add = function MappingList_add(aMapping) {
      var mapping;
      if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
      } else {
        this._sorted = false;
        this._array.push(aMapping);
      }
    };
    MappingList.prototype.toArray = function MappingList_toArray() {
      if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositions);
        this._sorted = true;
      }
      return this._array;
    };
    exports.MappingList = MappingList;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("73", ["6e", "70", "6a", "6f", "72", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    var base64VLQ = $__require('70');
    var util = $__require('6a');
    var ArraySet = $__require('6f').ArraySet;
    var MappingList = $__require('72').MappingList;
    function SourceMapGenerator(aArgs) {
      if (!aArgs) {
        aArgs = {};
      }
      this._file = util.getArg(aArgs, 'file', null);
      this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
      this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
      this._sources = new ArraySet();
      this._names = new ArraySet();
      this._mappings = new MappingList();
      this._sourcesContents = null;
    }
    SourceMapGenerator.prototype._version = 3;
    SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
      });
      aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }};
        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }
          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };
          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }
        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };
    SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, 'generated');
      var original = util.getArg(aArgs, 'original', null);
      var source = util.getArg(aArgs, 'source', null);
      var name = util.getArg(aArgs, 'name', null);
      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }
      if (source != null && !this._sources.has(source)) {
        this._sources.add(source);
      }
      if (name != null && !this._names.has(name)) {
        this._names.add(name);
      }
      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
      });
    };
    SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
      }
      if (aSourceContent != null) {
        if (!this._sourcesContents) {
          this._sourcesContents = {};
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };
    SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' + 'or the source map\'s "file" property. Both were omitted.');
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }
      var newSources = new ArraySet();
      var newNames = new ArraySet();
      this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util.join(aSourceMapPath, mapping.source);
            }
            if (sourceRoot != null) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }
      }, this);
      this._sources = newSources;
      this._names = newNames;
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile = util.join(aSourceMapPath, sourceFile);
          }
          if (sourceRoot != null) {
            sourceFile = util.relative(sourceRoot, sourceFile);
          }
          this.setSourceContent(sourceFile, content);
        }
      }, this);
    };
    SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
      if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
      } else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
      } else {
        throw new Error('Invalid mapping: ' + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };
    SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = '';
      var mapping;
      var mappings = this._mappings.toArray();
      for (var i = 0,
          len = mappings.length; i < len; i++) {
        mapping = mappings[i];
        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            result += ';';
            previousGeneratedLine++;
          }
        } else {
          if (i > 0) {
            if (!util.compareByGeneratedPositions(mapping, mappings[i - 1])) {
              continue;
            }
            result += ',';
          }
        }
        result += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
          result += base64VLQ.encode(this._sources.indexOf(mapping.source) - previousSource);
          previousSource = this._sources.indexOf(mapping.source);
          result += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;
          result += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;
          if (mapping.name != null) {
            result += base64VLQ.encode(this._names.indexOf(mapping.name) - previousName);
            previousName = this._names.indexOf(mapping.name);
          }
        }
      }
      return result;
    };
    SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function(source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
      }, this);
    };
    SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }
      return map;
    };
    SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
      return JSON.stringify(this);
    };
    exports.SourceMapGenerator = SourceMapGenerator;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6e", ["@node/path", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  'use strict';
  function amdefine(module, requireFn) {
    'use strict';
    var defineCache = {},
        loaderCache = {},
        alreadyCalled = false,
        path = $__require('@node/path'),
        makeRequire,
        stringRequire;
    function trimDots(ary) {
      var i,
          part;
      for (i = 0; ary[i]; i += 1) {
        part = ary[i];
        if (part === '.') {
          ary.splice(i, 1);
          i -= 1;
        } else if (part === '..') {
          if (i === 1 && (ary[2] === '..' || ary[0] === '..')) {
            break;
          } else if (i > 0) {
            ary.splice(i - 1, 2);
            i -= 2;
          }
        }
      }
    }
    function normalize(name, baseName) {
      var baseParts;
      if (name && name.charAt(0) === '.') {
        if (baseName) {
          baseParts = baseName.split('/');
          baseParts = baseParts.slice(0, baseParts.length - 1);
          baseParts = baseParts.concat(name.split('/'));
          trimDots(baseParts);
          name = baseParts.join('/');
        }
      }
      return name;
    }
    function makeNormalize(relName) {
      return function(name) {
        return normalize(name, relName);
      };
    }
    function makeLoad(id) {
      function load(value) {
        loaderCache[id] = value;
      }
      load.fromText = function(id, text) {
        throw new Error('amdefine does not implement load.fromText');
      };
      return load;
    }
    makeRequire = function(systemRequire, exports, module, relId) {
      function amdRequire(deps, callback) {
        if (typeof deps === 'string') {
          return stringRequire(systemRequire, exports, module, deps, relId);
        } else {
          deps = deps.map(function(depName) {
            return stringRequire(systemRequire, exports, module, depName, relId);
          });
          if (callback) {
            process.nextTick(function() {
              callback.apply(null, deps);
            });
          }
        }
      }
      amdRequire.toUrl = function(filePath) {
        if (filePath.indexOf('.') === 0) {
          return normalize(filePath, path.dirname(module.filename));
        } else {
          return filePath;
        }
      };
      return amdRequire;
    };
    requireFn = requireFn || function req() {
      return module.require.apply(module, arguments);
    };
    function runFactory(id, deps, factory) {
      var r,
          e,
          m,
          result;
      if (id) {
        e = loaderCache[id] = {};
        m = {
          id: id,
          uri: __filename,
          exports: e
        };
        r = makeRequire(requireFn, e, m, id);
      } else {
        if (alreadyCalled) {
          throw new Error('amdefine with no module ID cannot be called more than once per file.');
        }
        alreadyCalled = true;
        e = module.exports;
        m = module;
        r = makeRequire(requireFn, e, m, module.id);
      }
      if (deps) {
        deps = deps.map(function(depName) {
          return r(depName);
        });
      }
      if (typeof factory === 'function') {
        result = factory.apply(m.exports, deps);
      } else {
        result = factory;
      }
      if (result !== undefined) {
        m.exports = result;
        if (id) {
          loaderCache[id] = m.exports;
        }
      }
    }
    stringRequire = function(systemRequire, exports, module, id, relId) {
      var index = id.indexOf('!'),
          originalId = id,
          prefix,
          plugin;
      if (index === -1) {
        id = normalize(id, relId);
        if (id === 'require') {
          return makeRequire(systemRequire, exports, module, relId);
        } else if (id === 'exports') {
          return exports;
        } else if (id === 'module') {
          return module;
        } else if (loaderCache.hasOwnProperty(id)) {
          return loaderCache[id];
        } else if (defineCache[id]) {
          runFactory.apply(null, defineCache[id]);
          return loaderCache[id];
        } else {
          if (systemRequire) {
            return systemRequire(originalId);
          } else {
            throw new Error('No module with ID: ' + id);
          }
        }
      } else {
        prefix = id.substring(0, index);
        id = id.substring(index + 1, id.length);
        plugin = stringRequire(systemRequire, exports, module, prefix, relId);
        if (plugin.normalize) {
          id = plugin.normalize(id, makeNormalize(relId));
        } else {
          id = normalize(id, relId);
        }
        if (loaderCache[id]) {
          return loaderCache[id];
        } else {
          plugin.load(id, makeRequire(systemRequire, exports, module, relId), makeLoad(id), {});
          return loaderCache[id];
        }
      }
    };
    function define(id, deps, factory) {
      if (Array.isArray(id)) {
        factory = deps;
        deps = id;
        id = undefined;
      } else if (typeof id !== 'string') {
        factory = id;
        id = deps = undefined;
      }
      if (deps && !Array.isArray(deps)) {
        factory = deps;
        deps = undefined;
      }
      if (!deps) {
        deps = ['require', 'exports', 'module'];
      }
      if (id) {
        defineCache[id] = [id, deps, factory];
      } else {
        runFactory(id, deps, factory);
      }
    }
    define.require = function(id) {
      if (loaderCache[id]) {
        return loaderCache[id];
      }
      if (defineCache[id]) {
        runFactory.apply(null, defineCache[id]);
        return loaderCache[id];
      }
    };
    define.amd = {};
    return define;
  }
  module.exports = amdefine;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6a", ["6e", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = '';
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ':';
      }
      url += '//';
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + '@';
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports.urlGenerate = urlGenerate;
    function normalize(aPath) {
      var path = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path = url.path;
      }
      var isAbsolute = (path.charAt(0) === '/');
      var parts = path.split(/\/+/);
      for (var part,
          up = 0,
          i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === '.') {
          parts.splice(i, 1);
        } else if (part === '..') {
          up++;
        } else if (up > 0) {
          if (part === '') {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path = parts.join('/');
      if (path === '') {
        path = isAbsolute ? '/' : '.';
      }
      if (url) {
        url.path = path;
        return urlGenerate(url);
      }
      return path;
    }
    exports.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || '/';
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports.join = join;
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, '');
      var url = urlParse(aRoot);
      if (aPath.charAt(0) == "/" && url && url.path == "/") {
        return aPath.slice(1);
      }
      return aPath.indexOf(aRoot + '/') === 0 ? aPath.substr(aRoot.length + 1) : aPath;
    }
    exports.relative = relative;
    function toSetString(aStr) {
      return '$' + aStr;
    }
    exports.toSetString = toSetString;
    function fromSetString(aStr) {
      return aStr.substr(1);
    }
    exports.fromSetString = fromSetString;
    function strcmp(aStr1, aStr2) {
      var s1 = aStr1 || "";
      var s2 = aStr2 || "";
      return (s1 > s2) - (s1 < s2);
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp;
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp || onlyCompareOriginal) {
        return cmp;
      }
      cmp = strcmp(mappingA.name, mappingB.name);
      if (cmp) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp) {
        return cmp;
      }
      return mappingA.generatedColumn - mappingB.generatedColumn;
    }
    ;
    exports.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositions(mappingA, mappingB, onlyCompareGenerated) {
      var cmp;
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    ;
    exports.compareByGeneratedPositions = compareByGeneratedPositions;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("74", ["6e", "73", "6a", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof define !== 'function') {
    var define = $__require('6e')(module, $__require);
  }
  define(function($__require, exports, module) {
    var SourceMapGenerator = $__require('73').SourceMapGenerator;
    var util = $__require('6a');
    var REGEX_NEWLINE = /(\r?\n)/;
    var NEWLINE_CODE = 10;
    var isSourceNode = "$$$isSourceNode$$$";
    function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
      this.children = [];
      this.sourceContents = {};
      this.line = aLine == null ? null : aLine;
      this.column = aColumn == null ? null : aColumn;
      this.source = aSource == null ? null : aSource;
      this.name = aName == null ? null : aName;
      this[isSourceNode] = true;
      if (aChunks != null)
        this.add(aChunks);
    }
    SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      var node = new SourceNode();
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var shiftNextLine = function() {
        var lineContents = remainingLines.shift();
        var newLine = remainingLines.shift() || "";
        return lineContents + newLine;
      };
      var lastGeneratedLine = 1,
          lastGeneratedColumn = 0;
      var lastMapping = null;
      aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
          if (lastGeneratedLine < mapping.generatedLine) {
            var code = "";
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
          } else {
            var nextLine = remainingLines[0];
            var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
            remainingLines[0] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            lastMapping = mapping;
            return;
          }
        }
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[0];
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[0] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      if (remainingLines.length > 0) {
        if (lastMapping) {
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.join(""));
      }
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });
      return node;
      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
          node.add(code);
        } else {
          var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
          node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
      }
    };
    SourceNode.prototype.add = function SourceNode_add(aChunk) {
      if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
          this.add(chunk);
        }, this);
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
          this.children.push(aChunk);
        }
      } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
      }
      return this;
    };
    SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
      if (Array.isArray(aChunk)) {
        for (var i = aChunk.length - 1; i >= 0; i--) {
          this.prepend(aChunk[i]);
        }
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
      } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
      }
      return this;
    };
    SourceNode.prototype.walk = function SourceNode_walk(aFn) {
      var chunk;
      for (var i = 0,
          len = this.children.length; i < len; i++) {
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
          chunk.walk(aFn);
        } else {
          if (chunk !== '') {
            aFn(chunk, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
          }
        }
      }
    };
    SourceNode.prototype.join = function SourceNode_join(aSep) {
      var newChildren;
      var i;
      var len = this.children.length;
      if (len > 0) {
        newChildren = [];
        for (i = 0; i < len - 1; i++) {
          newChildren.push(this.children[i]);
          newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
      }
      return this;
    };
    SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
      var lastChild = this.children[this.children.length - 1];
      if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
      } else if (typeof lastChild === 'string') {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
      } else {
        this.children.push(''.replace(aPattern, aReplacement));
      }
      return this;
    };
    SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };
    SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
      for (var i = 0,
          len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }
      var sources = Object.keys(this.sourceContents);
      for (var i = 0,
          len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };
    SourceNode.prototype.toString = function SourceNode_toString() {
      var str = "";
      this.walk(function(chunk) {
        str += chunk;
      });
      return str;
    };
    SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
      var generated = {
        code: "",
        line: 1,
        column: 0
      };
      var map = new SourceMapGenerator(aArgs);
      var sourceMappingActive = false;
      var lastOriginalSource = null;
      var lastOriginalLine = null;
      var lastOriginalColumn = null;
      var lastOriginalName = null;
      this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
          if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
          lastOriginalSource = original.source;
          lastOriginalLine = original.line;
          lastOriginalColumn = original.column;
          lastOriginalName = original.name;
          sourceMappingActive = true;
        } else if (sourceMappingActive) {
          map.addMapping({generated: {
              line: generated.line,
              column: generated.column
            }});
          lastOriginalSource = null;
          sourceMappingActive = false;
        }
        for (var idx = 0,
            length = chunk.length; idx < length; idx++) {
          if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            if (idx + 1 === length) {
              lastOriginalSource = null;
              sourceMappingActive = false;
            } else if (sourceMappingActive) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
          } else {
            generated.column++;
          }
        }
      });
      this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
      });
      return {
        code: generated.code,
        map: map
      };
    };
    exports.SourceNode = SourceNode;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("75", ["73", "6c", "74", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.SourceMapGenerator = $__require('73').SourceMapGenerator;
  exports.SourceMapConsumer = $__require('6c').SourceMapConsumer;
  exports.SourceNode = $__require('74').SourceNode;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("76", [], false, function() {
  return {
    "name": "escodegen",
    "description": "ECMAScript code generator",
    "homepage": "http://github.com/estools/escodegen",
    "main": "escodegen.js",
    "bin": {
      "esgenerate": "./bin/esgenerate.js",
      "escodegen": "./bin/escodegen.js"
    },
    "files": [
      "LICENSE.BSD",
      "LICENSE.source-map",
      "README.md",
      "bin",
      "escodegen.js",
      "package.json"
    ],
    "version": "1.8.0",
    "engines": {
      "node": ">=0.12.0"
    },
    "maintainers": [
      {
        "name": "Yusuke Suzuki",
        "email": "utatane.tea@gmail.com",
        "web": "http://github.com/Constellation"
      }
    ],
    "repository": {
      "type": "git",
      "url": "http://github.com/estools/escodegen.git"
    },
    "dependencies": {
      "estraverse": "^1.9.1",
      "esutils": "^2.0.2",
      "esprima": "^2.7.1",
      "optionator": "^0.8.1"
    },
    "optionalDependencies": {
      "source-map": "~0.2.0"
    },
    "devDependencies": {
      "acorn-6to5": "^0.11.1-25",
      "bluebird": "^2.3.11",
      "bower-registry-client": "^0.2.1",
      "chai": "^1.10.0",
      "commonjs-everywhere": "^0.9.7",
      "gulp": "^3.8.10",
      "gulp-eslint": "^0.2.0",
      "gulp-mocha": "^2.0.0",
      "semver": "^5.1.0"
    },
    "license": "BSD-2-Clause",
    "scripts": {
      "test": "gulp travis",
      "unit-test": "gulp test",
      "lint": "gulp lint",
      "release": "node tools/release.js",
      "build-min": "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
      "build": "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js"
    }
  };
});

$__System.registerDynamic("77", ["64", "68", "75", "76", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function() {
    'use strict';
    var Syntax,
        Precedence,
        BinaryPrecedence,
        SourceNode,
        estraverse,
        esutils,
        isArray,
        base,
        indent,
        json,
        renumber,
        hexadecimal,
        quotes,
        escapeless,
        newline,
        space,
        parentheses,
        semicolons,
        safeConcatenation,
        directive,
        extra,
        parse,
        sourceMap,
        sourceCode,
        preserveBlankLines,
        FORMAT_MINIFY,
        FORMAT_DEFAULTS;
    estraverse = $__require('64');
    esutils = $__require('68');
    Syntax = estraverse.Syntax;
    function isExpression(node) {
      return CodeGenerator.Expression.hasOwnProperty(node.type);
    }
    function isStatement(node) {
      return CodeGenerator.Statement.hasOwnProperty(node.type);
    }
    Precedence = {
      Sequence: 0,
      Yield: 1,
      Await: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      LogicalOR: 3,
      LogicalAND: 4,
      BitwiseOR: 5,
      BitwiseXOR: 6,
      BitwiseAND: 7,
      Equality: 8,
      Relational: 9,
      BitwiseSHIFT: 10,
      Additive: 11,
      Multiplicative: 12,
      Unary: 13,
      Postfix: 14,
      Call: 15,
      New: 16,
      TaggedTemplate: 17,
      Member: 18,
      Primary: 19
    };
    BinaryPrecedence = {
      '||': Precedence.LogicalOR,
      '&&': Precedence.LogicalAND,
      '|': Precedence.BitwiseOR,
      '^': Precedence.BitwiseXOR,
      '&': Precedence.BitwiseAND,
      '==': Precedence.Equality,
      '!=': Precedence.Equality,
      '===': Precedence.Equality,
      '!==': Precedence.Equality,
      'is': Precedence.Equality,
      'isnt': Precedence.Equality,
      '<': Precedence.Relational,
      '>': Precedence.Relational,
      '<=': Precedence.Relational,
      '>=': Precedence.Relational,
      'in': Precedence.Relational,
      'instanceof': Precedence.Relational,
      '<<': Precedence.BitwiseSHIFT,
      '>>': Precedence.BitwiseSHIFT,
      '>>>': Precedence.BitwiseSHIFT,
      '+': Precedence.Additive,
      '-': Precedence.Additive,
      '*': Precedence.Multiplicative,
      '%': Precedence.Multiplicative,
      '/': Precedence.Multiplicative
    };
    var F_ALLOW_IN = 1,
        F_ALLOW_CALL = 1 << 1,
        F_ALLOW_UNPARATH_NEW = 1 << 2,
        F_FUNC_BODY = 1 << 3,
        F_DIRECTIVE_CTX = 1 << 4,
        F_SEMICOLON_OPT = 1 << 5;
    var E_FTT = F_ALLOW_CALL | F_ALLOW_UNPARATH_NEW,
        E_TTF = F_ALLOW_IN | F_ALLOW_CALL,
        E_TTT = F_ALLOW_IN | F_ALLOW_CALL | F_ALLOW_UNPARATH_NEW,
        E_TFF = F_ALLOW_IN,
        E_FFT = F_ALLOW_UNPARATH_NEW,
        E_TFT = F_ALLOW_IN | F_ALLOW_UNPARATH_NEW;
    var S_TFFF = F_ALLOW_IN,
        S_TFFT = F_ALLOW_IN | F_SEMICOLON_OPT,
        S_FFFF = 0x00,
        S_TFTF = F_ALLOW_IN | F_DIRECTIVE_CTX,
        S_TTFF = F_ALLOW_IN | F_FUNC_BODY;
    function getDefaultOptions() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: false,
        format: {
          indent: {
            style: '    ',
            base: 0,
            adjustMultilineComment: false
          },
          newline: '\n',
          space: ' ',
          json: false,
          renumber: false,
          hexadecimal: false,
          quotes: 'single',
          escapeless: false,
          compact: false,
          parentheses: true,
          semicolons: true,
          safeConcatenation: false,
          preserveBlankLines: false
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: false,
          starlessGenerator: false
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: false,
        directive: false,
        raw: true,
        verbatim: null,
        sourceCode: null
      };
    }
    function stringRepeat(str, num) {
      var result = '';
      for (num |= 0; num > 0; num >>>= 1, str += str) {
        if (num & 1) {
          result += str;
        }
      }
      return result;
    }
    isArray = Array.isArray;
    if (!isArray) {
      isArray = function isArray(array) {
        return Object.prototype.toString.call(array) === '[object Array]';
      };
    }
    function hasLineTerminator(str) {
      return (/[\r\n]/g).test(str);
    }
    function endsWithLineTerminator(str) {
      var len = str.length;
      return len && esutils.code.isLineTerminator(str.charCodeAt(len - 1));
    }
    function merge(target, override) {
      var key;
      for (key in override) {
        if (override.hasOwnProperty(key)) {
          target[key] = override[key];
        }
      }
      return target;
    }
    function updateDeeply(target, override) {
      var key,
          val;
      function isHashObject(target) {
        return typeof target === 'object' && target instanceof Object && !(target instanceof RegExp);
      }
      for (key in override) {
        if (override.hasOwnProperty(key)) {
          val = override[key];
          if (isHashObject(val)) {
            if (isHashObject(target[key])) {
              updateDeeply(target[key], val);
            } else {
              target[key] = updateDeeply({}, val);
            }
          } else {
            target[key] = val;
          }
        }
      }
      return target;
    }
    function generateNumber(value) {
      var result,
          point,
          temp,
          exponent,
          pos;
      if (value !== value) {
        throw new Error('Numeric literal whose value is NaN');
      }
      if (value < 0 || (value === 0 && 1 / value < 0)) {
        throw new Error('Numeric literal whose value is negative');
      }
      if (value === 1 / 0) {
        return json ? 'null' : renumber ? '1e400' : '1e+400';
      }
      result = '' + value;
      if (!renumber || result.length < 3) {
        return result;
      }
      point = result.indexOf('.');
      if (!json && result.charCodeAt(0) === 0x30 && point === 1) {
        point = 0;
        result = result.slice(1);
      }
      temp = result;
      result = result.replace('e+', 'e');
      exponent = 0;
      if ((pos = temp.indexOf('e')) > 0) {
        exponent = +temp.slice(pos + 1);
        temp = temp.slice(0, pos);
      }
      if (point >= 0) {
        exponent -= temp.length - point - 1;
        temp = +(temp.slice(0, point) + temp.slice(point + 1)) + '';
      }
      pos = 0;
      while (temp.charCodeAt(temp.length + pos - 1) === 0x30) {
        --pos;
      }
      if (pos !== 0) {
        exponent -= pos;
        temp = temp.slice(0, pos);
      }
      if (exponent !== 0) {
        temp += 'e' + exponent;
      }
      if ((temp.length < result.length || (hexadecimal && value > 1e12 && Math.floor(value) === value && (temp = '0x' + value.toString(16)).length < result.length)) && +temp === value) {
        result = temp;
      }
      return result;
    }
    function escapeRegExpCharacter(ch, previousIsBackslash) {
      if ((ch & ~1) === 0x2028) {
        return (previousIsBackslash ? 'u' : '\\u') + ((ch === 0x2028) ? '2028' : '2029');
      } else if (ch === 10 || ch === 13) {
        return (previousIsBackslash ? '' : '\\') + ((ch === 10) ? 'n' : 'r');
      }
      return String.fromCharCode(ch);
    }
    function generateRegExp(reg) {
      var match,
          result,
          flags,
          i,
          iz,
          ch,
          characterInBrack,
          previousIsBackslash;
      result = reg.toString();
      if (reg.source) {
        match = result.match(/\/([^/]*)$/);
        if (!match) {
          return result;
        }
        flags = match[1];
        result = '';
        characterInBrack = false;
        previousIsBackslash = false;
        for (i = 0, iz = reg.source.length; i < iz; ++i) {
          ch = reg.source.charCodeAt(i);
          if (!previousIsBackslash) {
            if (characterInBrack) {
              if (ch === 93) {
                characterInBrack = false;
              }
            } else {
              if (ch === 47) {
                result += '\\';
              } else if (ch === 91) {
                characterInBrack = true;
              }
            }
            result += escapeRegExpCharacter(ch, previousIsBackslash);
            previousIsBackslash = ch === 92;
          } else {
            result += escapeRegExpCharacter(ch, previousIsBackslash);
            previousIsBackslash = false;
          }
        }
        return '/' + result + '/' + flags;
      }
      return result;
    }
    function escapeAllowedCharacter(code, next) {
      var hex;
      if (code === 0x08) {
        return '\\b';
      }
      if (code === 0x0C) {
        return '\\f';
      }
      if (code === 0x09) {
        return '\\t';
      }
      hex = code.toString(16).toUpperCase();
      if (json || code > 0xFF) {
        return '\\u' + '0000'.slice(hex.length) + hex;
      } else if (code === 0x0000 && !esutils.code.isDecimalDigit(next)) {
        return '\\0';
      } else if (code === 0x000B) {
        return '\\x0B';
      } else {
        return '\\x' + '00'.slice(hex.length) + hex;
      }
    }
    function escapeDisallowedCharacter(code) {
      if (code === 0x5C) {
        return '\\\\';
      }
      if (code === 0x0A) {
        return '\\n';
      }
      if (code === 0x0D) {
        return '\\r';
      }
      if (code === 0x2028) {
        return '\\u2028';
      }
      if (code === 0x2029) {
        return '\\u2029';
      }
      throw new Error('Incorrectly classified character');
    }
    function escapeDirective(str) {
      var i,
          iz,
          code,
          quote;
      quote = quotes === 'double' ? '"' : '\'';
      for (i = 0, iz = str.length; i < iz; ++i) {
        code = str.charCodeAt(i);
        if (code === 0x27) {
          quote = '"';
          break;
        } else if (code === 0x22) {
          quote = '\'';
          break;
        } else if (code === 0x5C) {
          ++i;
        }
      }
      return quote + str + quote;
    }
    function escapeString(str) {
      var result = '',
          i,
          len,
          code,
          singleQuotes = 0,
          doubleQuotes = 0,
          single,
          quote;
      for (i = 0, len = str.length; i < len; ++i) {
        code = str.charCodeAt(i);
        if (code === 0x27) {
          ++singleQuotes;
        } else if (code === 0x22) {
          ++doubleQuotes;
        } else if (code === 0x2F && json) {
          result += '\\';
        } else if (esutils.code.isLineTerminator(code) || code === 0x5C) {
          result += escapeDisallowedCharacter(code);
          continue;
        } else if (!esutils.code.isIdentifierPartES5(code) && (json && code < 0x20 || !json && !escapeless && (code < 0x20 || code > 0x7E))) {
          result += escapeAllowedCharacter(code, str.charCodeAt(i + 1));
          continue;
        }
        result += String.fromCharCode(code);
      }
      single = !(quotes === 'double' || (quotes === 'auto' && doubleQuotes < singleQuotes));
      quote = single ? '\'' : '"';
      if (!(single ? singleQuotes : doubleQuotes)) {
        return quote + result + quote;
      }
      str = result;
      result = quote;
      for (i = 0, len = str.length; i < len; ++i) {
        code = str.charCodeAt(i);
        if ((code === 0x27 && single) || (code === 0x22 && !single)) {
          result += '\\';
        }
        result += String.fromCharCode(code);
      }
      return result + quote;
    }
    function flattenToString(arr) {
      var i,
          iz,
          elem,
          result = '';
      for (i = 0, iz = arr.length; i < iz; ++i) {
        elem = arr[i];
        result += isArray(elem) ? flattenToString(elem) : elem;
      }
      return result;
    }
    function toSourceNodeWhenNeeded(generated, node) {
      if (!sourceMap) {
        if (isArray(generated)) {
          return flattenToString(generated);
        } else {
          return generated;
        }
      }
      if (node == null) {
        if (generated instanceof SourceNode) {
          return generated;
        } else {
          node = {};
        }
      }
      if (node.loc == null) {
        return new SourceNode(null, null, sourceMap, generated, node.name || null);
      }
      return new SourceNode(node.loc.start.line, node.loc.start.column, (sourceMap === true ? node.loc.source || null : sourceMap), generated, node.name || null);
    }
    function noEmptySpace() {
      return (space) ? space : ' ';
    }
    function join(left, right) {
      var leftSource,
          rightSource,
          leftCharCode,
          rightCharCode;
      leftSource = toSourceNodeWhenNeeded(left).toString();
      if (leftSource.length === 0) {
        return [right];
      }
      rightSource = toSourceNodeWhenNeeded(right).toString();
      if (rightSource.length === 0) {
        return [left];
      }
      leftCharCode = leftSource.charCodeAt(leftSource.length - 1);
      rightCharCode = rightSource.charCodeAt(0);
      if ((leftCharCode === 0x2B || leftCharCode === 0x2D) && leftCharCode === rightCharCode || esutils.code.isIdentifierPartES5(leftCharCode) && esutils.code.isIdentifierPartES5(rightCharCode) || leftCharCode === 0x2F && rightCharCode === 0x69) {
        return [left, noEmptySpace(), right];
      } else if (esutils.code.isWhiteSpace(leftCharCode) || esutils.code.isLineTerminator(leftCharCode) || esutils.code.isWhiteSpace(rightCharCode) || esutils.code.isLineTerminator(rightCharCode)) {
        return [left, right];
      }
      return [left, space, right];
    }
    function addIndent(stmt) {
      return [base, stmt];
    }
    function withIndent(fn) {
      var previousBase;
      previousBase = base;
      base += indent;
      fn(base);
      base = previousBase;
    }
    function calculateSpaces(str) {
      var i;
      for (i = str.length - 1; i >= 0; --i) {
        if (esutils.code.isLineTerminator(str.charCodeAt(i))) {
          break;
        }
      }
      return (str.length - 1) - i;
    }
    function adjustMultilineComment(value, specialBase) {
      var array,
          i,
          len,
          line,
          j,
          spaces,
          previousBase,
          sn;
      array = value.split(/\r\n|[\r\n]/);
      spaces = Number.MAX_VALUE;
      for (i = 1, len = array.length; i < len; ++i) {
        line = array[i];
        j = 0;
        while (j < line.length && esutils.code.isWhiteSpace(line.charCodeAt(j))) {
          ++j;
        }
        if (spaces > j) {
          spaces = j;
        }
      }
      if (typeof specialBase !== 'undefined') {
        previousBase = base;
        if (array[1][spaces] === '*') {
          specialBase += ' ';
        }
        base = specialBase;
      } else {
        if (spaces & 1) {
          --spaces;
        }
        previousBase = base;
      }
      for (i = 1, len = array.length; i < len; ++i) {
        sn = toSourceNodeWhenNeeded(addIndent(array[i].slice(spaces)));
        array[i] = sourceMap ? sn.join('') : sn;
      }
      base = previousBase;
      return array.join('\n');
    }
    function generateComment(comment, specialBase) {
      if (comment.type === 'Line') {
        if (endsWithLineTerminator(comment.value)) {
          return '//' + comment.value;
        } else {
          var result = '//' + comment.value;
          if (!preserveBlankLines) {
            result += '\n';
          }
          return result;
        }
      }
      if (extra.format.indent.adjustMultilineComment && /[\n\r]/.test(comment.value)) {
        return adjustMultilineComment('/*' + comment.value + '*/', specialBase);
      }
      return '/*' + comment.value + '*/';
    }
    function addComments(stmt, result) {
      var i,
          len,
          comment,
          save,
          tailingToStatement,
          specialBase,
          fragment,
          extRange,
          range,
          prevRange,
          prefix,
          infix,
          suffix,
          count;
      if (stmt.leadingComments && stmt.leadingComments.length > 0) {
        save = result;
        if (preserveBlankLines) {
          comment = stmt.leadingComments[0];
          result = [];
          extRange = comment.extendedRange;
          range = comment.range;
          prefix = sourceCode.substring(extRange[0], range[0]);
          count = (prefix.match(/\n/g) || []).length;
          if (count > 0) {
            result.push(stringRepeat('\n', count));
            result.push(addIndent(generateComment(comment)));
          } else {
            result.push(prefix);
            result.push(generateComment(comment));
          }
          prevRange = range;
          for (i = 1, len = stmt.leadingComments.length; i < len; i++) {
            comment = stmt.leadingComments[i];
            range = comment.range;
            infix = sourceCode.substring(prevRange[1], range[0]);
            count = (infix.match(/\n/g) || []).length;
            result.push(stringRepeat('\n', count));
            result.push(addIndent(generateComment(comment)));
            prevRange = range;
          }
          suffix = sourceCode.substring(range[1], extRange[1]);
          count = (suffix.match(/\n/g) || []).length;
          result.push(stringRepeat('\n', count));
        } else {
          comment = stmt.leadingComments[0];
          result = [];
          if (safeConcatenation && stmt.type === Syntax.Program && stmt.body.length === 0) {
            result.push('\n');
          }
          result.push(generateComment(comment));
          if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
            result.push('\n');
          }
          for (i = 1, len = stmt.leadingComments.length; i < len; ++i) {
            comment = stmt.leadingComments[i];
            fragment = [generateComment(comment)];
            if (!endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
              fragment.push('\n');
            }
            result.push(addIndent(fragment));
          }
        }
        result.push(addIndent(save));
      }
      if (stmt.trailingComments) {
        if (preserveBlankLines) {
          comment = stmt.trailingComments[0];
          extRange = comment.extendedRange;
          range = comment.range;
          prefix = sourceCode.substring(extRange[0], range[0]);
          count = (prefix.match(/\n/g) || []).length;
          if (count > 0) {
            result.push(stringRepeat('\n', count));
            result.push(addIndent(generateComment(comment)));
          } else {
            result.push(prefix);
            result.push(generateComment(comment));
          }
        } else {
          tailingToStatement = !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString());
          specialBase = stringRepeat(' ', calculateSpaces(toSourceNodeWhenNeeded([base, result, indent]).toString()));
          for (i = 0, len = stmt.trailingComments.length; i < len; ++i) {
            comment = stmt.trailingComments[i];
            if (tailingToStatement) {
              if (i === 0) {
                result = [result, indent];
              } else {
                result = [result, specialBase];
              }
              result.push(generateComment(comment, specialBase));
            } else {
              result = [result, addIndent(generateComment(comment))];
            }
            if (i !== len - 1 && !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
              result = [result, '\n'];
            }
          }
        }
      }
      return result;
    }
    function generateBlankLines(start, end, result) {
      var j,
          newlineCount = 0;
      for (j = start; j < end; j++) {
        if (sourceCode[j] === '\n') {
          newlineCount++;
        }
      }
      for (j = 1; j < newlineCount; j++) {
        result.push(newline);
      }
    }
    function parenthesize(text, current, should) {
      if (current < should) {
        return ['(', text, ')'];
      }
      return text;
    }
    function generateVerbatimString(string) {
      var i,
          iz,
          result;
      result = string.split(/\r\n|\n/);
      for (i = 1, iz = result.length; i < iz; i++) {
        result[i] = newline + base + result[i];
      }
      return result;
    }
    function generateVerbatim(expr, precedence) {
      var verbatim,
          result,
          prec;
      verbatim = expr[extra.verbatim];
      if (typeof verbatim === 'string') {
        result = parenthesize(generateVerbatimString(verbatim), Precedence.Sequence, precedence);
      } else {
        result = generateVerbatimString(verbatim.content);
        prec = (verbatim.precedence != null) ? verbatim.precedence : Precedence.Sequence;
        result = parenthesize(result, prec, precedence);
      }
      return toSourceNodeWhenNeeded(result, expr);
    }
    function CodeGenerator() {}
    CodeGenerator.prototype.maybeBlock = function(stmt, flags) {
      var result,
          noLeadingComment,
          that = this;
      noLeadingComment = !extra.comment || !stmt.leadingComments;
      if (stmt.type === Syntax.BlockStatement && noLeadingComment) {
        return [space, this.generateStatement(stmt, flags)];
      }
      if (stmt.type === Syntax.EmptyStatement && noLeadingComment) {
        return ';';
      }
      withIndent(function() {
        result = [newline, addIndent(that.generateStatement(stmt, flags))];
      });
      return result;
    };
    CodeGenerator.prototype.maybeBlockSuffix = function(stmt, result) {
      var ends = endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString());
      if (stmt.type === Syntax.BlockStatement && (!extra.comment || !stmt.leadingComments) && !ends) {
        return [result, space];
      }
      if (ends) {
        return [result, base];
      }
      return [result, newline, base];
    };
    function generateIdentifier(node) {
      return toSourceNodeWhenNeeded(node.name, node);
    }
    function generateAsyncPrefix(node, spaceRequired) {
      return node.async ? 'async' + (spaceRequired ? noEmptySpace() : space) : '';
    }
    function generateStarSuffix(node) {
      var isGenerator = node.generator && !extra.moz.starlessGenerator;
      return isGenerator ? '*' + space : '';
    }
    function generateMethodPrefix(prop) {
      var func = prop.value;
      if (func.async) {
        return generateAsyncPrefix(func, !prop.computed);
      } else {
        return generateStarSuffix(func) ? '*' : '';
      }
    }
    CodeGenerator.prototype.generatePattern = function(node, precedence, flags) {
      if (node.type === Syntax.Identifier) {
        return generateIdentifier(node);
      }
      return this.generateExpression(node, precedence, flags);
    };
    CodeGenerator.prototype.generateFunctionParams = function(node) {
      var i,
          iz,
          result,
          hasDefault;
      hasDefault = false;
      if (node.type === Syntax.ArrowFunctionExpression && !node.rest && (!node.defaults || node.defaults.length === 0) && node.params.length === 1 && node.params[0].type === Syntax.Identifier) {
        result = [generateAsyncPrefix(node, true), generateIdentifier(node.params[0])];
      } else {
        result = node.type === Syntax.ArrowFunctionExpression ? [generateAsyncPrefix(node, false)] : [];
        result.push('(');
        if (node.defaults) {
          hasDefault = true;
        }
        for (i = 0, iz = node.params.length; i < iz; ++i) {
          if (hasDefault && node.defaults[i]) {
            result.push(this.generateAssignment(node.params[i], node.defaults[i], '=', Precedence.Assignment, E_TTT));
          } else {
            result.push(this.generatePattern(node.params[i], Precedence.Assignment, E_TTT));
          }
          if (i + 1 < iz) {
            result.push(',' + space);
          }
        }
        if (node.rest) {
          if (node.params.length) {
            result.push(',' + space);
          }
          result.push('...');
          result.push(generateIdentifier(node.rest));
        }
        result.push(')');
      }
      return result;
    };
    CodeGenerator.prototype.generateFunctionBody = function(node) {
      var result,
          expr;
      result = this.generateFunctionParams(node);
      if (node.type === Syntax.ArrowFunctionExpression) {
        result.push(space);
        result.push('=>');
      }
      if (node.expression) {
        result.push(space);
        expr = this.generateExpression(node.body, Precedence.Assignment, E_TTT);
        if (expr.toString().charAt(0) === '{') {
          expr = ['(', expr, ')'];
        }
        result.push(expr);
      } else {
        result.push(this.maybeBlock(node.body, S_TTFF));
      }
      return result;
    };
    CodeGenerator.prototype.generateIterationForStatement = function(operator, stmt, flags) {
      var result = ['for' + space + '('],
          that = this;
      withIndent(function() {
        if (stmt.left.type === Syntax.VariableDeclaration) {
          withIndent(function() {
            result.push(stmt.left.kind + noEmptySpace());
            result.push(that.generateStatement(stmt.left.declarations[0], S_FFFF));
          });
        } else {
          result.push(that.generateExpression(stmt.left, Precedence.Call, E_TTT));
        }
        result = join(result, operator);
        result = [join(result, that.generateExpression(stmt.right, Precedence.Sequence, E_TTT)), ')'];
      });
      result.push(this.maybeBlock(stmt.body, flags));
      return result;
    };
    CodeGenerator.prototype.generatePropertyKey = function(expr, computed) {
      var result = [];
      if (computed) {
        result.push('[');
      }
      result.push(this.generateExpression(expr, Precedence.Sequence, E_TTT));
      if (computed) {
        result.push(']');
      }
      return result;
    };
    CodeGenerator.prototype.generateAssignment = function(left, right, operator, precedence, flags) {
      if (Precedence.Assignment < precedence) {
        flags |= F_ALLOW_IN;
      }
      return parenthesize([this.generateExpression(left, Precedence.Call, flags), space + operator + space, this.generateExpression(right, Precedence.Assignment, flags)], Precedence.Assignment, precedence);
    };
    CodeGenerator.prototype.semicolon = function(flags) {
      if (!semicolons && flags & F_SEMICOLON_OPT) {
        return '';
      }
      return ';';
    };
    CodeGenerator.Statement = {
      BlockStatement: function(stmt, flags) {
        var range,
            content,
            result = ['{', newline],
            that = this;
        withIndent(function() {
          if (stmt.body.length === 0 && preserveBlankLines) {
            range = stmt.range;
            if (range[1] - range[0] > 2) {
              content = sourceCode.substring(range[0] + 1, range[1] - 1);
              if (content[0] === '\n') {
                result = ['{'];
              }
              result.push(content);
            }
          }
          var i,
              iz,
              fragment,
              bodyFlags;
          bodyFlags = S_TFFF;
          if (flags & F_FUNC_BODY) {
            bodyFlags |= F_DIRECTIVE_CTX;
          }
          for (i = 0, iz = stmt.body.length; i < iz; ++i) {
            if (preserveBlankLines) {
              if (i === 0) {
                if (stmt.body[0].leadingComments) {
                  range = stmt.body[0].leadingComments[0].extendedRange;
                  content = sourceCode.substring(range[0], range[1]);
                  if (content[0] === '\n') {
                    result = ['{'];
                  }
                }
                if (!stmt.body[0].leadingComments) {
                  generateBlankLines(stmt.range[0], stmt.body[0].range[0], result);
                }
              }
              if (i > 0) {
                if (!stmt.body[i - 1].trailingComments && !stmt.body[i].leadingComments) {
                  generateBlankLines(stmt.body[i - 1].range[1], stmt.body[i].range[0], result);
                }
              }
            }
            if (i === iz - 1) {
              bodyFlags |= F_SEMICOLON_OPT;
            }
            if (stmt.body[i].leadingComments && preserveBlankLines) {
              fragment = that.generateStatement(stmt.body[i], bodyFlags);
            } else {
              fragment = addIndent(that.generateStatement(stmt.body[i], bodyFlags));
            }
            result.push(fragment);
            if (!endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
              if (preserveBlankLines && i < iz - 1) {
                if (!stmt.body[i + 1].leadingComments) {
                  result.push(newline);
                }
              } else {
                result.push(newline);
              }
            }
            if (preserveBlankLines) {
              if (i === iz - 1) {
                if (!stmt.body[i].trailingComments) {
                  generateBlankLines(stmt.body[i].range[1], stmt.range[1], result);
                }
              }
            }
          }
        });
        result.push(addIndent('}'));
        return result;
      },
      BreakStatement: function(stmt, flags) {
        if (stmt.label) {
          return 'break ' + stmt.label.name + this.semicolon(flags);
        }
        return 'break' + this.semicolon(flags);
      },
      ContinueStatement: function(stmt, flags) {
        if (stmt.label) {
          return 'continue ' + stmt.label.name + this.semicolon(flags);
        }
        return 'continue' + this.semicolon(flags);
      },
      ClassBody: function(stmt, flags) {
        var result = ['{', newline],
            that = this;
        withIndent(function(indent) {
          var i,
              iz;
          for (i = 0, iz = stmt.body.length; i < iz; ++i) {
            result.push(indent);
            result.push(that.generateExpression(stmt.body[i], Precedence.Sequence, E_TTT));
            if (i + 1 < iz) {
              result.push(newline);
            }
          }
        });
        if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
          result.push(newline);
        }
        result.push(base);
        result.push('}');
        return result;
      },
      ClassDeclaration: function(stmt, flags) {
        var result,
            fragment;
        result = ['class ' + stmt.id.name];
        if (stmt.superClass) {
          fragment = join('extends', this.generateExpression(stmt.superClass, Precedence.Assignment, E_TTT));
          result = join(result, fragment);
        }
        result.push(space);
        result.push(this.generateStatement(stmt.body, S_TFFT));
        return result;
      },
      DirectiveStatement: function(stmt, flags) {
        if (extra.raw && stmt.raw) {
          return stmt.raw + this.semicolon(flags);
        }
        return escapeDirective(stmt.directive) + this.semicolon(flags);
      },
      DoWhileStatement: function(stmt, flags) {
        var result = join('do', this.maybeBlock(stmt.body, S_TFFF));
        result = this.maybeBlockSuffix(stmt.body, result);
        return join(result, ['while' + space + '(', this.generateExpression(stmt.test, Precedence.Sequence, E_TTT), ')' + this.semicolon(flags)]);
      },
      CatchClause: function(stmt, flags) {
        var result,
            that = this;
        withIndent(function() {
          var guard;
          result = ['catch' + space + '(', that.generateExpression(stmt.param, Precedence.Sequence, E_TTT), ')'];
          if (stmt.guard) {
            guard = that.generateExpression(stmt.guard, Precedence.Sequence, E_TTT);
            result.splice(2, 0, ' if ', guard);
          }
        });
        result.push(this.maybeBlock(stmt.body, S_TFFF));
        return result;
      },
      DebuggerStatement: function(stmt, flags) {
        return 'debugger' + this.semicolon(flags);
      },
      EmptyStatement: function(stmt, flags) {
        return ';';
      },
      ExportDefaultDeclaration: function(stmt, flags) {
        var result = ['export'],
            bodyFlags;
        bodyFlags = (flags & F_SEMICOLON_OPT) ? S_TFFT : S_TFFF;
        result = join(result, 'default');
        if (isStatement(stmt.declaration)) {
          result = join(result, this.generateStatement(stmt.declaration, bodyFlags));
        } else {
          result = join(result, this.generateExpression(stmt.declaration, Precedence.Assignment, E_TTT) + this.semicolon(flags));
        }
        return result;
      },
      ExportNamedDeclaration: function(stmt, flags) {
        var result = ['export'],
            bodyFlags,
            that = this;
        bodyFlags = (flags & F_SEMICOLON_OPT) ? S_TFFT : S_TFFF;
        if (stmt.declaration) {
          return join(result, this.generateStatement(stmt.declaration, bodyFlags));
        }
        if (stmt.specifiers) {
          if (stmt.specifiers.length === 0) {
            result = join(result, '{' + space + '}');
          } else if (stmt.specifiers[0].type === Syntax.ExportBatchSpecifier) {
            result = join(result, this.generateExpression(stmt.specifiers[0], Precedence.Sequence, E_TTT));
          } else {
            result = join(result, '{');
            withIndent(function(indent) {
              var i,
                  iz;
              result.push(newline);
              for (i = 0, iz = stmt.specifiers.length; i < iz; ++i) {
                result.push(indent);
                result.push(that.generateExpression(stmt.specifiers[i], Precedence.Sequence, E_TTT));
                if (i + 1 < iz) {
                  result.push(',' + newline);
                }
              }
            });
            if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
              result.push(newline);
            }
            result.push(base + '}');
          }
          if (stmt.source) {
            result = join(result, ['from' + space, this.generateExpression(stmt.source, Precedence.Sequence, E_TTT), this.semicolon(flags)]);
          } else {
            result.push(this.semicolon(flags));
          }
        }
        return result;
      },
      ExportAllDeclaration: function(stmt, flags) {
        return ['export' + space, '*' + space, 'from' + space, this.generateExpression(stmt.source, Precedence.Sequence, E_TTT), this.semicolon(flags)];
      },
      ExpressionStatement: function(stmt, flags) {
        var result,
            fragment;
        function isClassPrefixed(fragment) {
          var code;
          if (fragment.slice(0, 5) !== 'class') {
            return false;
          }
          code = fragment.charCodeAt(5);
          return code === 0x7B || esutils.code.isWhiteSpace(code) || esutils.code.isLineTerminator(code);
        }
        function isFunctionPrefixed(fragment) {
          var code;
          if (fragment.slice(0, 8) !== 'function') {
            return false;
          }
          code = fragment.charCodeAt(8);
          return code === 0x28 || esutils.code.isWhiteSpace(code) || code === 0x2A || esutils.code.isLineTerminator(code);
        }
        function isAsyncPrefixed(fragment) {
          var code,
              i,
              iz;
          if (fragment.slice(0, 5) !== 'async') {
            return false;
          }
          if (!esutils.code.isWhiteSpace(fragment.charCodeAt(5))) {
            return false;
          }
          for (i = 6, iz = fragment.length; i < iz; ++i) {
            if (!esutils.code.isWhiteSpace(fragment.charCodeAt(i))) {
              break;
            }
          }
          if (i === iz) {
            return false;
          }
          if (fragment.slice(i, i + 8) !== 'function') {
            return false;
          }
          code = fragment.charCodeAt(i + 8);
          return code === 0x28 || esutils.code.isWhiteSpace(code) || code === 0x2A || esutils.code.isLineTerminator(code);
        }
        result = [this.generateExpression(stmt.expression, Precedence.Sequence, E_TTT)];
        fragment = toSourceNodeWhenNeeded(result).toString();
        if (fragment.charCodeAt(0) === 0x7B || isClassPrefixed(fragment) || isFunctionPrefixed(fragment) || isAsyncPrefixed(fragment) || (directive && (flags & F_DIRECTIVE_CTX) && stmt.expression.type === Syntax.Literal && typeof stmt.expression.value === 'string')) {
          result = ['(', result, ')' + this.semicolon(flags)];
        } else {
          result.push(this.semicolon(flags));
        }
        return result;
      },
      ImportDeclaration: function(stmt, flags) {
        var result,
            cursor,
            that = this;
        if (stmt.specifiers.length === 0) {
          return ['import', space, this.generateExpression(stmt.source, Precedence.Sequence, E_TTT), this.semicolon(flags)];
        }
        result = ['import'];
        cursor = 0;
        if (stmt.specifiers[cursor].type === Syntax.ImportDefaultSpecifier) {
          result = join(result, [this.generateExpression(stmt.specifiers[cursor], Precedence.Sequence, E_TTT)]);
          ++cursor;
        }
        if (stmt.specifiers[cursor]) {
          if (cursor !== 0) {
            result.push(',');
          }
          if (stmt.specifiers[cursor].type === Syntax.ImportNamespaceSpecifier) {
            result = join(result, [space, this.generateExpression(stmt.specifiers[cursor], Precedence.Sequence, E_TTT)]);
          } else {
            result.push(space + '{');
            if ((stmt.specifiers.length - cursor) === 1) {
              result.push(space);
              result.push(this.generateExpression(stmt.specifiers[cursor], Precedence.Sequence, E_TTT));
              result.push(space + '}' + space);
            } else {
              withIndent(function(indent) {
                var i,
                    iz;
                result.push(newline);
                for (i = cursor, iz = stmt.specifiers.length; i < iz; ++i) {
                  result.push(indent);
                  result.push(that.generateExpression(stmt.specifiers[i], Precedence.Sequence, E_TTT));
                  if (i + 1 < iz) {
                    result.push(',' + newline);
                  }
                }
              });
              if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
                result.push(newline);
              }
              result.push(base + '}' + space);
            }
          }
        }
        result = join(result, ['from' + space, this.generateExpression(stmt.source, Precedence.Sequence, E_TTT), this.semicolon(flags)]);
        return result;
      },
      VariableDeclarator: function(stmt, flags) {
        var itemFlags = (flags & F_ALLOW_IN) ? E_TTT : E_FTT;
        if (stmt.init) {
          return [this.generateExpression(stmt.id, Precedence.Assignment, itemFlags), space, '=', space, this.generateExpression(stmt.init, Precedence.Assignment, itemFlags)];
        }
        return this.generatePattern(stmt.id, Precedence.Assignment, itemFlags);
      },
      VariableDeclaration: function(stmt, flags) {
        var result,
            i,
            iz,
            node,
            bodyFlags,
            that = this;
        result = [stmt.kind];
        bodyFlags = (flags & F_ALLOW_IN) ? S_TFFF : S_FFFF;
        function block() {
          node = stmt.declarations[0];
          if (extra.comment && node.leadingComments) {
            result.push('\n');
            result.push(addIndent(that.generateStatement(node, bodyFlags)));
          } else {
            result.push(noEmptySpace());
            result.push(that.generateStatement(node, bodyFlags));
          }
          for (i = 1, iz = stmt.declarations.length; i < iz; ++i) {
            node = stmt.declarations[i];
            if (extra.comment && node.leadingComments) {
              result.push(',' + newline);
              result.push(addIndent(that.generateStatement(node, bodyFlags)));
            } else {
              result.push(',' + space);
              result.push(that.generateStatement(node, bodyFlags));
            }
          }
        }
        if (stmt.declarations.length > 1) {
          withIndent(block);
        } else {
          block();
        }
        result.push(this.semicolon(flags));
        return result;
      },
      ThrowStatement: function(stmt, flags) {
        return [join('throw', this.generateExpression(stmt.argument, Precedence.Sequence, E_TTT)), this.semicolon(flags)];
      },
      TryStatement: function(stmt, flags) {
        var result,
            i,
            iz,
            guardedHandlers;
        result = ['try', this.maybeBlock(stmt.block, S_TFFF)];
        result = this.maybeBlockSuffix(stmt.block, result);
        if (stmt.handlers) {
          for (i = 0, iz = stmt.handlers.length; i < iz; ++i) {
            result = join(result, this.generateStatement(stmt.handlers[i], S_TFFF));
            if (stmt.finalizer || i + 1 !== iz) {
              result = this.maybeBlockSuffix(stmt.handlers[i].body, result);
            }
          }
        } else {
          guardedHandlers = stmt.guardedHandlers || [];
          for (i = 0, iz = guardedHandlers.length; i < iz; ++i) {
            result = join(result, this.generateStatement(guardedHandlers[i], S_TFFF));
            if (stmt.finalizer || i + 1 !== iz) {
              result = this.maybeBlockSuffix(guardedHandlers[i].body, result);
            }
          }
          if (stmt.handler) {
            if (isArray(stmt.handler)) {
              for (i = 0, iz = stmt.handler.length; i < iz; ++i) {
                result = join(result, this.generateStatement(stmt.handler[i], S_TFFF));
                if (stmt.finalizer || i + 1 !== iz) {
                  result = this.maybeBlockSuffix(stmt.handler[i].body, result);
                }
              }
            } else {
              result = join(result, this.generateStatement(stmt.handler, S_TFFF));
              if (stmt.finalizer) {
                result = this.maybeBlockSuffix(stmt.handler.body, result);
              }
            }
          }
        }
        if (stmt.finalizer) {
          result = join(result, ['finally', this.maybeBlock(stmt.finalizer, S_TFFF)]);
        }
        return result;
      },
      SwitchStatement: function(stmt, flags) {
        var result,
            fragment,
            i,
            iz,
            bodyFlags,
            that = this;
        withIndent(function() {
          result = ['switch' + space + '(', that.generateExpression(stmt.discriminant, Precedence.Sequence, E_TTT), ')' + space + '{' + newline];
        });
        if (stmt.cases) {
          bodyFlags = S_TFFF;
          for (i = 0, iz = stmt.cases.length; i < iz; ++i) {
            if (i === iz - 1) {
              bodyFlags |= F_SEMICOLON_OPT;
            }
            fragment = addIndent(this.generateStatement(stmt.cases[i], bodyFlags));
            result.push(fragment);
            if (!endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
              result.push(newline);
            }
          }
        }
        result.push(addIndent('}'));
        return result;
      },
      SwitchCase: function(stmt, flags) {
        var result,
            fragment,
            i,
            iz,
            bodyFlags,
            that = this;
        withIndent(function() {
          if (stmt.test) {
            result = [join('case', that.generateExpression(stmt.test, Precedence.Sequence, E_TTT)), ':'];
          } else {
            result = ['default:'];
          }
          i = 0;
          iz = stmt.consequent.length;
          if (iz && stmt.consequent[0].type === Syntax.BlockStatement) {
            fragment = that.maybeBlock(stmt.consequent[0], S_TFFF);
            result.push(fragment);
            i = 1;
          }
          if (i !== iz && !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
            result.push(newline);
          }
          bodyFlags = S_TFFF;
          for (; i < iz; ++i) {
            if (i === iz - 1 && flags & F_SEMICOLON_OPT) {
              bodyFlags |= F_SEMICOLON_OPT;
            }
            fragment = addIndent(that.generateStatement(stmt.consequent[i], bodyFlags));
            result.push(fragment);
            if (i + 1 !== iz && !endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
              result.push(newline);
            }
          }
        });
        return result;
      },
      IfStatement: function(stmt, flags) {
        var result,
            bodyFlags,
            semicolonOptional,
            that = this;
        withIndent(function() {
          result = ['if' + space + '(', that.generateExpression(stmt.test, Precedence.Sequence, E_TTT), ')'];
        });
        semicolonOptional = flags & F_SEMICOLON_OPT;
        bodyFlags = S_TFFF;
        if (semicolonOptional) {
          bodyFlags |= F_SEMICOLON_OPT;
        }
        if (stmt.alternate) {
          result.push(this.maybeBlock(stmt.consequent, S_TFFF));
          result = this.maybeBlockSuffix(stmt.consequent, result);
          if (stmt.alternate.type === Syntax.IfStatement) {
            result = join(result, ['else ', this.generateStatement(stmt.alternate, bodyFlags)]);
          } else {
            result = join(result, join('else', this.maybeBlock(stmt.alternate, bodyFlags)));
          }
        } else {
          result.push(this.maybeBlock(stmt.consequent, bodyFlags));
        }
        return result;
      },
      ForStatement: function(stmt, flags) {
        var result,
            that = this;
        withIndent(function() {
          result = ['for' + space + '('];
          if (stmt.init) {
            if (stmt.init.type === Syntax.VariableDeclaration) {
              result.push(that.generateStatement(stmt.init, S_FFFF));
            } else {
              result.push(that.generateExpression(stmt.init, Precedence.Sequence, E_FTT));
              result.push(';');
            }
          } else {
            result.push(';');
          }
          if (stmt.test) {
            result.push(space);
            result.push(that.generateExpression(stmt.test, Precedence.Sequence, E_TTT));
            result.push(';');
          } else {
            result.push(';');
          }
          if (stmt.update) {
            result.push(space);
            result.push(that.generateExpression(stmt.update, Precedence.Sequence, E_TTT));
            result.push(')');
          } else {
            result.push(')');
          }
        });
        result.push(this.maybeBlock(stmt.body, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF));
        return result;
      },
      ForInStatement: function(stmt, flags) {
        return this.generateIterationForStatement('in', stmt, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF);
      },
      ForOfStatement: function(stmt, flags) {
        return this.generateIterationForStatement('of', stmt, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF);
      },
      LabeledStatement: function(stmt, flags) {
        return [stmt.label.name + ':', this.maybeBlock(stmt.body, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF)];
      },
      Program: function(stmt, flags) {
        var result,
            fragment,
            i,
            iz,
            bodyFlags;
        iz = stmt.body.length;
        result = [safeConcatenation && iz > 0 ? '\n' : ''];
        bodyFlags = S_TFTF;
        for (i = 0; i < iz; ++i) {
          if (!safeConcatenation && i === iz - 1) {
            bodyFlags |= F_SEMICOLON_OPT;
          }
          if (preserveBlankLines) {
            if (i === 0) {
              if (!stmt.body[0].leadingComments) {
                generateBlankLines(stmt.range[0], stmt.body[i].range[0], result);
              }
            }
            if (i > 0) {
              if (!stmt.body[i - 1].trailingComments && !stmt.body[i].leadingComments) {
                generateBlankLines(stmt.body[i - 1].range[1], stmt.body[i].range[0], result);
              }
            }
          }
          fragment = addIndent(this.generateStatement(stmt.body[i], bodyFlags));
          result.push(fragment);
          if (i + 1 < iz && !endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
            if (preserveBlankLines) {
              if (!stmt.body[i + 1].leadingComments) {
                result.push(newline);
              }
            } else {
              result.push(newline);
            }
          }
          if (preserveBlankLines) {
            if (i === iz - 1) {
              if (!stmt.body[i].trailingComments) {
                generateBlankLines(stmt.body[i].range[1], stmt.range[1], result);
              }
            }
          }
        }
        return result;
      },
      FunctionDeclaration: function(stmt, flags) {
        return [generateAsyncPrefix(stmt, true), 'function', generateStarSuffix(stmt) || noEmptySpace(), stmt.id ? generateIdentifier(stmt.id) : '', this.generateFunctionBody(stmt)];
      },
      ReturnStatement: function(stmt, flags) {
        if (stmt.argument) {
          return [join('return', this.generateExpression(stmt.argument, Precedence.Sequence, E_TTT)), this.semicolon(flags)];
        }
        return ['return' + this.semicolon(flags)];
      },
      WhileStatement: function(stmt, flags) {
        var result,
            that = this;
        withIndent(function() {
          result = ['while' + space + '(', that.generateExpression(stmt.test, Precedence.Sequence, E_TTT), ')'];
        });
        result.push(this.maybeBlock(stmt.body, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF));
        return result;
      },
      WithStatement: function(stmt, flags) {
        var result,
            that = this;
        withIndent(function() {
          result = ['with' + space + '(', that.generateExpression(stmt.object, Precedence.Sequence, E_TTT), ')'];
        });
        result.push(this.maybeBlock(stmt.body, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF));
        return result;
      }
    };
    merge(CodeGenerator.prototype, CodeGenerator.Statement);
    CodeGenerator.Expression = {
      SequenceExpression: function(expr, precedence, flags) {
        var result,
            i,
            iz;
        if (Precedence.Sequence < precedence) {
          flags |= F_ALLOW_IN;
        }
        result = [];
        for (i = 0, iz = expr.expressions.length; i < iz; ++i) {
          result.push(this.generateExpression(expr.expressions[i], Precedence.Assignment, flags));
          if (i + 1 < iz) {
            result.push(',' + space);
          }
        }
        return parenthesize(result, Precedence.Sequence, precedence);
      },
      AssignmentExpression: function(expr, precedence, flags) {
        return this.generateAssignment(expr.left, expr.right, expr.operator, precedence, flags);
      },
      ArrowFunctionExpression: function(expr, precedence, flags) {
        return parenthesize(this.generateFunctionBody(expr), Precedence.ArrowFunction, precedence);
      },
      ConditionalExpression: function(expr, precedence, flags) {
        if (Precedence.Conditional < precedence) {
          flags |= F_ALLOW_IN;
        }
        return parenthesize([this.generateExpression(expr.test, Precedence.LogicalOR, flags), space + '?' + space, this.generateExpression(expr.consequent, Precedence.Assignment, flags), space + ':' + space, this.generateExpression(expr.alternate, Precedence.Assignment, flags)], Precedence.Conditional, precedence);
      },
      LogicalExpression: function(expr, precedence, flags) {
        return this.BinaryExpression(expr, precedence, flags);
      },
      BinaryExpression: function(expr, precedence, flags) {
        var result,
            currentPrecedence,
            fragment,
            leftSource;
        currentPrecedence = BinaryPrecedence[expr.operator];
        if (currentPrecedence < precedence) {
          flags |= F_ALLOW_IN;
        }
        fragment = this.generateExpression(expr.left, currentPrecedence, flags);
        leftSource = fragment.toString();
        if (leftSource.charCodeAt(leftSource.length - 1) === 0x2F && esutils.code.isIdentifierPartES5(expr.operator.charCodeAt(0))) {
          result = [fragment, noEmptySpace(), expr.operator];
        } else {
          result = join(fragment, expr.operator);
        }
        fragment = this.generateExpression(expr.right, currentPrecedence + 1, flags);
        if (expr.operator === '/' && fragment.toString().charAt(0) === '/' || expr.operator.slice(-1) === '<' && fragment.toString().slice(0, 3) === '!--') {
          result.push(noEmptySpace());
          result.push(fragment);
        } else {
          result = join(result, fragment);
        }
        if (expr.operator === 'in' && !(flags & F_ALLOW_IN)) {
          return ['(', result, ')'];
        }
        return parenthesize(result, currentPrecedence, precedence);
      },
      CallExpression: function(expr, precedence, flags) {
        var result,
            i,
            iz;
        result = [this.generateExpression(expr.callee, Precedence.Call, E_TTF)];
        result.push('(');
        for (i = 0, iz = expr['arguments'].length; i < iz; ++i) {
          result.push(this.generateExpression(expr['arguments'][i], Precedence.Assignment, E_TTT));
          if (i + 1 < iz) {
            result.push(',' + space);
          }
        }
        result.push(')');
        if (!(flags & F_ALLOW_CALL)) {
          return ['(', result, ')'];
        }
        return parenthesize(result, Precedence.Call, precedence);
      },
      NewExpression: function(expr, precedence, flags) {
        var result,
            length,
            i,
            iz,
            itemFlags;
        length = expr['arguments'].length;
        itemFlags = (flags & F_ALLOW_UNPARATH_NEW && !parentheses && length === 0) ? E_TFT : E_TFF;
        result = join('new', this.generateExpression(expr.callee, Precedence.New, itemFlags));
        if (!(flags & F_ALLOW_UNPARATH_NEW) || parentheses || length > 0) {
          result.push('(');
          for (i = 0, iz = length; i < iz; ++i) {
            result.push(this.generateExpression(expr['arguments'][i], Precedence.Assignment, E_TTT));
            if (i + 1 < iz) {
              result.push(',' + space);
            }
          }
          result.push(')');
        }
        return parenthesize(result, Precedence.New, precedence);
      },
      MemberExpression: function(expr, precedence, flags) {
        var result,
            fragment;
        result = [this.generateExpression(expr.object, Precedence.Call, (flags & F_ALLOW_CALL) ? E_TTF : E_TFF)];
        if (expr.computed) {
          result.push('[');
          result.push(this.generateExpression(expr.property, Precedence.Sequence, flags & F_ALLOW_CALL ? E_TTT : E_TFT));
          result.push(']');
        } else {
          if (expr.object.type === Syntax.Literal && typeof expr.object.value === 'number') {
            fragment = toSourceNodeWhenNeeded(result).toString();
            if (fragment.indexOf('.') < 0 && !/[eExX]/.test(fragment) && esutils.code.isDecimalDigit(fragment.charCodeAt(fragment.length - 1)) && !(fragment.length >= 2 && fragment.charCodeAt(0) === 48)) {
              result.push('.');
            }
          }
          result.push('.');
          result.push(generateIdentifier(expr.property));
        }
        return parenthesize(result, Precedence.Member, precedence);
      },
      MetaProperty: function(expr, precedence, flags) {
        var result;
        result = [];
        result.push(expr.meta);
        result.push('.');
        result.push(expr.property);
        return parenthesize(result, Precedence.Member, precedence);
      },
      UnaryExpression: function(expr, precedence, flags) {
        var result,
            fragment,
            rightCharCode,
            leftSource,
            leftCharCode;
        fragment = this.generateExpression(expr.argument, Precedence.Unary, E_TTT);
        if (space === '') {
          result = join(expr.operator, fragment);
        } else {
          result = [expr.operator];
          if (expr.operator.length > 2) {
            result = join(result, fragment);
          } else {
            leftSource = toSourceNodeWhenNeeded(result).toString();
            leftCharCode = leftSource.charCodeAt(leftSource.length - 1);
            rightCharCode = fragment.toString().charCodeAt(0);
            if (((leftCharCode === 0x2B || leftCharCode === 0x2D) && leftCharCode === rightCharCode) || (esutils.code.isIdentifierPartES5(leftCharCode) && esutils.code.isIdentifierPartES5(rightCharCode))) {
              result.push(noEmptySpace());
              result.push(fragment);
            } else {
              result.push(fragment);
            }
          }
        }
        return parenthesize(result, Precedence.Unary, precedence);
      },
      YieldExpression: function(expr, precedence, flags) {
        var result;
        if (expr.delegate) {
          result = 'yield*';
        } else {
          result = 'yield';
        }
        if (expr.argument) {
          result = join(result, this.generateExpression(expr.argument, Precedence.Yield, E_TTT));
        }
        return parenthesize(result, Precedence.Yield, precedence);
      },
      AwaitExpression: function(expr, precedence, flags) {
        var result = join(expr.all ? 'await*' : 'await', this.generateExpression(expr.argument, Precedence.Await, E_TTT));
        return parenthesize(result, Precedence.Await, precedence);
      },
      UpdateExpression: function(expr, precedence, flags) {
        if (expr.prefix) {
          return parenthesize([expr.operator, this.generateExpression(expr.argument, Precedence.Unary, E_TTT)], Precedence.Unary, precedence);
        }
        return parenthesize([this.generateExpression(expr.argument, Precedence.Postfix, E_TTT), expr.operator], Precedence.Postfix, precedence);
      },
      FunctionExpression: function(expr, precedence, flags) {
        var result = [generateAsyncPrefix(expr, true), 'function'];
        if (expr.id) {
          result.push(generateStarSuffix(expr) || noEmptySpace());
          result.push(generateIdentifier(expr.id));
        } else {
          result.push(generateStarSuffix(expr) || space);
        }
        result.push(this.generateFunctionBody(expr));
        return result;
      },
      ArrayPattern: function(expr, precedence, flags) {
        return this.ArrayExpression(expr, precedence, flags, true);
      },
      ArrayExpression: function(expr, precedence, flags, isPattern) {
        var result,
            multiline,
            that = this;
        if (!expr.elements.length) {
          return '[]';
        }
        multiline = isPattern ? false : expr.elements.length > 1;
        result = ['[', multiline ? newline : ''];
        withIndent(function(indent) {
          var i,
              iz;
          for (i = 0, iz = expr.elements.length; i < iz; ++i) {
            if (!expr.elements[i]) {
              if (multiline) {
                result.push(indent);
              }
              if (i + 1 === iz) {
                result.push(',');
              }
            } else {
              result.push(multiline ? indent : '');
              result.push(that.generateExpression(expr.elements[i], Precedence.Assignment, E_TTT));
            }
            if (i + 1 < iz) {
              result.push(',' + (multiline ? newline : space));
            }
          }
        });
        if (multiline && !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
          result.push(newline);
        }
        result.push(multiline ? base : '');
        result.push(']');
        return result;
      },
      RestElement: function(expr, precedence, flags) {
        return '...' + this.generatePattern(expr.argument);
      },
      ClassExpression: function(expr, precedence, flags) {
        var result,
            fragment;
        result = ['class'];
        if (expr.id) {
          result = join(result, this.generateExpression(expr.id, Precedence.Sequence, E_TTT));
        }
        if (expr.superClass) {
          fragment = join('extends', this.generateExpression(expr.superClass, Precedence.Assignment, E_TTT));
          result = join(result, fragment);
        }
        result.push(space);
        result.push(this.generateStatement(expr.body, S_TFFT));
        return result;
      },
      MethodDefinition: function(expr, precedence, flags) {
        var result,
            fragment;
        if (expr['static']) {
          result = ['static' + space];
        } else {
          result = [];
        }
        if (expr.kind === 'get' || expr.kind === 'set') {
          fragment = [join(expr.kind, this.generatePropertyKey(expr.key, expr.computed)), this.generateFunctionBody(expr.value)];
        } else {
          fragment = [generateMethodPrefix(expr), this.generatePropertyKey(expr.key, expr.computed), this.generateFunctionBody(expr.value)];
        }
        return join(result, fragment);
      },
      Property: function(expr, precedence, flags) {
        if (expr.kind === 'get' || expr.kind === 'set') {
          return [expr.kind, noEmptySpace(), this.generatePropertyKey(expr.key, expr.computed), this.generateFunctionBody(expr.value)];
        }
        if (expr.shorthand) {
          return this.generatePropertyKey(expr.key, expr.computed);
        }
        if (expr.method) {
          return [generateMethodPrefix(expr), this.generatePropertyKey(expr.key, expr.computed), this.generateFunctionBody(expr.value)];
        }
        return [this.generatePropertyKey(expr.key, expr.computed), ':' + space, this.generateExpression(expr.value, Precedence.Assignment, E_TTT)];
      },
      ObjectExpression: function(expr, precedence, flags) {
        var multiline,
            result,
            fragment,
            that = this;
        if (!expr.properties.length) {
          return '{}';
        }
        multiline = expr.properties.length > 1;
        withIndent(function() {
          fragment = that.generateExpression(expr.properties[0], Precedence.Sequence, E_TTT);
        });
        if (!multiline) {
          if (!hasLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
            return ['{', space, fragment, space, '}'];
          }
        }
        withIndent(function(indent) {
          var i,
              iz;
          result = ['{', newline, indent, fragment];
          if (multiline) {
            result.push(',' + newline);
            for (i = 1, iz = expr.properties.length; i < iz; ++i) {
              result.push(indent);
              result.push(that.generateExpression(expr.properties[i], Precedence.Sequence, E_TTT));
              if (i + 1 < iz) {
                result.push(',' + newline);
              }
            }
          }
        });
        if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
          result.push(newline);
        }
        result.push(base);
        result.push('}');
        return result;
      },
      AssignmentPattern: function(expr, precedence, flags) {
        return this.generateAssignment(expr.left, expr.right, expr.operator, precedence, flags);
      },
      ObjectPattern: function(expr, precedence, flags) {
        var result,
            i,
            iz,
            multiline,
            property,
            that = this;
        if (!expr.properties.length) {
          return '{}';
        }
        multiline = false;
        if (expr.properties.length === 1) {
          property = expr.properties[0];
          if (property.value.type !== Syntax.Identifier) {
            multiline = true;
          }
        } else {
          for (i = 0, iz = expr.properties.length; i < iz; ++i) {
            property = expr.properties[i];
            if (!property.shorthand) {
              multiline = true;
              break;
            }
          }
        }
        result = ['{', multiline ? newline : ''];
        withIndent(function(indent) {
          var i,
              iz;
          for (i = 0, iz = expr.properties.length; i < iz; ++i) {
            result.push(multiline ? indent : '');
            result.push(that.generateExpression(expr.properties[i], Precedence.Sequence, E_TTT));
            if (i + 1 < iz) {
              result.push(',' + (multiline ? newline : space));
            }
          }
        });
        if (multiline && !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
          result.push(newline);
        }
        result.push(multiline ? base : '');
        result.push('}');
        return result;
      },
      ThisExpression: function(expr, precedence, flags) {
        return 'this';
      },
      Super: function(expr, precedence, flags) {
        return 'super';
      },
      Identifier: function(expr, precedence, flags) {
        return generateIdentifier(expr);
      },
      ImportDefaultSpecifier: function(expr, precedence, flags) {
        return generateIdentifier(expr.id || expr.local);
      },
      ImportNamespaceSpecifier: function(expr, precedence, flags) {
        var result = ['*'];
        var id = expr.id || expr.local;
        if (id) {
          result.push(space + 'as' + noEmptySpace() + generateIdentifier(id));
        }
        return result;
      },
      ImportSpecifier: function(expr, precedence, flags) {
        var imported = expr.imported;
        var result = [imported.name];
        var local = expr.local;
        if (local && local.name !== imported.name) {
          result.push(noEmptySpace() + 'as' + noEmptySpace() + generateIdentifier(local));
        }
        return result;
      },
      ExportSpecifier: function(expr, precedence, flags) {
        var local = expr.local;
        var result = [local.name];
        var exported = expr.exported;
        if (exported && exported.name !== local.name) {
          result.push(noEmptySpace() + 'as' + noEmptySpace() + generateIdentifier(exported));
        }
        return result;
      },
      Literal: function(expr, precedence, flags) {
        var raw;
        if (expr.hasOwnProperty('raw') && parse && extra.raw) {
          try {
            raw = parse(expr.raw).body[0].expression;
            if (raw.type === Syntax.Literal) {
              if (raw.value === expr.value) {
                return expr.raw;
              }
            }
          } catch (e) {}
        }
        if (expr.value === null) {
          return 'null';
        }
        if (typeof expr.value === 'string') {
          return escapeString(expr.value);
        }
        if (typeof expr.value === 'number') {
          return generateNumber(expr.value);
        }
        if (typeof expr.value === 'boolean') {
          return expr.value ? 'true' : 'false';
        }
        return generateRegExp(expr.value);
      },
      GeneratorExpression: function(expr, precedence, flags) {
        return this.ComprehensionExpression(expr, precedence, flags);
      },
      ComprehensionExpression: function(expr, precedence, flags) {
        var result,
            i,
            iz,
            fragment,
            that = this;
        result = (expr.type === Syntax.GeneratorExpression) ? ['('] : ['['];
        if (extra.moz.comprehensionExpressionStartsWithAssignment) {
          fragment = this.generateExpression(expr.body, Precedence.Assignment, E_TTT);
          result.push(fragment);
        }
        if (expr.blocks) {
          withIndent(function() {
            for (i = 0, iz = expr.blocks.length; i < iz; ++i) {
              fragment = that.generateExpression(expr.blocks[i], Precedence.Sequence, E_TTT);
              if (i > 0 || extra.moz.comprehensionExpressionStartsWithAssignment) {
                result = join(result, fragment);
              } else {
                result.push(fragment);
              }
            }
          });
        }
        if (expr.filter) {
          result = join(result, 'if' + space);
          fragment = this.generateExpression(expr.filter, Precedence.Sequence, E_TTT);
          result = join(result, ['(', fragment, ')']);
        }
        if (!extra.moz.comprehensionExpressionStartsWithAssignment) {
          fragment = this.generateExpression(expr.body, Precedence.Assignment, E_TTT);
          result = join(result, fragment);
        }
        result.push((expr.type === Syntax.GeneratorExpression) ? ')' : ']');
        return result;
      },
      ComprehensionBlock: function(expr, precedence, flags) {
        var fragment;
        if (expr.left.type === Syntax.VariableDeclaration) {
          fragment = [expr.left.kind, noEmptySpace(), this.generateStatement(expr.left.declarations[0], S_FFFF)];
        } else {
          fragment = this.generateExpression(expr.left, Precedence.Call, E_TTT);
        }
        fragment = join(fragment, expr.of ? 'of' : 'in');
        fragment = join(fragment, this.generateExpression(expr.right, Precedence.Sequence, E_TTT));
        return ['for' + space + '(', fragment, ')'];
      },
      SpreadElement: function(expr, precedence, flags) {
        return ['...', this.generateExpression(expr.argument, Precedence.Assignment, E_TTT)];
      },
      TaggedTemplateExpression: function(expr, precedence, flags) {
        var itemFlags = E_TTF;
        if (!(flags & F_ALLOW_CALL)) {
          itemFlags = E_TFF;
        }
        var result = [this.generateExpression(expr.tag, Precedence.Call, itemFlags), this.generateExpression(expr.quasi, Precedence.Primary, E_FFT)];
        return parenthesize(result, Precedence.TaggedTemplate, precedence);
      },
      TemplateElement: function(expr, precedence, flags) {
        return expr.value.raw;
      },
      TemplateLiteral: function(expr, precedence, flags) {
        var result,
            i,
            iz;
        result = ['`'];
        for (i = 0, iz = expr.quasis.length; i < iz; ++i) {
          result.push(this.generateExpression(expr.quasis[i], Precedence.Primary, E_TTT));
          if (i + 1 < iz) {
            result.push('${' + space);
            result.push(this.generateExpression(expr.expressions[i], Precedence.Sequence, E_TTT));
            result.push(space + '}');
          }
        }
        result.push('`');
        return result;
      },
      ModuleSpecifier: function(expr, precedence, flags) {
        return this.Literal(expr, precedence, flags);
      }
    };
    merge(CodeGenerator.prototype, CodeGenerator.Expression);
    CodeGenerator.prototype.generateExpression = function(expr, precedence, flags) {
      var result,
          type;
      type = expr.type || Syntax.Property;
      if (extra.verbatim && expr.hasOwnProperty(extra.verbatim)) {
        return generateVerbatim(expr, precedence);
      }
      result = this[type](expr, precedence, flags);
      if (extra.comment) {
        result = addComments(expr, result);
      }
      return toSourceNodeWhenNeeded(result, expr);
    };
    CodeGenerator.prototype.generateStatement = function(stmt, flags) {
      var result,
          fragment;
      result = this[stmt.type](stmt, flags);
      if (extra.comment) {
        result = addComments(stmt, result);
      }
      fragment = toSourceNodeWhenNeeded(result).toString();
      if (stmt.type === Syntax.Program && !safeConcatenation && newline === '' && fragment.charAt(fragment.length - 1) === '\n') {
        result = sourceMap ? toSourceNodeWhenNeeded(result).replaceRight(/\s+$/, '') : fragment.replace(/\s+$/, '');
      }
      return toSourceNodeWhenNeeded(result, stmt);
    };
    function generateInternal(node) {
      var codegen;
      codegen = new CodeGenerator();
      if (isStatement(node)) {
        return codegen.generateStatement(node, S_TFFF);
      }
      if (isExpression(node)) {
        return codegen.generateExpression(node, Precedence.Sequence, E_TTT);
      }
      throw new Error('Unknown node type: ' + node.type);
    }
    function generate(node, options) {
      var defaultOptions = getDefaultOptions(),
          result,
          pair;
      if (options != null) {
        if (typeof options.indent === 'string') {
          defaultOptions.format.indent.style = options.indent;
        }
        if (typeof options.base === 'number') {
          defaultOptions.format.indent.base = options.base;
        }
        options = updateDeeply(defaultOptions, options);
        indent = options.format.indent.style;
        if (typeof options.base === 'string') {
          base = options.base;
        } else {
          base = stringRepeat(indent, options.format.indent.base);
        }
      } else {
        options = defaultOptions;
        indent = options.format.indent.style;
        base = stringRepeat(indent, options.format.indent.base);
      }
      json = options.format.json;
      renumber = options.format.renumber;
      hexadecimal = json ? false : options.format.hexadecimal;
      quotes = json ? 'double' : options.format.quotes;
      escapeless = options.format.escapeless;
      newline = options.format.newline;
      space = options.format.space;
      if (options.format.compact) {
        newline = space = indent = base = '';
      }
      parentheses = options.format.parentheses;
      semicolons = options.format.semicolons;
      safeConcatenation = options.format.safeConcatenation;
      directive = options.directive;
      parse = json ? null : options.parse;
      sourceMap = options.sourceMap;
      sourceCode = options.sourceCode;
      preserveBlankLines = options.format.preserveBlankLines && sourceCode !== null;
      extra = options;
      if (sourceMap) {
        if (!exports.browser) {
          SourceNode = $__require('75').SourceNode;
        } else {
          SourceNode = global.sourceMap.SourceNode;
        }
      }
      result = generateInternal(node);
      if (!sourceMap) {
        pair = {
          code: result.toString(),
          map: null
        };
        return options.sourceMapWithCode ? pair : pair.code;
      }
      pair = result.toStringWithSourceMap({
        file: options.file,
        sourceRoot: options.sourceMapRoot
      });
      if (options.sourceContent) {
        pair.map.setSourceContent(options.sourceMap, options.sourceContent);
      }
      if (options.sourceMapWithCode) {
        return pair;
      }
      return pair.map.toString();
    }
    FORMAT_MINIFY = {
      indent: {
        style: '',
        base: 0
      },
      renumber: true,
      hexadecimal: true,
      quotes: 'auto',
      escapeless: true,
      compact: true,
      parentheses: false,
      semicolons: false
    };
    FORMAT_DEFAULTS = getDefaultOptions().format;
    exports.version = $__require('76').version;
    exports.generate = generate;
    exports.attachComments = estraverse.attachComments;
    exports.Precedence = updateDeeply({}, Precedence);
    exports.browser = false;
    exports.FORMAT_MINIFY = FORMAT_MINIFY;
    exports.FORMAT_DEFAULTS = FORMAT_DEFAULTS;
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("44", ["63", "77", "@node/crypto", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(isNode) {
    "use strict";
    var SYNTAX,
        nodeType,
        ESP = isNode ? $__require('63') : esprima,
        ESPGEN = isNode ? $__require('77') : escodegen,
        crypto = isNode ? $__require('@node/crypto') : null,
        LEADER_WRAP = '(function () { ',
        TRAILER_WRAP = '\n}());',
        COMMENT_RE = /^\s*istanbul\s+ignore\s+(if|else|next)(?=\W|$)/,
        astgen,
        preconditions,
        cond,
        isArray = Array.isArray;
    if (!isArray) {
      isArray = function(thing) {
        return thing && Object.prototype.toString.call(thing) === '[object Array]';
      };
    }
    if (!isNode) {
      preconditions = {
        'Could not find esprima': ESP,
        'Could not find escodegen': ESPGEN,
        'JSON object not in scope': JSON,
        'Array does not implement push': [].push,
        'Array does not implement unshift': [].unshift
      };
      for (cond in preconditions) {
        if (preconditions.hasOwnProperty(cond)) {
          if (!preconditions[cond]) {
            throw new Error(cond);
          }
        }
      }
    }
    function generateTrackerVar(filename, omitSuffix) {
      var hash,
          suffix;
      if (crypto !== null) {
        hash = crypto.createHash('md5');
        hash.update(filename);
        suffix = hash.digest('base64');
        suffix = suffix.replace(new RegExp('=', 'g'), '').replace(new RegExp('\\+', 'g'), '_').replace(new RegExp('/', 'g'), '$');
      } else {
        window.__cov_seq = window.__cov_seq || 0;
        window.__cov_seq += 1;
        suffix = window.__cov_seq;
      }
      return '__cov_' + (omitSuffix ? '' : suffix);
    }
    function pushAll(ary, thing) {
      if (!isArray(thing)) {
        thing = [thing];
      }
      Array.prototype.push.apply(ary, thing);
    }
    SYNTAX = {
      AssignmentExpression: ['left', 'right'],
      AssignmentPattern: ['left', 'right'],
      ArrayExpression: ['elements'],
      ArrayPattern: ['elements'],
      ArrowFunctionExpression: ['params', 'body'],
      AwaitExpression: ['argument'],
      BlockStatement: ['body'],
      BinaryExpression: ['left', 'right'],
      BreakStatement: ['label'],
      CallExpression: ['callee', 'arguments'],
      CatchClause: ['param', 'body'],
      ClassBody: ['body'],
      ClassDeclaration: ['id', 'superClass', 'body'],
      ClassExpression: ['id', 'superClass', 'body'],
      ComprehensionBlock: ['left', 'right'],
      ComprehensionExpression: ['blocks', 'filter', 'body'],
      ConditionalExpression: ['test', 'consequent', 'alternate'],
      ContinueStatement: ['label'],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ['body', 'test'],
      EmptyStatement: [],
      ExportAllDeclaration: ['source'],
      ExportDefaultDeclaration: ['declaration'],
      ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
      ExportSpecifier: ['exported', 'local'],
      ExpressionStatement: ['expression'],
      ForStatement: ['init', 'test', 'update', 'body'],
      ForInStatement: ['left', 'right', 'body'],
      ForOfStatement: ['left', 'right', 'body'],
      FunctionDeclaration: ['id', 'params', 'body'],
      FunctionExpression: ['id', 'params', 'body'],
      GeneratorExpression: ['blocks', 'filter', 'body'],
      Identifier: [],
      IfStatement: ['test', 'consequent', 'alternate'],
      ImportDeclaration: ['specifiers', 'source'],
      ImportDefaultSpecifier: ['local'],
      ImportNamespaceSpecifier: ['local'],
      ImportSpecifier: ['imported', 'local'],
      Literal: [],
      LabeledStatement: ['label', 'body'],
      LogicalExpression: ['left', 'right'],
      MemberExpression: ['object', 'property'],
      MethodDefinition: ['key', 'value'],
      ModuleSpecifier: [],
      NewExpression: ['callee', 'arguments'],
      ObjectExpression: ['properties'],
      ObjectPattern: ['properties'],
      Program: ['body'],
      Property: ['key', 'value'],
      RestElement: ['argument'],
      ReturnStatement: ['argument'],
      SequenceExpression: ['expressions'],
      SpreadElement: ['argument'],
      Super: [],
      SwitchStatement: ['discriminant', 'cases'],
      SwitchCase: ['test', 'consequent'],
      TaggedTemplateExpression: ['tag', 'quasi'],
      TemplateElement: [],
      TemplateLiteral: ['quasis', 'expressions'],
      ThisExpression: [],
      ThrowStatement: ['argument'],
      TryStatement: ['block', 'handler', 'finalizer'],
      UnaryExpression: ['argument'],
      UpdateExpression: ['argument'],
      VariableDeclaration: ['declarations'],
      VariableDeclarator: ['id', 'init'],
      WhileStatement: ['test', 'body'],
      WithStatement: ['object', 'body'],
      YieldExpression: ['argument']
    };
    for (nodeType in SYNTAX) {
      if (SYNTAX.hasOwnProperty(nodeType)) {
        SYNTAX[nodeType] = {
          name: nodeType,
          children: SYNTAX[nodeType]
        };
      }
    }
    astgen = {
      variable: function(name) {
        return {
          type: SYNTAX.Identifier.name,
          name: name
        };
      },
      stringLiteral: function(str) {
        return {
          type: SYNTAX.Literal.name,
          value: String(str)
        };
      },
      numericLiteral: function(num) {
        return {
          type: SYNTAX.Literal.name,
          value: Number(num)
        };
      },
      statement: function(contents) {
        return {
          type: SYNTAX.ExpressionStatement.name,
          expression: contents
        };
      },
      dot: function(obj, field) {
        return {
          type: SYNTAX.MemberExpression.name,
          computed: false,
          object: obj,
          property: field
        };
      },
      subscript: function(obj, sub) {
        return {
          type: SYNTAX.MemberExpression.name,
          computed: true,
          object: obj,
          property: sub
        };
      },
      postIncrement: function(obj) {
        return {
          type: SYNTAX.UpdateExpression.name,
          operator: '++',
          prefix: false,
          argument: obj
        };
      },
      sequence: function(one, two) {
        return {
          type: SYNTAX.SequenceExpression.name,
          expressions: [one, two]
        };
      },
      returnStatement: function(expr) {
        return {
          type: SYNTAX.ReturnStatement.name,
          argument: expr
        };
      }
    };
    function Walker(walkMap, preprocessor, scope, debug) {
      this.walkMap = walkMap;
      this.preprocessor = preprocessor;
      this.scope = scope;
      this.debug = debug;
      if (this.debug) {
        this.level = 0;
        this.seq = true;
      }
    }
    function defaultWalker(node, walker) {
      var type = node.type,
          preprocessor,
          postprocessor,
          children = SYNTAX[type],
          applyCustomWalker = !!node.loc || node.type === SYNTAX.Program.name,
          walkerFn = applyCustomWalker ? walker.walkMap[type] : null,
          i,
          j,
          walkFnIndex,
          childType,
          childNode,
          ret,
          childArray,
          childElement,
          pathElement,
          assignNode,
          isLast;
      if (!SYNTAX[type]) {
        console.error(node);
        console.error('Unsupported node type:' + type);
        return;
      }
      children = SYNTAX[type].children;
      if (node.walking) {
        throw new Error('Infinite regress: Custom walkers may NOT call walker.apply(node)');
      }
      node.walking = true;
      ret = walker.apply(node, walker.preprocessor);
      preprocessor = ret.preprocessor;
      if (preprocessor) {
        delete ret.preprocessor;
        ret = walker.apply(node, preprocessor);
      }
      if (isArray(walkerFn)) {
        for (walkFnIndex = 0; walkFnIndex < walkerFn.length; walkFnIndex += 1) {
          isLast = walkFnIndex === walkerFn.length - 1;
          ret = walker.apply(ret, walkerFn[walkFnIndex]);
          if (ret.type !== type && !isLast) {
            throw new Error('Only the last walker is allowed to change the node type: [type was: ' + type + ' ]');
          }
        }
      } else {
        if (walkerFn) {
          ret = walker.apply(node, walkerFn);
        }
      }
      for (i = 0; i < children.length; i += 1) {
        childType = children[i];
        childNode = node[childType];
        if (childNode && !childNode.skipWalk) {
          pathElement = {
            node: node,
            property: childType
          };
          if (isArray(childNode)) {
            childArray = [];
            for (j = 0; j < childNode.length; j += 1) {
              childElement = childNode[j];
              pathElement.index = j;
              if (childElement) {
                assignNode = walker.apply(childElement, null, pathElement);
                if (isArray(assignNode.prepend)) {
                  pushAll(childArray, assignNode.prepend);
                  delete assignNode.prepend;
                }
              } else {
                assignNode = undefined;
              }
              pushAll(childArray, assignNode);
            }
            node[childType] = childArray;
          } else {
            assignNode = walker.apply(childNode, null, pathElement);
            if (isArray(assignNode.prepend)) {
              throw new Error('Internal error: attempt to prepend statements in disallowed (non-array) context');
            } else {
              node[childType] = assignNode;
            }
          }
        }
      }
      postprocessor = ret.postprocessor;
      if (postprocessor) {
        delete ret.postprocessor;
        ret = walker.apply(ret, postprocessor);
      }
      delete node.walking;
      return ret;
    }
    Walker.prototype = {
      startWalk: function(node) {
        this.path = [];
        this.apply(node);
      },
      apply: function(node, walkFn, pathElement) {
        var ret,
            i,
            seq,
            prefix;
        walkFn = walkFn || defaultWalker;
        if (this.debug) {
          this.seq += 1;
          this.level += 1;
          seq = this.seq;
          prefix = '';
          for (i = 0; i < this.level; i += 1) {
            prefix += '    ';
          }
          console.log(prefix + 'Enter (' + seq + '):' + node.type);
        }
        if (pathElement) {
          this.path.push(pathElement);
        }
        ret = walkFn.call(this.scope, node, this);
        if (pathElement) {
          this.path.pop();
        }
        if (this.debug) {
          this.level -= 1;
          console.log(prefix + 'Return (' + seq + '):' + node.type);
        }
        return ret || node;
      },
      startLineForNode: function(node) {
        return node && node.loc && node.loc.start ? node.loc.start.line : null;
      },
      ancestor: function(n) {
        return this.path.length > n - 1 ? this.path[this.path.length - n] : null;
      },
      parent: function() {
        return this.ancestor(1);
      },
      isLabeled: function() {
        var el = this.parent();
        return el && el.node.type === SYNTAX.LabeledStatement.name;
      }
    };
    function Instrumenter(options) {
      this.opts = options || {
        debug: false,
        walkDebug: false,
        coverageVariable: '__coverage__',
        codeGenerationOptions: undefined,
        noAutoWrap: false,
        noCompact: false,
        embedSource: false,
        preserveComments: false,
        esModules: false
      };
      if (this.opts.esModules && !this.opts.noAutoWrap) {
        this.opts.noAutoWrap = true;
        if (this.opts.debug) {
          console.log('Setting noAutoWrap to true as required by esModules');
        }
      }
      this.walker = new Walker({
        ArrowFunctionExpression: [this.arrowBlockConverter],
        ExpressionStatement: this.coverStatement,
        BreakStatement: this.coverStatement,
        ContinueStatement: this.coverStatement,
        DebuggerStatement: this.coverStatement,
        ReturnStatement: this.coverStatement,
        ThrowStatement: this.coverStatement,
        TryStatement: [this.paranoidHandlerCheck, this.coverStatement],
        VariableDeclaration: this.coverStatement,
        IfStatement: [this.ifBlockConverter, this.coverStatement, this.ifBranchInjector],
        ForStatement: [this.skipInit, this.loopBlockConverter, this.coverStatement],
        ForInStatement: [this.skipLeft, this.loopBlockConverter, this.coverStatement],
        ForOfStatement: [this.skipLeft, this.loopBlockConverter, this.coverStatement],
        WhileStatement: [this.loopBlockConverter, this.coverStatement],
        DoWhileStatement: [this.loopBlockConverter, this.coverStatement],
        SwitchStatement: [this.coverStatement, this.switchBranchInjector],
        SwitchCase: [this.switchCaseInjector],
        WithStatement: [this.withBlockConverter, this.coverStatement],
        FunctionDeclaration: [this.coverFunction, this.coverStatement],
        FunctionExpression: this.coverFunction,
        LabeledStatement: this.coverStatement,
        ConditionalExpression: this.conditionalBranchInjector,
        LogicalExpression: this.logicalExpressionBranchInjector,
        ObjectExpression: this.maybeAddType
      }, this.extractCurrentHint, this, this.opts.walkDebug);
      if (this.opts.backdoor && this.opts.backdoor.omitTrackerSuffix) {
        this.omitTrackerSuffix = true;
      }
    }
    Instrumenter.prototype = {
      instrumentSync: function(code, filename) {
        var program;
        if (typeof code !== 'string') {
          throw new Error('Code must be string');
        }
        if (code.charAt(0) === '#') {
          code = '//' + code;
        }
        if (!this.opts.noAutoWrap) {
          code = LEADER_WRAP + code + TRAILER_WRAP;
        }
        program = ESP.parse(code, {
          loc: true,
          range: true,
          tokens: this.opts.preserveComments,
          comment: true,
          sourceType: this.opts.esModules ? 'module' : 'script'
        });
        if (this.opts.preserveComments) {
          program = ESPGEN.attachComments(program, program.comments, program.tokens);
        }
        if (!this.opts.noAutoWrap) {
          program = {
            type: SYNTAX.Program.name,
            body: program.body[0].expression.callee.body.body,
            comments: program.comments
          };
        }
        return this.instrumentASTSync(program, filename, code);
      },
      filterHints: function(comments) {
        var ret = [],
            i,
            comment,
            groups;
        if (!(comments && isArray(comments))) {
          return ret;
        }
        for (i = 0; i < comments.length; i += 1) {
          comment = comments[i];
          if (comment && comment.value && comment.range && isArray(comment.range)) {
            groups = String(comment.value).match(COMMENT_RE);
            if (groups) {
              ret.push({
                type: groups[1],
                start: comment.range[0],
                end: comment.range[1]
              });
            }
          }
        }
        return ret;
      },
      extractCurrentHint: function(node) {
        if (!node.range) {
          return;
        }
        var i = this.currentState.lastHintPosition + 1,
            hints = this.currentState.hints,
            nodeStart = node.range[0],
            hint;
        this.currentState.currentHint = null;
        while (i < hints.length) {
          hint = hints[i];
          if (hint.end < nodeStart) {
            this.currentState.currentHint = hint;
            this.currentState.lastHintPosition = i;
            i += 1;
          } else {
            break;
          }
        }
      },
      instrumentASTSync: function(program, filename, originalCode) {
        var usingStrict = false,
            codegenOptions,
            generated,
            preamble,
            lineCount,
            i;
        filename = filename || String(new Date().getTime()) + '.js';
        this.sourceMap = null;
        this.coverState = {
          path: filename,
          s: {},
          b: {},
          f: {},
          fnMap: {},
          statementMap: {},
          branchMap: {}
        };
        this.currentState = {
          trackerVar: generateTrackerVar(filename, this.omitTrackerSuffix),
          func: 0,
          branch: 0,
          variable: 0,
          statement: 0,
          hints: this.filterHints(program.comments),
          currentHint: null,
          lastHintPosition: -1,
          ignoring: 0
        };
        if (program.body && program.body.length > 0 && this.isUseStrictExpression(program.body[0])) {
          program.body.shift();
          usingStrict = true;
        }
        this.walker.startWalk(program);
        codegenOptions = this.opts.codeGenerationOptions || {format: {compact: !this.opts.noCompact}};
        codegenOptions.comment = this.opts.preserveComments;
        generated = ESPGEN.generate(program, codegenOptions);
        preamble = this.getPreamble(originalCode || '', usingStrict);
        if (generated.map && generated.code) {
          lineCount = preamble.split(/\r\n|\r|\n/).length;
          for (i = 0; i < generated.map._mappings._array.length; i += 1) {
            generated.map._mappings._array[i].generatedLine += lineCount;
          }
          this.sourceMap = generated.map;
          generated = generated.code;
        }
        return preamble + '\n' + generated + '\n';
      },
      instrument: function(code, filename, callback) {
        if (!callback && typeof filename === 'function') {
          callback = filename;
          filename = null;
        }
        try {
          callback(null, this.instrumentSync(code, filename));
        } catch (ex) {
          callback(ex);
        }
      },
      lastFileCoverage: function() {
        return this.coverState;
      },
      lastSourceMap: function() {
        return this.sourceMap;
      },
      fixColumnPositions: function(coverState) {
        var offset = LEADER_WRAP.length,
            fixer = function(loc) {
              if (loc.start.line === 1) {
                loc.start.column -= offset;
              }
              if (loc.end.line === 1) {
                loc.end.column -= offset;
              }
            },
            k,
            obj,
            i,
            locations;
        obj = coverState.statementMap;
        for (k in obj) {
          if (obj.hasOwnProperty(k)) {
            fixer(obj[k]);
          }
        }
        obj = coverState.fnMap;
        for (k in obj) {
          if (obj.hasOwnProperty(k)) {
            fixer(obj[k].loc);
          }
        }
        obj = coverState.branchMap;
        for (k in obj) {
          if (obj.hasOwnProperty(k)) {
            locations = obj[k].locations;
            for (i = 0; i < locations.length; i += 1) {
              fixer(locations[i]);
            }
          }
        }
      },
      getPreamble: function(sourceCode, emitUseStrict) {
        var varName = this.opts.coverageVariable || '__coverage__',
            file = this.coverState.path.replace(/\\/g, '\\\\'),
            tracker = this.currentState.trackerVar,
            coverState,
            strictLine = emitUseStrict ? '"use strict";' : '',
            replacer = function(s) {
              return function() {
                return s;
              };
            },
            code;
        if (!this.opts.noAutoWrap) {
          this.fixColumnPositions(this.coverState);
        }
        if (this.opts.embedSource) {
          this.coverState.code = sourceCode.split(/(?:\r?\n)|\r/);
        }
        coverState = this.opts.debug ? JSON.stringify(this.coverState, undefined, 4) : JSON.stringify(this.coverState);
        code = ["%STRICT%", "var %VAR% = (Function('return this'))();", "if (!%VAR%.%GLOBAL%) { %VAR%.%GLOBAL% = {}; }", "%VAR% = %VAR%.%GLOBAL%;", "if (!(%VAR%['%FILE%'])) {", "   %VAR%['%FILE%'] = %OBJECT%;", "}", "%VAR% = %VAR%['%FILE%'];"].join("\n").replace(/%STRICT%/g, replacer(strictLine)).replace(/%VAR%/g, replacer(tracker)).replace(/%GLOBAL%/g, replacer(varName)).replace(/%FILE%/g, replacer(file)).replace(/%OBJECT%/g, replacer(coverState));
        return code;
      },
      startIgnore: function() {
        this.currentState.ignoring += 1;
      },
      endIgnore: function() {
        this.currentState.ignoring -= 1;
      },
      convertToBlock: function(node) {
        if (!node) {
          return {
            type: 'BlockStatement',
            body: []
          };
        } else if (node.type === 'BlockStatement') {
          return node;
        } else {
          return {
            type: 'BlockStatement',
            body: [node]
          };
        }
      },
      arrowBlockConverter: function(node) {
        var retStatement;
        if (node.expression) {
          retStatement = astgen.returnStatement(node.body);
          retStatement.loc = node.body.loc;
          node.body = this.convertToBlock(retStatement);
          node.expression = false;
        }
      },
      paranoidHandlerCheck: function(node) {
        if (!node.handler && node.handlers) {
          node.handler = node.handlers[0];
        }
      },
      ifBlockConverter: function(node) {
        node.consequent = this.convertToBlock(node.consequent);
        node.alternate = this.convertToBlock(node.alternate);
      },
      loopBlockConverter: function(node) {
        node.body = this.convertToBlock(node.body);
      },
      withBlockConverter: function(node) {
        node.body = this.convertToBlock(node.body);
      },
      statementName: function(location, initValue) {
        var sName,
            ignoring = !!this.currentState.ignoring;
        location.skip = ignoring || undefined;
        initValue = initValue || 0;
        this.currentState.statement += 1;
        sName = this.currentState.statement;
        this.coverState.statementMap[sName] = location;
        this.coverState.s[sName] = initValue;
        return sName;
      },
      skipInit: function(node) {
        if (node.init) {
          node.init.skipWalk = true;
        }
      },
      skipLeft: function(node) {
        node.left.skipWalk = true;
      },
      isUseStrictExpression: function(node) {
        return node && node.type === SYNTAX.ExpressionStatement.name && node.expression && node.expression.type === SYNTAX.Literal.name && node.expression.value === 'use strict';
      },
      maybeSkipNode: function(node, type) {
        var alreadyIgnoring = !!this.currentState.ignoring,
            hint = this.currentState.currentHint,
            ignoreThis = !alreadyIgnoring && hint && hint.type === type;
        if (ignoreThis) {
          this.startIgnore();
          node.postprocessor = this.endIgnore;
          return true;
        }
        return false;
      },
      coverStatement: function(node, walker) {
        var sName,
            incrStatementCount,
            grandParent;
        this.maybeSkipNode(node, 'next');
        if (this.isUseStrictExpression(node)) {
          grandParent = walker.ancestor(2);
          if (grandParent) {
            if ((grandParent.node.type === SYNTAX.FunctionExpression.name || grandParent.node.type === SYNTAX.FunctionDeclaration.name) && walker.parent().node.body[0] === node) {
              return;
            }
          }
        }
        if (node.type === SYNTAX.FunctionDeclaration.name) {
          sName = this.statementName(node.loc, 1);
        } else {
          sName = this.statementName(node.loc);
          incrStatementCount = astgen.statement(astgen.postIncrement(astgen.subscript(astgen.dot(astgen.variable(this.currentState.trackerVar), astgen.variable('s')), astgen.stringLiteral(sName))));
          this.splice(incrStatementCount, node, walker);
        }
      },
      splice: function(statements, node, walker) {
        var targetNode = walker.isLabeled() ? walker.parent().node : node;
        targetNode.prepend = targetNode.prepend || [];
        pushAll(targetNode.prepend, statements);
      },
      functionName: function(node, line, location) {
        this.currentState.func += 1;
        var id = this.currentState.func,
            ignoring = !!this.currentState.ignoring,
            name = node.id ? node.id.name : '(anonymous_' + id + ')',
            clone = function(attr) {
              var obj = location[attr] || {};
              return {
                line: obj.line,
                column: obj.column
              };
            };
        this.coverState.fnMap[id] = {
          name: name,
          line: line,
          loc: {
            start: clone('start'),
            end: clone('end')
          },
          skip: ignoring || undefined
        };
        this.coverState.f[id] = 0;
        return id;
      },
      coverFunction: function(node, walker) {
        var id,
            body = node.body,
            blockBody = body.body,
            popped;
        this.maybeSkipNode(node, 'next');
        id = this.functionName(node, walker.startLineForNode(node), {
          start: node.loc.start,
          end: {
            line: node.body.loc.start.line,
            column: node.body.loc.start.column
          }
        });
        if (blockBody.length > 0 && this.isUseStrictExpression(blockBody[0])) {
          popped = blockBody.shift();
        }
        blockBody.unshift(astgen.statement(astgen.postIncrement(astgen.subscript(astgen.dot(astgen.variable(this.currentState.trackerVar), astgen.variable('f')), astgen.stringLiteral(id)))));
        if (popped) {
          blockBody.unshift(popped);
        }
      },
      branchName: function(type, startLine, pathLocations) {
        var bName,
            paths = [],
            locations = [],
            i,
            ignoring = !!this.currentState.ignoring;
        this.currentState.branch += 1;
        bName = this.currentState.branch;
        for (i = 0; i < pathLocations.length; i += 1) {
          pathLocations[i].skip = pathLocations[i].skip || ignoring || undefined;
          locations.push(pathLocations[i]);
          paths.push(0);
        }
        this.coverState.b[bName] = paths;
        this.coverState.branchMap[bName] = {
          line: startLine,
          type: type,
          locations: locations
        };
        return bName;
      },
      branchIncrementExprAst: function(varName, branchIndex, down) {
        var ret = astgen.postIncrement(astgen.subscript(astgen.subscript(astgen.dot(astgen.variable(this.currentState.trackerVar), astgen.variable('b')), astgen.stringLiteral(varName)), astgen.numericLiteral(branchIndex)), down);
        return ret;
      },
      locationsForNodes: function(nodes) {
        var ret = [],
            i;
        for (i = 0; i < nodes.length; i += 1) {
          ret.push(nodes[i].loc);
        }
        return ret;
      },
      ifBranchInjector: function(node, walker) {
        var alreadyIgnoring = !!this.currentState.ignoring,
            hint = this.currentState.currentHint,
            ignoreThen = !alreadyIgnoring && hint && hint.type === 'if',
            ignoreElse = !alreadyIgnoring && hint && hint.type === 'else',
            line = node.loc.start.line,
            col = node.loc.start.column,
            makeLoc = function() {
              return {
                line: line,
                column: col
              };
            },
            bName = this.branchName('if', walker.startLineForNode(node), [{
              start: makeLoc(),
              end: makeLoc(),
              skip: ignoreThen || undefined
            }, {
              start: makeLoc(),
              end: makeLoc(),
              skip: ignoreElse || undefined
            }]),
            thenBody = node.consequent.body,
            elseBody = node.alternate.body,
            child;
        thenBody.unshift(astgen.statement(this.branchIncrementExprAst(bName, 0)));
        elseBody.unshift(astgen.statement(this.branchIncrementExprAst(bName, 1)));
        if (ignoreThen) {
          child = node.consequent;
          child.preprocessor = this.startIgnore;
          child.postprocessor = this.endIgnore;
        }
        if (ignoreElse) {
          child = node.alternate;
          child.preprocessor = this.startIgnore;
          child.postprocessor = this.endIgnore;
        }
      },
      branchLocationFor: function(name, index) {
        return this.coverState.branchMap[name].locations[index];
      },
      switchBranchInjector: function(node, walker) {
        var cases = node.cases,
            bName,
            i;
        if (!(cases && cases.length > 0)) {
          return;
        }
        bName = this.branchName('switch', walker.startLineForNode(node), this.locationsForNodes(cases));
        for (i = 0; i < cases.length; i += 1) {
          cases[i].branchLocation = this.branchLocationFor(bName, i);
          cases[i].consequent.unshift(astgen.statement(this.branchIncrementExprAst(bName, i)));
        }
      },
      switchCaseInjector: function(node) {
        var location = node.branchLocation;
        delete node.branchLocation;
        if (this.maybeSkipNode(node, 'next')) {
          location.skip = true;
        }
      },
      conditionalBranchInjector: function(node, walker) {
        var bName = this.branchName('cond-expr', walker.startLineForNode(node), this.locationsForNodes([node.consequent, node.alternate])),
            ast1 = this.branchIncrementExprAst(bName, 0),
            ast2 = this.branchIncrementExprAst(bName, 1);
        node.consequent.preprocessor = this.maybeAddSkip(this.branchLocationFor(bName, 0));
        node.alternate.preprocessor = this.maybeAddSkip(this.branchLocationFor(bName, 1));
        node.consequent = astgen.sequence(ast1, node.consequent);
        node.alternate = astgen.sequence(ast2, node.alternate);
      },
      maybeAddSkip: function(branchLocation) {
        return function(node) {
          var alreadyIgnoring = !!this.currentState.ignoring,
              hint = this.currentState.currentHint,
              ignoreThis = !alreadyIgnoring && hint && hint.type === 'next';
          if (ignoreThis) {
            this.startIgnore();
            node.postprocessor = this.endIgnore;
          }
          if (ignoreThis || alreadyIgnoring) {
            branchLocation.skip = true;
          }
        };
      },
      logicalExpressionBranchInjector: function(node, walker) {
        var parent = walker.parent(),
            leaves = [],
            bName,
            tuple,
            i;
        this.maybeSkipNode(node, 'next');
        if (parent && parent.node.type === SYNTAX.LogicalExpression.name) {
          return;
        }
        this.findLeaves(node, leaves);
        bName = this.branchName('binary-expr', walker.startLineForNode(node), this.locationsForNodes(leaves.map(function(item) {
          return item.node;
        })));
        for (i = 0; i < leaves.length; i += 1) {
          tuple = leaves[i];
          tuple.parent[tuple.property] = astgen.sequence(this.branchIncrementExprAst(bName, i), tuple.node);
          tuple.node.preprocessor = this.maybeAddSkip(this.branchLocationFor(bName, i));
        }
      },
      findLeaves: function(node, accumulator, parent, property) {
        if (node.type === SYNTAX.LogicalExpression.name) {
          this.findLeaves(node.left, accumulator, node, 'left');
          this.findLeaves(node.right, accumulator, node, 'right');
        } else {
          accumulator.push({
            node: node,
            parent: parent,
            property: property
          });
        }
      },
      maybeAddType: function(node) {
        var props = node.properties,
            i,
            child;
        for (i = 0; i < props.length; i += 1) {
          child = props[i];
          if (!child.type) {
            child.type = SYNTAX.Property.name;
          }
        }
      }
    };
    if (isNode) {
      module.exports = Instrumenter;
    } else {
      window.Instrumenter = Instrumenter;
    }
  }(typeof module !== 'undefined' && typeof module.exports !== 'undefined' && typeof exports !== 'undefined'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4", ["78", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var Factory = $__require('78'),
      factory = new Factory('store', __dirname, false);
  function Store() {}
  factory.bindClassMethods(Store);
  Store.prototype = {
    set: function() {
      throw new Error("set: must be overridden");
    },
    get: function() {
      throw new Error("get: must be overridden");
    },
    keys: function() {
      throw new Error("keys: must be overridden");
    },
    hasKey: function() {
      throw new Error("hasKey: must be overridden");
    },
    dispose: function() {},
    getObject: function(key) {
      return JSON.parse(this.get(key));
    },
    setObject: function(key, object) {
      return this.set(key, JSON.stringify(object));
    }
  };
  module.exports = Store;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("79", ["@node/util", "4", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var util = $__require('@node/util'),
      Store = $__require('4');
  function MemoryStore() {
    Store.call(this);
    this.map = {};
  }
  MemoryStore.TYPE = 'memory';
  util.inherits(MemoryStore, Store);
  Store.mix(MemoryStore, {
    set: function(key, contents) {
      this.map[key] = contents;
    },
    get: function(key) {
      if (!this.hasKey(key)) {
        throw new Error('Unable to find entry for [' + key + ']');
      }
      return this.map[key];
    },
    hasKey: function(key) {
      return this.map.hasOwnProperty(key);
    },
    keys: function() {
      return Object.keys(this.map);
    },
    dispose: function() {
      this.map = {};
    }
  });
  module.exports = MemoryStore;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(isNode) {
    function addDerivedInfoForFile(fileCoverage) {
      var statementMap = fileCoverage.statementMap,
          statements = fileCoverage.s,
          lineMap;
      if (!fileCoverage.l) {
        fileCoverage.l = lineMap = {};
        Object.keys(statements).forEach(function(st) {
          var line = statementMap[st].start.line,
              count = statements[st],
              prevVal = lineMap[line];
          if (count === 0 && statementMap[st].skip) {
            count = 1;
          }
          if (typeof prevVal === 'undefined' || prevVal < count) {
            lineMap[line] = count;
          }
        });
      }
    }
    function addDerivedInfo(coverage) {
      Object.keys(coverage).forEach(function(k) {
        addDerivedInfoForFile(coverage[k]);
      });
    }
    function removeDerivedInfo(coverage) {
      Object.keys(coverage).forEach(function(k) {
        delete coverage[k].l;
      });
    }
    function percent(covered, total) {
      var tmp;
      if (total > 0) {
        tmp = 1000 * 100 * covered / total + 5;
        return Math.floor(tmp / 10) / 100;
      } else {
        return 100.00;
      }
    }
    function computeSimpleTotals(fileCoverage, property, mapProperty) {
      var stats = fileCoverage[property],
          map = mapProperty ? fileCoverage[mapProperty] : null,
          ret = {
            total: 0,
            covered: 0,
            skipped: 0
          };
      Object.keys(stats).forEach(function(key) {
        var covered = !!stats[key],
            skipped = map && map[key].skip;
        ret.total += 1;
        if (covered || skipped) {
          ret.covered += 1;
        }
        if (!covered && skipped) {
          ret.skipped += 1;
        }
      });
      ret.pct = percent(ret.covered, ret.total);
      return ret;
    }
    function computeBranchTotals(fileCoverage) {
      var stats = fileCoverage.b,
          branchMap = fileCoverage.branchMap,
          ret = {
            total: 0,
            covered: 0,
            skipped: 0
          };
      Object.keys(stats).forEach(function(key) {
        var branches = stats[key],
            map = branchMap[key],
            covered,
            skipped,
            i;
        for (i = 0; i < branches.length; i += 1) {
          covered = branches[i] > 0;
          skipped = map.locations && map.locations[i] && map.locations[i].skip;
          if (covered || skipped) {
            ret.covered += 1;
          }
          if (!covered && skipped) {
            ret.skipped += 1;
          }
        }
        ret.total += branches.length;
      });
      ret.pct = percent(ret.covered, ret.total);
      return ret;
    }
    function blankSummary() {
      return {
        lines: {
          total: 0,
          covered: 0,
          skipped: 0,
          pct: 'Unknown'
        },
        statements: {
          total: 0,
          covered: 0,
          skipped: 0,
          pct: 'Unknown'
        },
        functions: {
          total: 0,
          covered: 0,
          skipped: 0,
          pct: 'Unknown'
        },
        branches: {
          total: 0,
          covered: 0,
          skipped: 0,
          pct: 'Unknown'
        },
        linesCovered: {}
      };
    }
    function summarizeFileCoverage(fileCoverage) {
      var ret = blankSummary();
      addDerivedInfoForFile(fileCoverage);
      ret.lines = computeSimpleTotals(fileCoverage, 'l');
      ret.functions = computeSimpleTotals(fileCoverage, 'f', 'fnMap');
      ret.statements = computeSimpleTotals(fileCoverage, 's', 'statementMap');
      ret.branches = computeBranchTotals(fileCoverage);
      ret.linesCovered = fileCoverage.l;
      return ret;
    }
    function mergeFileCoverage(first, second) {
      var ret = JSON.parse(JSON.stringify(first)),
          i;
      delete ret.l;
      Object.keys(second.s).forEach(function(k) {
        ret.s[k] += second.s[k];
      });
      Object.keys(second.f).forEach(function(k) {
        ret.f[k] += second.f[k];
      });
      Object.keys(second.b).forEach(function(k) {
        var retArray = ret.b[k],
            secondArray = second.b[k];
        for (i = 0; i < retArray.length; i += 1) {
          retArray[i] += secondArray[i];
        }
      });
      return ret;
    }
    function mergeSummaryObjects() {
      var ret = blankSummary(),
          args = Array.prototype.slice.call(arguments),
          keys = ['lines', 'statements', 'branches', 'functions'],
          increment = function(obj) {
            if (obj) {
              keys.forEach(function(key) {
                ret[key].total += obj[key].total;
                ret[key].covered += obj[key].covered;
                ret[key].skipped += obj[key].skipped;
              });
              Object.keys(obj.linesCovered).forEach(function(key) {
                if (!ret.linesCovered[key]) {
                  ret.linesCovered[key] = obj.linesCovered[key];
                } else {
                  ret.linesCovered[key] += obj.linesCovered[key];
                }
              });
            }
          };
      args.forEach(function(arg) {
        increment(arg);
      });
      keys.forEach(function(key) {
        ret[key].pct = percent(ret[key].covered, ret[key].total);
      });
      return ret;
    }
    function summarizeCoverage(coverage) {
      var fileSummary = [];
      Object.keys(coverage).forEach(function(key) {
        fileSummary.push(summarizeFileCoverage(coverage[key]));
      });
      return mergeSummaryObjects.apply(null, fileSummary);
    }
    function toYUICoverage(coverage) {
      var ret = {};
      addDerivedInfo(coverage);
      Object.keys(coverage).forEach(function(k) {
        var fileCoverage = coverage[k],
            lines = fileCoverage.l,
            functions = fileCoverage.f,
            fnMap = fileCoverage.fnMap,
            o;
        o = ret[k] = {
          lines: {},
          calledLines: 0,
          coveredLines: 0,
          functions: {},
          calledFunctions: 0,
          coveredFunctions: 0
        };
        Object.keys(lines).forEach(function(k) {
          o.lines[k] = lines[k];
          o.coveredLines += 1;
          if (lines[k] > 0) {
            o.calledLines += 1;
          }
        });
        Object.keys(functions).forEach(function(k) {
          var name = fnMap[k].name + ':' + fnMap[k].line;
          o.functions[name] = functions[k];
          o.coveredFunctions += 1;
          if (functions[k] > 0) {
            o.calledFunctions += 1;
          }
        });
      });
      return ret;
    }
    function incrementIgnoredTotals(cov) {
      var fileCoverage = JSON.parse(JSON.stringify(cov));
      [{
        mapKey: 'statementMap',
        hitsKey: 's'
      }, {
        mapKey: 'branchMap',
        hitsKey: 'b'
      }, {
        mapKey: 'fnMap',
        hitsKey: 'f'
      }].forEach(function(keys) {
        Object.keys(fileCoverage[keys.mapKey]).forEach(function(key) {
          var map = fileCoverage[keys.mapKey][key];
          var hits = fileCoverage[keys.hitsKey];
          if (keys.mapKey === 'branchMap') {
            var locations = map.locations;
            locations.forEach(function(location, index) {
              if (hits[key][index] === 0 && location.skip) {
                hits[key][index] = 1;
              }
            });
            return;
          }
          if (hits[key] === 0 && map.skip) {
            hits[key] = 1;
          }
        });
      });
      return fileCoverage;
    }
    var exportables = {
      addDerivedInfo: addDerivedInfo,
      addDerivedInfoForFile: addDerivedInfoForFile,
      removeDerivedInfo: removeDerivedInfo,
      blankSummary: blankSummary,
      summarizeFileCoverage: summarizeFileCoverage,
      summarizeCoverage: summarizeCoverage,
      mergeFileCoverage: mergeFileCoverage,
      mergeSummaryObjects: mergeSummaryObjects,
      toYUICoverage: toYUICoverage,
      incrementIgnoredTotals: incrementIgnoredTotals
    };
    if (isNode) {
      module.exports = exportables;
    } else {
      window.coverageUtils = exportables;
    }
  }(typeof module !== 'undefined' && typeof module.exports !== 'undefined' && typeof exports !== 'undefined'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("39", ["79", "c", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var MemoryStore = $__require('79'),
      utils = $__require('c');
  function Collector(options) {
    options = options || {};
    this.store = options.store || new MemoryStore();
  }
  Collector.prototype = {
    add: function(coverage) {
      var store = this.store;
      Object.keys(coverage).forEach(function(key) {
        var fileCoverage = coverage[key];
        if (store.hasKey(key)) {
          store.setObject(key, utils.mergeFileCoverage(fileCoverage, store.getObject(key)));
        } else {
          store.setObject(key, fileCoverage);
        }
      });
    },
    files: function() {
      return this.store.keys();
    },
    fileCoverageFor: function(fileName) {
      var ret = this.store.getObject(fileName);
      utils.addDerivedInfoForFile(ret);
      return ret;
    },
    getFinalCoverage: function() {
      var ret = {},
          that = this;
      this.files().forEach(function(file) {
        ret[file] = that.fileCoverageFor(file);
      });
      return ret;
    },
    dispose: function() {
      this.store.dispose();
    }
  };
  module.exports = Collector;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7a", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var wordwrap = module.exports = function(start, stop, params) {
    if (typeof start === 'object') {
      params = start;
      start = params.start;
      stop = params.stop;
    }
    if (typeof stop === 'object') {
      params = stop;
      start = start || params.start;
      stop = undefined;
    }
    if (!stop) {
      stop = start;
      start = 0;
    }
    if (!params)
      params = {};
    var mode = params.mode || 'soft';
    var re = mode === 'hard' ? /\b/ : /(\S+\s+)/;
    return function(text) {
      var chunks = text.toString().split(re).reduce(function(acc, x) {
        if (mode === 'hard') {
          for (var i = 0; i < x.length; i += stop - start) {
            acc.push(x.slice(i, i + stop - start));
          }
        } else
          acc.push(x);
        return acc;
      }, []);
      ;
      return chunks.reduce(function(lines, rawChunk) {
        if (rawChunk === '')
          return lines;
        var chunk = rawChunk.replace(/\t/g, '    ');
        var i = lines.length - 1;
        if (lines[i].length + chunk.length > stop) {
          lines[i] = lines[i].replace(/\s+$/, '');
          chunk.split(/\n/).forEach(function(c) {
            lines.push(new Array(start + 1).join(' ') + c.replace(/^\s+/, ''));
          });
        } else if (chunk.match(/\n/)) {
          var xs = chunk.split(/\n/);
          lines[i] += xs.shift();
          xs.forEach(function(c) {
            lines.push(new Array(start + 1).join(' ') + c.replace(/^\s+/, ''));
          });
        } else {
          lines[i] += chunk;
        }
        return lines;
      }, [new Array(start + 1).join(' ')]).join('\n');
    };
  };
  wordwrap.soft = wordwrap;
  wordwrap.hard = function(start, stop) {
    return wordwrap(start, stop, {mode: 'hard'});
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3a", ["7a", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var OPT_PREFIX = "      ",
      OPT_START = OPT_PREFIX.length,
      TEXT_START = 14,
      STOP = 80,
      wrap = $__require('7a')(TEXT_START, STOP),
      paraWrap = $__require('7a')(1, STOP);
  function formatPara(text) {
    return paraWrap(text);
  }
  function formatOption(option, helpText) {
    var formattedText = wrap(helpText);
    if (option.length > TEXT_START - OPT_START - 2) {
      return OPT_PREFIX + option + '\n' + formattedText;
    } else {
      return OPT_PREFIX + option + formattedText.substring((OPT_PREFIX + option).length);
    }
  }
  module.exports = {
    formatPara: formatPara,
    formatOption: formatOption
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7b", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire && $__System._nodeRequire('module');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("45", ["@node/path", "@node/fs", "7b", "@node/vm", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      fs = $__require('@node/fs'),
      Module = $__require('7b'),
      vm = $__require('@node/vm'),
      originalLoaders = {},
      originalCreateScript = vm.createScript,
      originalRunInThisContext = vm.runInThisContext;
  function transformFn(matcher, transformer, verbose) {
    return function(code, filename) {
      var shouldHook = typeof filename === 'string' && matcher(path.resolve(filename)),
          transformed,
          changed = false;
      if (shouldHook) {
        if (verbose) {
          console.error('Module load hook: transform [' + filename + ']');
        }
        try {
          transformed = transformer(code, filename);
          changed = true;
        } catch (ex) {
          console.error('Transformation error; return original code');
          console.error(ex);
          transformed = code;
        }
      } else {
        transformed = code;
      }
      return {
        code: transformed,
        changed: changed
      };
    };
  }
  function unloadRequireCache(matcher) {
    if (matcher && typeof $__require !== 'undefined' && $__require && $__require.cache) {
      Object.keys($__require.cache).forEach(function(filename) {
        if (matcher(filename)) {
          delete $__require.cache[filename];
        }
      });
    }
  }
  function hookRequire(matcher, transformer, options) {
    options = options || {};
    var extensions,
        fn = transformFn(matcher, transformer, options.verbose),
        postLoadHook = options.postLoadHook && typeof options.postLoadHook === 'function' ? options.postLoadHook : null;
    extensions = options.extensions || ['.js'];
    extensions.forEach(function(ext) {
      if (!(ext in originalLoaders)) {
        originalLoaders[ext] = Module._extensions[ext] || Module._extensions['.js'];
      }
      Module._extensions[ext] = function(module, filename) {
        var ret = fn(fs.readFileSync(filename, 'utf8'), filename);
        if (ret.changed) {
          module._compile(ret.code, filename);
        } else {
          originalLoaders[ext](module, filename);
        }
        if (postLoadHook) {
          postLoadHook(filename);
        }
      };
    });
  }
  function unhookRequire() {
    Object.keys(originalLoaders).forEach(function(ext) {
      Module._extensions[ext] = originalLoaders[ext];
    });
  }
  function hookCreateScript(matcher, transformer, opts) {
    opts = opts || {};
    var fn = transformFn(matcher, transformer, opts.verbose);
    vm.createScript = function(code, file) {
      var ret = fn(code, file);
      return originalCreateScript(ret.code, file);
    };
  }
  function unhookCreateScript() {
    vm.createScript = originalCreateScript;
  }
  function hookRunInThisContext(matcher, transformer, opts) {
    opts = opts || {};
    var fn = transformFn(matcher, transformer, opts.verbose);
    vm.runInThisContext = function(code, file) {
      var ret = fn(code, file);
      return originalRunInThisContext(ret.code, file);
    };
  }
  function unhookRunInThisContext() {
    vm.runInThisContext = originalRunInThisContext;
  }
  module.exports = {
    hookRequire: hookRequire,
    unhookRequire: unhookRequire,
    hookCreateScript: hookCreateScript,
    unhookCreateScript: unhookCreateScript,
    hookRunInThisContext: hookRunInThisContext,
    unhookRunInThisContext: unhookRunInThisContext,
    unloadRequireCache: unloadRequireCache
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4b", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports.create = function(message) {
    var err = new Error(message);
    err.inputError = true;
    return err;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("46", ["9", "3d", "4b", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Report = $__require('9'),
      configuration = $__require('3d'),
      inputError = $__require('4b');
  function Reporter(cfg, dir) {
    this.config = cfg || configuration.loadFile();
    this.dir = dir || this.config.reporting.dir();
    this.reports = {};
  }
  Reporter.prototype = {
    add: function(fmt) {
      if (this.reports[fmt]) {
        return;
      }
      var config = this.config,
          rptConfig = config.reporting.reportConfig()[fmt] || {};
      rptConfig.verbose = config.verbose;
      rptConfig.dir = this.dir;
      rptConfig.watermarks = config.reporting.watermarks();
      try {
        this.reports[fmt] = Report.create(fmt, rptConfig);
      } catch (ex) {
        throw inputError.create('Invalid report format [' + fmt + ']');
      }
    },
    addAll: function(fmts) {
      var that = this;
      fmts.forEach(function(f) {
        that.add(f);
      });
    },
    write: function(collector, sync, callback) {
      var reports = this.reports,
          verbose = this.config.verbose,
          handler = this.handleDone.bind(this, callback);
      this.inProgress = Object.keys(reports).length;
      Object.keys(reports).forEach(function(name) {
        var report = reports[name];
        if (verbose) {
          console.error('Write report: ' + name);
        }
        report.on('done', handler);
        report.writeReport(collector, sync);
      });
    },
    handleDone: function(callback) {
      this.inProgress -= 1;
      if (this.inProgress === 0) {
        return callback();
      }
    }
  };
  module.exports = Reporter;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7c", ["7d", "@node/fs", "@node/path", "7e", "7f", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('7d');
  var fs = $__require('@node/fs');
  var path = $__require('@node/path');
  var caller = $__require('7e');
  var nodeModulesPaths = $__require('7f');
  var splitRe = process.platform === 'win32' ? /[\/\\]/ : /\//;
  module.exports = function resolve(x, opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = {};
    }
    if (!opts)
      opts = {};
    if (typeof x !== 'string') {
      return process.nextTick(function() {
        cb(new Error('path must be a string'));
      });
    }
    var isFile = opts.isFile || function(file, cb) {
      fs.stat(file, function(err, stat) {
        if (err && err.code === 'ENOENT')
          cb(null, false);
        else if (err)
          cb(err);
        else
          cb(null, stat.isFile() || stat.isFIFO());
      });
    };
    var readFile = opts.readFile || fs.readFile;
    var extensions = opts.extensions || ['.js'];
    var y = opts.basedir || path.dirname(caller());
    opts.paths = opts.paths || [];
    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/.test(x)) {
      var res = path.resolve(y, x);
      if (x === '..')
        res += '/';
      if (/\/$/.test(x) && res === y) {
        loadAsDirectory(res, opts.package, onfile);
      } else
        loadAsFile(res, opts.package, onfile);
    } else
      loadNodeModules(x, y, function(err, n, pkg) {
        if (err)
          cb(err);
        else if (n)
          cb(null, n, pkg);
        else if (core[x])
          return cb(null, x);
        else
          cb(new Error("Cannot find module '" + x + "' from '" + y + "'"));
      });
    function onfile(err, m, pkg) {
      if (err)
        cb(err);
      else if (m)
        cb(null, m, pkg);
      else
        loadAsDirectory(res, function(err, d, pkg) {
          if (err)
            cb(err);
          else if (d)
            cb(null, d, pkg);
          else
            cb(new Error("Cannot find module '" + x + "' from '" + y + "'"));
        });
    }
    function loadAsFile(x, pkg, cb) {
      if (typeof pkg === 'function') {
        cb = pkg;
        pkg = undefined;
      }
      var exts = [''].concat(extensions);
      load(exts, x, pkg);
      function load(exts, x, pkg) {
        if (exts.length === 0)
          return cb(null, undefined, pkg);
        var file = x + exts[0];
        if (pkg)
          onpkg(null, pkg);
        else
          loadpkg(path.dirname(file), onpkg);
        function onpkg(err, pkg_, dir) {
          pkg = pkg_;
          if (err)
            return cb(err);
          if (dir && pkg && opts.pathFilter) {
            var rfile = path.relative(dir, file);
            var rel = rfile.slice(0, rfile.length - exts[0].length);
            var r = opts.pathFilter(pkg, x, rel);
            if (r)
              return load([''].concat(extensions.slice()), path.resolve(dir, r), pkg);
          }
          isFile(file, onex);
        }
        function onex(err, ex) {
          if (err)
            cb(err);
          else if (!ex)
            load(exts.slice(1), x, pkg);
          else
            cb(null, file, pkg);
        }
      }
    }
    function loadpkg(dir, cb) {
      if (dir === '' || dir === '/')
        return cb(null);
      if (process.platform === 'win32' && /^\w:[\\\/]*$/.test(dir)) {
        return cb(null);
      }
      if (/[\\\/]node_modules[\\\/]*$/.test(dir))
        return cb(null);
      var pkgfile = path.join(dir, 'package.json');
      isFile(pkgfile, function(err, ex) {
        if (!ex)
          return loadpkg(path.dirname(dir), cb);
        readFile(pkgfile, function(err, body) {
          if (err)
            cb(err);
          try {
            var pkg = JSON.parse(body);
          } catch (err) {}
          if (pkg && opts.packageFilter) {
            pkg = opts.packageFilter(pkg, pkgfile);
          }
          cb(null, pkg, dir);
        });
      });
    }
    function loadAsDirectory(x, fpkg, cb) {
      if (typeof fpkg === 'function') {
        cb = fpkg;
        fpkg = opts.package;
      }
      var pkgfile = path.join(x, '/package.json');
      isFile(pkgfile, function(err, ex) {
        if (err)
          return cb(err);
        if (!ex)
          return loadAsFile(path.join(x, '/index'), fpkg, cb);
        readFile(pkgfile, function(err, body) {
          if (err)
            return cb(err);
          try {
            var pkg = JSON.parse(body);
          } catch (err) {}
          if (opts.packageFilter) {
            pkg = opts.packageFilter(pkg, pkgfile);
          }
          if (pkg.main) {
            if (pkg.main === '.' || pkg.main === './') {
              pkg.main = 'index';
            }
            loadAsFile(path.resolve(x, pkg.main), pkg, function(err, m, pkg) {
              if (err)
                return cb(err);
              if (m)
                return cb(null, m, pkg);
              if (!pkg)
                return loadAsFile(path.join(x, '/index'), pkg, cb);
              var dir = path.resolve(x, pkg.main);
              loadAsDirectory(dir, pkg, function(err, n, pkg) {
                if (err)
                  return cb(err);
                if (n)
                  return cb(null, n, pkg);
                loadAsFile(path.join(x, '/index'), pkg, cb);
              });
            });
            return;
          }
          loadAsFile(path.join(x, '/index'), pkg, cb);
        });
      });
    }
    function loadNodeModules(x, start, cb) {
      (function process(dirs) {
        if (dirs.length === 0)
          return cb(null, undefined);
        var dir = dirs[0];
        var file = path.join(dir, '/', x);
        loadAsFile(file, undefined, onfile);
        function onfile(err, m, pkg) {
          if (err)
            return cb(err);
          if (m)
            return cb(null, m, pkg);
          loadAsDirectory(path.join(dir, '/', x), undefined, ondir);
        }
        function ondir(err, n, pkg) {
          if (err)
            return cb(err);
          if (n)
            return cb(null, n, pkg);
          process(dirs.slice(1));
        }
      })(nodeModulesPaths(start, opts));
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("80", [], false, function() {
  return [
    "assert",
    "buffer_ieee754",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "_debugger",
    "dgram",
    "dns",
    "domain",
    "events",
    "freelist",
    "fs",
    "http",
    "https",
    "_linklist",
    "module",
    "net",
    "os",
    "path",
    "punycode",
    "querystring",
    "readline",
    "repl",
    "stream",
    "string_decoder",
    "sys",
    "timers",
    "tls",
    "tty",
    "url",
    "util",
    "vm",
    "zlib"
  ];
});

$__System.registerDynamic("7d", ["80", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('80').reduce(function(acc, x) {
    acc[x] = true;
    return acc;
  }, {});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7e", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {
    var origPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack) {
      return stack;
    };
    var stack = (new Error()).stack;
    Error.prepareStackTrace = origPrepareStackTrace;
    return stack[2].getFileName();
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7f", ["@node/path", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path');
  module.exports = function(start, opts) {
    var modules = opts.moduleDirectory ? [].concat(opts.moduleDirectory) : ['node_modules'];
    ;
    start = path.resolve(start);
    var prefix = '/';
    if (/^([A-Za-z]:)/.test(start)) {
      prefix = '';
    } else if (/^\\\\/.test(start)) {
      prefix = '\\\\';
    }
    var splitRe = process.platform === 'win32' ? /[\/\\]/ : /\/+/;
    var parts = start.split(splitRe);
    var dirs = [];
    for (var i = parts.length - 1; i >= 0; i--) {
      if (modules.indexOf(parts[i]) !== -1)
        continue;
      dirs = dirs.concat(modules.map(function(module_dir) {
        return prefix + path.join(path.join.apply(path, parts.slice(0, i + 1)), module_dir);
      }));
    }
    if (process.platform === 'win32') {
      dirs[dirs.length - 1] = dirs[dirs.length - 1].replace(":", ":\\");
    }
    return dirs.concat(opts.paths);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("81", ["7d", "@node/fs", "@node/path", "7e", "7f", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('7d');
  var fs = $__require('@node/fs');
  var path = $__require('@node/path');
  var caller = $__require('7e');
  var nodeModulesPaths = $__require('7f');
  module.exports = function(x, opts) {
    if (!opts)
      opts = {};
    var isFile = opts.isFile || function(file) {
      try {
        var stat = fs.statSync(file);
      } catch (err) {
        if (err && err.code === 'ENOENT')
          return false;
      }
      return stat.isFile() || stat.isFIFO();
    };
    var readFileSync = opts.readFileSync || fs.readFileSync;
    var extensions = opts.extensions || ['.js'];
    var y = opts.basedir || path.dirname(caller());
    opts.paths = opts.paths || [];
    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/.test(x)) {
      var res = path.resolve(y, x);
      if (x === '..')
        res += '/';
      var m = loadAsFileSync(res) || loadAsDirectorySync(res);
      if (m)
        return m;
    } else {
      var n = loadNodeModulesSync(x, y);
      if (n)
        return n;
    }
    if (core[x])
      return x;
    throw new Error("Cannot find module '" + x + "' from '" + y + "'");
    function loadAsFileSync(x) {
      if (isFile(x)) {
        return x;
      }
      for (var i = 0; i < extensions.length; i++) {
        var file = x + extensions[i];
        if (isFile(file)) {
          return file;
        }
      }
    }
    function loadAsDirectorySync(x) {
      var pkgfile = path.join(x, '/package.json');
      if (isFile(pkgfile)) {
        var body = readFileSync(pkgfile, 'utf8');
        try {
          var pkg = JSON.parse(body);
          if (opts.packageFilter) {
            pkg = opts.packageFilter(pkg, x);
          }
          if (pkg.main) {
            var m = loadAsFileSync(path.resolve(x, pkg.main));
            if (m)
              return m;
            var n = loadAsDirectorySync(path.resolve(x, pkg.main));
            if (n)
              return n;
          }
        } catch (err) {}
      }
      return loadAsFileSync(path.join(x, '/index'));
    }
    function loadNodeModulesSync(x, start) {
      var dirs = nodeModulesPaths(start, opts);
      for (var i = 0; i < dirs.length; i++) {
        var dir = dirs[i];
        var m = loadAsFileSync(path.join(dir, '/', x));
        if (m)
          return m;
        var n = loadAsDirectorySync(path.join(dir, '/', x));
        if (n)
          return n;
      }
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("82", ["7d", "7c", "81", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('7d');
  exports = module.exports = $__require('7c');
  exports.core = core;
  exports.isCore = function(x) {
    return core[x];
  };
  exports.sync = $__require('81');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("83", ["84", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var common = $__require('84');
  function Mark(name, buffer, position, line, column) {
    this.name = name;
    this.buffer = buffer;
    this.position = position;
    this.line = line;
    this.column = column;
  }
  Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
    var head,
        start,
        tail,
        end,
        snippet;
    if (!this.buffer)
      return null;
    indent = indent || 4;
    maxLength = maxLength || 75;
    head = '';
    start = this.position;
    while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
      start -= 1;
      if (this.position - start > (maxLength / 2 - 1)) {
        head = ' ... ';
        start += 5;
        break;
      }
    }
    tail = '';
    end = this.position;
    while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
      end += 1;
      if (end - this.position > (maxLength / 2 - 1)) {
        tail = ' ... ';
        end -= 5;
        break;
      }
    }
    snippet = this.buffer.slice(start, end);
    return common.repeat(' ', indent) + head + snippet + tail + '\n' + common.repeat(' ', indent + this.position - start + head.length) + '^';
  };
  Mark.prototype.toString = function toString(compact) {
    var snippet,
        where = '';
    if (this.name) {
      where += 'in "' + this.name + '" ';
    }
    where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);
    if (!compact) {
      snippet = this.getSnippet();
      if (snippet) {
        where += ':\n' + snippet;
      }
    }
    return where;
  };
  module.exports = Mark;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("85", ["84", "86", "83", "87", "88", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var common = $__require('84');
  var YAMLException = $__require('86');
  var Mark = $__require('83');
  var DEFAULT_SAFE_SCHEMA = $__require('87');
  var DEFAULT_FULL_SCHEMA = $__require('88');
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var CONTEXT_FLOW_IN = 1;
  var CONTEXT_FLOW_OUT = 2;
  var CONTEXT_BLOCK_IN = 3;
  var CONTEXT_BLOCK_OUT = 4;
  var CHOMPING_CLIP = 1;
  var CHOMPING_STRIP = 2;
  var CHOMPING_KEEP = 3;
  var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
  var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
  var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
  var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function is_EOL(c) {
    return (c === 0x0A) || (c === 0x0D);
  }
  function is_WHITE_SPACE(c) {
    return (c === 0x09) || (c === 0x20);
  }
  function is_WS_OR_EOL(c) {
    return (c === 0x09) || (c === 0x20) || (c === 0x0A) || (c === 0x0D);
  }
  function is_FLOW_INDICATOR(c) {
    return c === 0x2C || c === 0x5B || c === 0x5D || c === 0x7B || c === 0x7D;
  }
  function fromHexCode(c) {
    var lc;
    if ((0x30 <= c) && (c <= 0x39)) {
      return c - 0x30;
    }
    lc = c | 0x20;
    if ((0x61 <= lc) && (lc <= 0x66)) {
      return lc - 0x61 + 10;
    }
    return -1;
  }
  function escapedHexLen(c) {
    if (c === 0x78) {
      return 2;
    }
    if (c === 0x75) {
      return 4;
    }
    if (c === 0x55) {
      return 8;
    }
    return 0;
  }
  function fromDecimalCode(c) {
    if ((0x30 <= c) && (c <= 0x39)) {
      return c - 0x30;
    }
    return -1;
  }
  function simpleEscapeSequence(c) {
    return (c === 0x30) ? '\x00' : (c === 0x61) ? '\x07' : (c === 0x62) ? '\x08' : (c === 0x74) ? '\x09' : (c === 0x09) ? '\x09' : (c === 0x6E) ? '\x0A' : (c === 0x76) ? '\x0B' : (c === 0x66) ? '\x0C' : (c === 0x72) ? '\x0D' : (c === 0x65) ? '\x1B' : (c === 0x20) ? ' ' : (c === 0x22) ? '\x22' : (c === 0x2F) ? '/' : (c === 0x5C) ? '\x5C' : (c === 0x4E) ? '\x85' : (c === 0x5F) ? '\xA0' : (c === 0x4C) ? '\u2028' : (c === 0x50) ? '\u2029' : '';
  }
  function charFromCodepoint(c) {
    if (c <= 0xFFFF) {
      return String.fromCharCode(c);
    }
    return String.fromCharCode(((c - 0x010000) >> 10) + 0xD800, ((c - 0x010000) & 0x03FF) + 0xDC00);
  }
  var simpleEscapeCheck = new Array(256);
  var simpleEscapeMap = new Array(256);
  for (var i = 0; i < 256; i++) {
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
  }
  function State(input, options) {
    this.input = input;
    this.filename = options['filename'] || null;
    this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
    this.onWarning = options['onWarning'] || null;
    this.legacy = options['legacy'] || false;
    this.json = options['json'] || false;
    this.listener = options['listener'] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.documents = [];
  }
  function generateError(state, message) {
    return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
  }
  function throwError(state, message) {
    throw generateError(state, message);
  }
  function throwWarning(state, message) {
    if (state.onWarning) {
      state.onWarning.call(null, generateError(state, message));
    }
  }
  var directiveHandlers = {
    YAML: function handleYamlDirective(state, name, args) {
      var match,
          major,
          minor;
      if (state.version !== null) {
        throwError(state, 'duplication of %YAML directive');
      }
      if (args.length !== 1) {
        throwError(state, 'YAML directive accepts exactly one argument');
      }
      match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
      if (match === null) {
        throwError(state, 'ill-formed argument of the YAML directive');
      }
      major = parseInt(match[1], 10);
      minor = parseInt(match[2], 10);
      if (major !== 1) {
        throwError(state, 'unacceptable YAML version of the document');
      }
      state.version = args[0];
      state.checkLineBreaks = (minor < 2);
      if (minor !== 1 && minor !== 2) {
        throwWarning(state, 'unsupported YAML version of the document');
      }
    },
    TAG: function handleTagDirective(state, name, args) {
      var handle,
          prefix;
      if (args.length !== 2) {
        throwError(state, 'TAG directive accepts exactly two arguments');
      }
      handle = args[0];
      prefix = args[1];
      if (!PATTERN_TAG_HANDLE.test(handle)) {
        throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
      }
      if (_hasOwnProperty.call(state.tagMap, handle)) {
        throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
      }
      if (!PATTERN_TAG_URI.test(prefix)) {
        throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
      }
      state.tagMap[handle] = prefix;
    }
  };
  function captureSegment(state, start, end, checkJson) {
    var _position,
        _length,
        _character,
        _result;
    if (start < end) {
      _result = state.input.slice(start, end);
      if (checkJson) {
        for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
          _character = _result.charCodeAt(_position);
          if (!(_character === 0x09 || (0x20 <= _character && _character <= 0x10FFFF))) {
            throwError(state, 'expected valid JSON character');
          }
        }
      } else if (PATTERN_NON_PRINTABLE.test(_result)) {
        throwError(state, 'the stream contains non-printable characters');
      }
      state.result += _result;
    }
  }
  function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys,
        key,
        index,
        quantity;
    if (!common.isObject(source)) {
      throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
    }
    sourceKeys = Object.keys(source);
    for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
      key = sourceKeys[index];
      if (!_hasOwnProperty.call(destination, key)) {
        destination[key] = source[key];
        overridableKeys[key] = true;
      }
    }
  }
  function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode) {
    var index,
        quantity;
    keyNode = String(keyNode);
    if (_result === null) {
      _result = {};
    }
    if (keyTag === 'tag:yaml.org,2002:merge') {
      if (Array.isArray(valueNode)) {
        for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
          mergeMappings(state, _result, valueNode[index], overridableKeys);
        }
      } else {
        mergeMappings(state, _result, valueNode, overridableKeys);
      }
    } else {
      if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
        throwError(state, 'duplicated mapping key');
      }
      _result[keyNode] = valueNode;
      delete overridableKeys[keyNode];
    }
    return _result;
  }
  function readLineBreak(state) {
    var ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x0A) {
      state.position++;
    } else if (ch === 0x0D) {
      state.position++;
      if (state.input.charCodeAt(state.position) === 0x0A) {
        state.position++;
      }
    } else {
      throwError(state, 'a line break is expected');
    }
    state.line += 1;
    state.lineStart = state.position;
  }
  function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0,
        ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (allowComments && ch === 0x23) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0x0A && ch !== 0x0D && ch !== 0);
      }
      if (is_EOL(ch)) {
        readLineBreak(state);
        ch = state.input.charCodeAt(state.position);
        lineBreaks++;
        state.lineIndent = 0;
        while (ch === 0x20) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
      } else {
        break;
      }
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
      throwWarning(state, 'deficient indentation');
    }
    return lineBreaks;
  }
  function testDocumentSeparator(state) {
    var _position = state.position,
        ch;
    ch = state.input.charCodeAt(_position);
    if ((ch === 0x2D || ch === 0x2E) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
      _position += 3;
      ch = state.input.charCodeAt(_position);
      if (ch === 0 || is_WS_OR_EOL(ch)) {
        return true;
      }
    }
    return false;
  }
  function writeFoldedLines(state, count) {
    if (count === 1) {
      state.result += ' ';
    } else if (count > 1) {
      state.result += common.repeat('\n', count - 1);
    }
  }
  function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding,
        following,
        captureStart,
        captureEnd,
        hasPendingContent,
        _line,
        _lineStart,
        _lineIndent,
        _kind = state.kind,
        _result = state.result,
        ch;
    ch = state.input.charCodeAt(state.position);
    if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 0x23 || ch === 0x26 || ch === 0x2A || ch === 0x21 || ch === 0x7C || ch === 0x3E || ch === 0x27 || ch === 0x22 || ch === 0x25 || ch === 0x40 || ch === 0x60) {
      return false;
    }
    if (ch === 0x3F || ch === 0x2D) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        return false;
      }
    }
    state.kind = 'scalar';
    state.result = '';
    captureStart = captureEnd = state.position;
    hasPendingContent = false;
    while (ch !== 0) {
      if (ch === 0x3A) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          break;
        }
      } else if (ch === 0x23) {
        preceding = state.input.charCodeAt(state.position - 1);
        if (is_WS_OR_EOL(preceding)) {
          break;
        }
      } else if ((state.position === state.lineStart && testDocumentSeparator(state)) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
        break;
      } else if (is_EOL(ch)) {
        _line = state.line;
        _lineStart = state.lineStart;
        _lineIndent = state.lineIndent;
        skipSeparationSpace(state, false, -1);
        if (state.lineIndent >= nodeIndent) {
          hasPendingContent = true;
          ch = state.input.charCodeAt(state.position);
          continue;
        } else {
          state.position = captureEnd;
          state.line = _line;
          state.lineStart = _lineStart;
          state.lineIndent = _lineIndent;
          break;
        }
      }
      if (hasPendingContent) {
        captureSegment(state, captureStart, captureEnd, false);
        writeFoldedLines(state, state.line - _line);
        captureStart = captureEnd = state.position;
        hasPendingContent = false;
      }
      if (!is_WHITE_SPACE(ch)) {
        captureEnd = state.position + 1;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, captureEnd, false);
    if (state.result) {
      return true;
    }
    state.kind = _kind;
    state.result = _result;
    return false;
  }
  function readSingleQuotedScalar(state, nodeIndent) {
    var ch,
        captureStart,
        captureEnd;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x27) {
      return false;
    }
    state.kind = 'scalar';
    state.result = '';
    state.position++;
    captureStart = captureEnd = state.position;
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      if (ch === 0x27) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);
        if (ch === 0x27) {
          captureStart = captureEnd = state.position;
          state.position++;
        } else {
          return true;
        }
      } else if (is_EOL(ch)) {
        captureSegment(state, captureStart, captureEnd, true);
        writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
        captureStart = captureEnd = state.position;
      } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
        throwError(state, 'unexpected end of the document within a single quoted scalar');
      } else {
        state.position++;
        captureEnd = state.position;
      }
    }
    throwError(state, 'unexpected end of the stream within a single quoted scalar');
  }
  function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart,
        captureEnd,
        hexLength,
        hexResult,
        tmp,
        ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x22) {
      return false;
    }
    state.kind = 'scalar';
    state.result = '';
    state.position++;
    captureStart = captureEnd = state.position;
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      if (ch === 0x22) {
        captureSegment(state, captureStart, state.position, true);
        state.position++;
        return true;
      } else if (ch === 0x5C) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);
        if (is_EOL(ch)) {
          skipSeparationSpace(state, false, nodeIndent);
        } else if (ch < 256 && simpleEscapeCheck[ch]) {
          state.result += simpleEscapeMap[ch];
          state.position++;
        } else if ((tmp = escapedHexLen(ch)) > 0) {
          hexLength = tmp;
          hexResult = 0;
          for (; hexLength > 0; hexLength--) {
            ch = state.input.charCodeAt(++state.position);
            if ((tmp = fromHexCode(ch)) >= 0) {
              hexResult = (hexResult << 4) + tmp;
            } else {
              throwError(state, 'expected hexadecimal character');
            }
          }
          state.result += charFromCodepoint(hexResult);
          state.position++;
        } else {
          throwError(state, 'unknown escape sequence');
        }
        captureStart = captureEnd = state.position;
      } else if (is_EOL(ch)) {
        captureSegment(state, captureStart, captureEnd, true);
        writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
        captureStart = captureEnd = state.position;
      } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
        throwError(state, 'unexpected end of the document within a double quoted scalar');
      } else {
        state.position++;
        captureEnd = state.position;
      }
    }
    throwError(state, 'unexpected end of the stream within a double quoted scalar');
  }
  function readFlowCollection(state, nodeIndent) {
    var readNext = true,
        _line,
        _tag = state.tag,
        _result,
        _anchor = state.anchor,
        following,
        terminator,
        isPair,
        isExplicitPair,
        isMapping,
        overridableKeys = {},
        keyNode,
        keyTag,
        valueNode,
        ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x5B) {
      terminator = 0x5D;
      isMapping = false;
      _result = [];
    } else if (ch === 0x7B) {
      terminator = 0x7D;
      isMapping = true;
      _result = {};
    } else {
      return false;
    }
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(++state.position);
    while (ch !== 0) {
      skipSeparationSpace(state, true, nodeIndent);
      ch = state.input.charCodeAt(state.position);
      if (ch === terminator) {
        state.position++;
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = isMapping ? 'mapping' : 'sequence';
        state.result = _result;
        return true;
      } else if (!readNext) {
        throwError(state, 'missed comma between flow collection entries');
      }
      keyTag = keyNode = valueNode = null;
      isPair = isExplicitPair = false;
      if (ch === 0x3F) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following)) {
          isPair = isExplicitPair = true;
          state.position++;
          skipSeparationSpace(state, true, nodeIndent);
        }
      }
      _line = state.line;
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      keyTag = state.tag;
      keyNode = state.result;
      skipSeparationSpace(state, true, nodeIndent);
      ch = state.input.charCodeAt(state.position);
      if ((isExplicitPair || state.line === _line) && ch === 0x3A) {
        isPair = true;
        ch = state.input.charCodeAt(++state.position);
        skipSeparationSpace(state, true, nodeIndent);
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        valueNode = state.result;
      }
      if (isMapping) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
      } else if (isPair) {
        _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
      } else {
        _result.push(keyNode);
      }
      skipSeparationSpace(state, true, nodeIndent);
      ch = state.input.charCodeAt(state.position);
      if (ch === 0x2C) {
        readNext = true;
        ch = state.input.charCodeAt(++state.position);
      } else {
        readNext = false;
      }
    }
    throwError(state, 'unexpected end of the stream within a flow collection');
  }
  function readBlockScalar(state, nodeIndent) {
    var captureStart,
        folding,
        chomping = CHOMPING_CLIP,
        detectedIndent = false,
        textIndent = nodeIndent,
        emptyLines = 0,
        atMoreIndented = false,
        tmp,
        ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x7C) {
      folding = false;
    } else if (ch === 0x3E) {
      folding = true;
    } else {
      return false;
    }
    state.kind = 'scalar';
    state.result = '';
    while (ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
      if (ch === 0x2B || ch === 0x2D) {
        if (CHOMPING_CLIP === chomping) {
          chomping = (ch === 0x2B) ? CHOMPING_KEEP : CHOMPING_STRIP;
        } else {
          throwError(state, 'repeat of a chomping mode identifier');
        }
      } else if ((tmp = fromDecimalCode(ch)) >= 0) {
        if (tmp === 0) {
          throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
        } else if (!detectedIndent) {
          textIndent = nodeIndent + tmp - 1;
          detectedIndent = true;
        } else {
          throwError(state, 'repeat of an indentation width identifier');
        }
      } else {
        break;
      }
    }
    if (is_WHITE_SPACE(ch)) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (is_WHITE_SPACE(ch));
      if (ch === 0x23) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (!is_EOL(ch) && (ch !== 0));
      }
    }
    while (ch !== 0) {
      readLineBreak(state);
      state.lineIndent = 0;
      ch = state.input.charCodeAt(state.position);
      while ((!detectedIndent || state.lineIndent < textIndent) && (ch === 0x20)) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
      if (!detectedIndent && state.lineIndent > textIndent) {
        textIndent = state.lineIndent;
      }
      if (is_EOL(ch)) {
        emptyLines++;
        continue;
      }
      if (state.lineIndent < textIndent) {
        if (chomping === CHOMPING_KEEP) {
          state.result += common.repeat('\n', emptyLines);
        } else if (chomping === CHOMPING_CLIP) {
          if (detectedIndent) {
            state.result += '\n';
          }
        }
        break;
      }
      if (folding) {
        if (is_WHITE_SPACE(ch)) {
          atMoreIndented = true;
          state.result += common.repeat('\n', emptyLines + 1);
        } else if (atMoreIndented) {
          atMoreIndented = false;
          state.result += common.repeat('\n', emptyLines + 1);
        } else if (emptyLines === 0) {
          if (detectedIndent) {
            state.result += ' ';
          }
        } else {
          state.result += common.repeat('\n', emptyLines);
        }
      } else if (detectedIndent) {
        state.result += common.repeat('\n', emptyLines + 1);
      } else {
        state.result += common.repeat('\n', emptyLines);
      }
      detectedIndent = true;
      emptyLines = 0;
      captureStart = state.position;
      while (!is_EOL(ch) && (ch !== 0)) {
        ch = state.input.charCodeAt(++state.position);
      }
      captureSegment(state, captureStart, state.position, false);
    }
    return true;
  }
  function readBlockSequence(state, nodeIndent) {
    var _line,
        _tag = state.tag,
        _anchor = state.anchor,
        _result = [],
        following,
        detected = false,
        ch;
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
      if (ch !== 0x2D) {
        break;
      }
      following = state.input.charCodeAt(state.position + 1);
      if (!is_WS_OR_EOL(following)) {
        break;
      }
      detected = true;
      state.position++;
      if (skipSeparationSpace(state, true, -1)) {
        if (state.lineIndent <= nodeIndent) {
          _result.push(null);
          ch = state.input.charCodeAt(state.position);
          continue;
        }
      }
      _line = state.line;
      composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
      _result.push(state.result);
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
      if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
        throwError(state, 'bad indentation of a sequence entry');
      } else if (state.lineIndent < nodeIndent) {
        break;
      }
    }
    if (detected) {
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = 'sequence';
      state.result = _result;
      return true;
    }
    return false;
  }
  function readBlockMapping(state, nodeIndent, flowIndent) {
    var following,
        allowCompact,
        _line,
        _tag = state.tag,
        _anchor = state.anchor,
        _result = {},
        overridableKeys = {},
        keyTag = null,
        keyNode = null,
        valueNode = null,
        atExplicitKey = false,
        detected = false,
        ch;
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
      following = state.input.charCodeAt(state.position + 1);
      _line = state.line;
      if ((ch === 0x3F || ch === 0x3A) && is_WS_OR_EOL(following)) {
        if (ch === 0x3F) {
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = true;
          allowCompact = true;
        } else if (atExplicitKey) {
          atExplicitKey = false;
          allowCompact = true;
        } else {
          throwError(state, 'incomplete explicit mapping pair; a key node is missed');
        }
        state.position += 1;
        ch = following;
      } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        if (state.line === _line) {
          ch = state.input.charCodeAt(state.position);
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 0x3A) {
            ch = state.input.charCodeAt(++state.position);
            if (!is_WS_OR_EOL(ch)) {
              throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
            }
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = false;
            allowCompact = false;
            keyTag = state.tag;
            keyNode = state.result;
          } else if (detected) {
            throwError(state, 'can not read an implicit mapping pair; a colon is missed');
          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true;
          }
        } else if (detected) {
          throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else {
        break;
      }
      if (state.line === _line || state.lineIndent > nodeIndent) {
        if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
          if (atExplicitKey) {
            keyNode = state.result;
          } else {
            valueNode = state.result;
          }
        }
        if (!atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
          keyTag = keyNode = valueNode = null;
        }
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
      }
      if (state.lineIndent > nodeIndent && (ch !== 0)) {
        throwError(state, 'bad indentation of a mapping entry');
      } else if (state.lineIndent < nodeIndent) {
        break;
      }
    }
    if (atExplicitKey) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
    }
    if (detected) {
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = 'mapping';
      state.result = _result;
    }
    return detected;
  }
  function readTagProperty(state) {
    var _position,
        isVerbatim = false,
        isNamed = false,
        tagHandle,
        tagName,
        ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x21)
      return false;
    if (state.tag !== null) {
      throwError(state, 'duplication of a tag property');
    }
    ch = state.input.charCodeAt(++state.position);
    if (ch === 0x3C) {
      isVerbatim = true;
      ch = state.input.charCodeAt(++state.position);
    } else if (ch === 0x21) {
      isNamed = true;
      tagHandle = '!!';
      ch = state.input.charCodeAt(++state.position);
    } else {
      tagHandle = '!';
    }
    _position = state.position;
    if (isVerbatim) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0 && ch !== 0x3E);
      if (state.position < state.length) {
        tagName = state.input.slice(_position, state.position);
        ch = state.input.charCodeAt(++state.position);
      } else {
        throwError(state, 'unexpected end of the stream within a verbatim tag');
      }
    } else {
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        if (ch === 0x21) {
          if (!isNamed) {
            tagHandle = state.input.slice(_position - 1, state.position + 1);
            if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
              throwError(state, 'named tag handle cannot contain such characters');
            }
            isNamed = true;
            _position = state.position + 1;
          } else {
            throwError(state, 'tag suffix cannot contain exclamation marks');
          }
        }
        ch = state.input.charCodeAt(++state.position);
      }
      tagName = state.input.slice(_position, state.position);
      if (PATTERN_FLOW_INDICATORS.test(tagName)) {
        throwError(state, 'tag suffix cannot contain flow indicator characters');
      }
    }
    if (tagName && !PATTERN_TAG_URI.test(tagName)) {
      throwError(state, 'tag name cannot contain such characters: ' + tagName);
    }
    if (isVerbatim) {
      state.tag = tagName;
    } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
      state.tag = state.tagMap[tagHandle] + tagName;
    } else if (tagHandle === '!') {
      state.tag = '!' + tagName;
    } else if (tagHandle === '!!') {
      state.tag = 'tag:yaml.org,2002:' + tagName;
    } else {
      throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    }
    return true;
  }
  function readAnchorProperty(state) {
    var _position,
        ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x26)
      return false;
    if (state.anchor !== null) {
      throwError(state, 'duplication of an anchor property');
    }
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
      throwError(state, 'name of an anchor node must contain at least one character');
    }
    state.anchor = state.input.slice(_position, state.position);
    return true;
  }
  function readAlias(state) {
    var _position,
        alias,
        ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x2A)
      return false;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
      throwError(state, 'name of an alias node must contain at least one character');
    }
    alias = state.input.slice(_position, state.position);
    if (!state.anchorMap.hasOwnProperty(alias)) {
      throwError(state, 'unidentified alias "' + alias + '"');
    }
    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
  }
  function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles,
        allowBlockScalars,
        allowBlockCollections,
        indentStatus = 1,
        atNewLine = false,
        hasContent = false,
        typeIndex,
        typeQuantity,
        type,
        flowIndent,
        blockIndent;
    if (state.listener !== null) {
      state.listener('open', state);
    }
    state.tag = null;
    state.anchor = null;
    state.kind = null;
    state.result = null;
    allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
    if (allowToSeek) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      }
    }
    if (indentStatus === 1) {
      while (readTagProperty(state) || readAnchorProperty(state)) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;
          allowBlockCollections = allowBlockStyles;
          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        } else {
          allowBlockCollections = false;
        }
      }
    }
    if (allowBlockCollections) {
      allowBlockCollections = atNewLine || allowCompact;
    }
    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
      if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
        flowIndent = parentIndent;
      } else {
        flowIndent = parentIndent + 1;
      }
      blockIndent = state.position - state.lineStart;
      if (indentStatus === 1) {
        if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
          hasContent = true;
        } else {
          if ((allowBlockScalars && readBlockScalar(state, flowIndent)) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
            hasContent = true;
          } else if (readAlias(state)) {
            hasContent = true;
            if (state.tag !== null || state.anchor !== null) {
              throwError(state, 'alias node should not have any properties');
            }
          } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
            hasContent = true;
            if (state.tag === null) {
              state.tag = '?';
            }
          }
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
        }
      } else if (indentStatus === 0) {
        hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
      }
    }
    if (state.tag !== null && state.tag !== '!') {
      if (state.tag === '?') {
        for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
          type = state.implicitTypes[typeIndex];
          if (type.resolve(state.result)) {
            state.result = type.construct(state.result);
            state.tag = type.tag;
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
            break;
          }
        }
      } else if (_hasOwnProperty.call(state.typeMap, state.tag)) {
        type = state.typeMap[state.tag];
        if (state.result !== null && type.kind !== state.kind) {
          throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
        }
        if (!type.resolve(state.result)) {
          throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
        } else {
          state.result = type.construct(state.result);
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
        }
      } else {
        throwError(state, 'unknown tag !<' + state.tag + '>');
      }
    }
    if (state.listener !== null) {
      state.listener('close', state);
    }
    return state.tag !== null || state.anchor !== null || hasContent;
  }
  function readDocument(state) {
    var documentStart = state.position,
        _position,
        directiveName,
        directiveArgs,
        hasDirectives = false,
        ch;
    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = {};
    state.anchorMap = {};
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
      if (state.lineIndent > 0 || ch !== 0x25) {
        break;
      }
      hasDirectives = true;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveName = state.input.slice(_position, state.position);
      directiveArgs = [];
      if (directiveName.length < 1) {
        throwError(state, 'directive name must not be less than one character in length');
      }
      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 0x23) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 0 && !is_EOL(ch));
          break;
        }
        if (is_EOL(ch))
          break;
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveArgs.push(state.input.slice(_position, state.position));
      }
      if (ch !== 0)
        readLineBreak(state);
      if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
        directiveHandlers[directiveName](state, directiveName, directiveArgs);
      } else {
        throwWarning(state, 'unknown document directive "' + directiveName + '"');
      }
    }
    skipSeparationSpace(state, true, -1);
    if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 0x2D && state.input.charCodeAt(state.position + 1) === 0x2D && state.input.charCodeAt(state.position + 2) === 0x2D) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
      throwError(state, 'directives end mark is expected');
    }
    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);
    if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
      throwWarning(state, 'non-ASCII line breaks are interpreted as content');
    }
    state.documents.push(state.result);
    if (state.position === state.lineStart && testDocumentSeparator(state)) {
      if (state.input.charCodeAt(state.position) === 0x2E) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      }
      return;
    }
    if (state.position < (state.length - 1)) {
      throwError(state, 'end of the stream or a document separator is expected');
    } else {
      return;
    }
  }
  function loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
      if (input.charCodeAt(input.length - 1) !== 0x0A && input.charCodeAt(input.length - 1) !== 0x0D) {
        input += '\n';
      }
      if (input.charCodeAt(0) === 0xFEFF) {
        input = input.slice(1);
      }
    }
    var state = new State(input, options);
    state.input += '\0';
    while (state.input.charCodeAt(state.position) === 0x20) {
      state.lineIndent += 1;
      state.position += 1;
    }
    while (state.position < (state.length - 1)) {
      readDocument(state);
    }
    return state.documents;
  }
  function loadAll(input, iterator, options) {
    var documents = loadDocuments(input, options),
        index,
        length;
    for (index = 0, length = documents.length; index < length; index += 1) {
      iterator(documents[index]);
    }
  }
  function load(input, options) {
    var documents = loadDocuments(input, options);
    if (documents.length === 0) {
      return undefined;
    } else if (documents.length === 1) {
      return documents[0];
    }
    throw new YAMLException('expected a single document in the stream, but found more');
  }
  function safeLoadAll(input, output, options) {
    loadAll(input, output, common.extend({schema: DEFAULT_SAFE_SCHEMA}, options));
  }
  function safeLoad(input, options) {
    return load(input, common.extend({schema: DEFAULT_SAFE_SCHEMA}, options));
  }
  module.exports.loadAll = loadAll;
  module.exports.load = load;
  module.exports.safeLoadAll = safeLoadAll;
  module.exports.safeLoad = safeLoad;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("89", ["84", "86", "88", "87", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var common = $__require('84');
  var YAMLException = $__require('86');
  var DEFAULT_FULL_SCHEMA = $__require('88');
  var DEFAULT_SAFE_SCHEMA = $__require('87');
  var _toString = Object.prototype.toString;
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var CHAR_TAB = 0x09;
  var CHAR_LINE_FEED = 0x0A;
  var CHAR_CARRIAGE_RETURN = 0x0D;
  var CHAR_SPACE = 0x20;
  var CHAR_EXCLAMATION = 0x21;
  var CHAR_DOUBLE_QUOTE = 0x22;
  var CHAR_SHARP = 0x23;
  var CHAR_PERCENT = 0x25;
  var CHAR_AMPERSAND = 0x26;
  var CHAR_SINGLE_QUOTE = 0x27;
  var CHAR_ASTERISK = 0x2A;
  var CHAR_COMMA = 0x2C;
  var CHAR_MINUS = 0x2D;
  var CHAR_COLON = 0x3A;
  var CHAR_GREATER_THAN = 0x3E;
  var CHAR_QUESTION = 0x3F;
  var CHAR_COMMERCIAL_AT = 0x40;
  var CHAR_LEFT_SQUARE_BRACKET = 0x5B;
  var CHAR_RIGHT_SQUARE_BRACKET = 0x5D;
  var CHAR_GRAVE_ACCENT = 0x60;
  var CHAR_LEFT_CURLY_BRACKET = 0x7B;
  var CHAR_VERTICAL_LINE = 0x7C;
  var CHAR_RIGHT_CURLY_BRACKET = 0x7D;
  var ESCAPE_SEQUENCES = {};
  ESCAPE_SEQUENCES[0x00] = '\\0';
  ESCAPE_SEQUENCES[0x07] = '\\a';
  ESCAPE_SEQUENCES[0x08] = '\\b';
  ESCAPE_SEQUENCES[0x09] = '\\t';
  ESCAPE_SEQUENCES[0x0A] = '\\n';
  ESCAPE_SEQUENCES[0x0B] = '\\v';
  ESCAPE_SEQUENCES[0x0C] = '\\f';
  ESCAPE_SEQUENCES[0x0D] = '\\r';
  ESCAPE_SEQUENCES[0x1B] = '\\e';
  ESCAPE_SEQUENCES[0x22] = '\\"';
  ESCAPE_SEQUENCES[0x5C] = '\\\\';
  ESCAPE_SEQUENCES[0x85] = '\\N';
  ESCAPE_SEQUENCES[0xA0] = '\\_';
  ESCAPE_SEQUENCES[0x2028] = '\\L';
  ESCAPE_SEQUENCES[0x2029] = '\\P';
  var DEPRECATED_BOOLEANS_SYNTAX = ['y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON', 'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'];
  function compileStyleMap(schema, map) {
    var result,
        keys,
        index,
        length,
        tag,
        style,
        type;
    if (map === null)
      return {};
    result = {};
    keys = Object.keys(map);
    for (index = 0, length = keys.length; index < length; index += 1) {
      tag = keys[index];
      style = String(map[tag]);
      if (tag.slice(0, 2) === '!!') {
        tag = 'tag:yaml.org,2002:' + tag.slice(2);
      }
      type = schema.compiledTypeMap[tag];
      if (type && _hasOwnProperty.call(type.styleAliases, style)) {
        style = type.styleAliases[style];
      }
      result[tag] = style;
    }
    return result;
  }
  function encodeHex(character) {
    var string,
        handle,
        length;
    string = character.toString(16).toUpperCase();
    if (character <= 0xFF) {
      handle = 'x';
      length = 2;
    } else if (character <= 0xFFFF) {
      handle = 'u';
      length = 4;
    } else if (character <= 0xFFFFFFFF) {
      handle = 'U';
      length = 8;
    } else {
      throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
    }
    return '\\' + handle + common.repeat('0', length - string.length) + string;
  }
  function State(options) {
    this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
    this.indent = Math.max(1, (options['indent'] || 2));
    this.skipInvalid = options['skipInvalid'] || false;
    this.flowLevel = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
    this.styleMap = compileStyleMap(this.schema, options['styles'] || null);
    this.sortKeys = options['sortKeys'] || false;
    this.lineWidth = options['lineWidth'] || 80;
    this.noRefs = options['noRefs'] || false;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = '';
    this.duplicates = [];
    this.usedDuplicates = null;
  }
  function indentString(string, spaces) {
    var ind = common.repeat(' ', spaces),
        position = 0,
        next = -1,
        result = '',
        line,
        length = string.length;
    while (position < length) {
      next = string.indexOf('\n', position);
      if (next === -1) {
        line = string.slice(position);
        position = length;
      } else {
        line = string.slice(position, next + 1);
        position = next + 1;
      }
      if (line.length && line !== '\n')
        result += ind;
      result += line;
    }
    return result;
  }
  function generateNextLine(state, level) {
    return '\n' + common.repeat(' ', state.indent * level);
  }
  function testImplicitResolving(state, str) {
    var index,
        length,
        type;
    for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
      type = state.implicitTypes[index];
      if (type.resolve(str)) {
        return true;
      }
    }
    return false;
  }
  function StringBuilder(source) {
    this.source = source;
    this.result = '';
    this.checkpoint = 0;
  }
  StringBuilder.prototype.takeUpTo = function(position) {
    var er;
    if (position < this.checkpoint) {
      er = new Error('position should be > checkpoint');
      er.position = position;
      er.checkpoint = this.checkpoint;
      throw er;
    }
    this.result += this.source.slice(this.checkpoint, position);
    this.checkpoint = position;
    return this;
  };
  StringBuilder.prototype.escapeChar = function() {
    var character,
        esc;
    character = this.source.charCodeAt(this.checkpoint);
    esc = ESCAPE_SEQUENCES[character] || encodeHex(character);
    this.result += esc;
    this.checkpoint += 1;
    return this;
  };
  StringBuilder.prototype.finish = function() {
    if (this.source.length > this.checkpoint) {
      this.takeUpTo(this.source.length);
    }
  };
  function writeScalar(state, object, level, iskey) {
    var simple,
        first,
        spaceWrap,
        folded,
        literal,
        single,
        double,
        sawLineFeed,
        linePosition,
        longestLine,
        indent,
        max,
        character,
        position,
        escapeSeq,
        hexEsc,
        previous,
        lineLength,
        modifier,
        trailingLineBreaks,
        result;
    if (object.length === 0) {
      state.dump = "''";
      return;
    }
    if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(object) !== -1) {
      state.dump = "'" + object + "'";
      return;
    }
    simple = true;
    first = object.length ? object.charCodeAt(0) : 0;
    spaceWrap = (CHAR_SPACE === first || CHAR_SPACE === object.charCodeAt(object.length - 1));
    if (CHAR_MINUS === first || CHAR_QUESTION === first || CHAR_COMMERCIAL_AT === first || CHAR_GRAVE_ACCENT === first) {
      simple = false;
    }
    if (spaceWrap || (state.flowLevel > -1 && state.flowLevel <= level)) {
      if (spaceWrap)
        simple = false;
      folded = false;
      literal = false;
    } else {
      folded = !iskey;
      literal = !iskey;
    }
    single = true;
    double = new StringBuilder(object);
    sawLineFeed = false;
    linePosition = 0;
    longestLine = 0;
    indent = state.indent * level;
    max = state.lineWidth;
    if (max === -1)
      max = 9007199254740991;
    if (indent < 40)
      max -= indent;
    else
      max = 40;
    for (position = 0; position < object.length; position++) {
      character = object.charCodeAt(position);
      if (simple) {
        if (!simpleChar(character)) {
          simple = false;
        } else {
          continue;
        }
      }
      if (single && character === CHAR_SINGLE_QUOTE) {
        single = false;
      }
      escapeSeq = ESCAPE_SEQUENCES[character];
      hexEsc = needsHexEscape(character);
      if (!escapeSeq && !hexEsc) {
        continue;
      }
      if (character !== CHAR_LINE_FEED && character !== CHAR_DOUBLE_QUOTE && character !== CHAR_SINGLE_QUOTE) {
        folded = false;
        literal = false;
      } else if (character === CHAR_LINE_FEED) {
        sawLineFeed = true;
        single = false;
        if (position > 0) {
          previous = object.charCodeAt(position - 1);
          if (previous === CHAR_SPACE) {
            literal = false;
            folded = false;
          }
        }
        if (folded) {
          lineLength = position - linePosition;
          linePosition = position;
          if (lineLength > longestLine)
            longestLine = lineLength;
        }
      }
      if (character !== CHAR_DOUBLE_QUOTE)
        single = false;
      double.takeUpTo(position);
      double.escapeChar();
    }
    if (simple && testImplicitResolving(state, object))
      simple = false;
    modifier = '';
    if (folded || literal) {
      trailingLineBreaks = 0;
      if (object.charCodeAt(object.length - 1) === CHAR_LINE_FEED) {
        trailingLineBreaks += 1;
        if (object.charCodeAt(object.length - 2) === CHAR_LINE_FEED) {
          trailingLineBreaks += 1;
        }
      }
      if (trailingLineBreaks === 0)
        modifier = '-';
      else if (trailingLineBreaks === 2)
        modifier = '+';
    }
    if (literal && longestLine < max || state.tag !== null) {
      folded = false;
    }
    if (!sawLineFeed)
      literal = false;
    if (simple) {
      state.dump = object;
    } else if (single) {
      state.dump = '\'' + object + '\'';
    } else if (folded) {
      result = fold(object, max);
      state.dump = '>' + modifier + '\n' + indentString(result, indent);
    } else if (literal) {
      if (!modifier)
        object = object.replace(/\n$/, '');
      state.dump = '|' + modifier + '\n' + indentString(object, indent);
    } else if (double) {
      double.finish();
      state.dump = '"' + double.result + '"';
    } else {
      throw new Error('Failed to dump scalar value');
    }
    return;
  }
  function fold(object, max) {
    var result = '',
        position = 0,
        length = object.length,
        trailing = /\n+$/.exec(object),
        newLine;
    if (trailing) {
      length = trailing.index + 1;
    }
    while (position < length) {
      newLine = object.indexOf('\n', position);
      if (newLine > length || newLine === -1) {
        if (result)
          result += '\n\n';
        result += foldLine(object.slice(position, length), max);
        position = length;
      } else {
        if (result)
          result += '\n\n';
        result += foldLine(object.slice(position, newLine), max);
        position = newLine + 1;
      }
    }
    if (trailing && trailing[0] !== '\n')
      result += trailing[0];
    return result;
  }
  function foldLine(line, max) {
    if (line === '')
      return line;
    var foldRe = /[^\s] [^\s]/g,
        result = '',
        prevMatch = 0,
        foldStart = 0,
        match = foldRe.exec(line),
        index,
        foldEnd,
        folded;
    while (match) {
      index = match.index;
      if (index - foldStart > max) {
        if (prevMatch !== foldStart)
          foldEnd = prevMatch;
        else
          foldEnd = index;
        if (result)
          result += '\n';
        folded = line.slice(foldStart, foldEnd);
        result += folded;
        foldStart = foldEnd + 1;
      }
      prevMatch = index + 1;
      match = foldRe.exec(line);
    }
    if (result)
      result += '\n';
    if (foldStart !== prevMatch && line.length - foldStart > max) {
      result += line.slice(foldStart, prevMatch) + '\n' + line.slice(prevMatch + 1);
    } else {
      result += line.slice(foldStart);
    }
    return result;
  }
  function simpleChar(character) {
    return CHAR_TAB !== character && CHAR_LINE_FEED !== character && CHAR_CARRIAGE_RETURN !== character && CHAR_COMMA !== character && CHAR_LEFT_SQUARE_BRACKET !== character && CHAR_RIGHT_SQUARE_BRACKET !== character && CHAR_LEFT_CURLY_BRACKET !== character && CHAR_RIGHT_CURLY_BRACKET !== character && CHAR_SHARP !== character && CHAR_AMPERSAND !== character && CHAR_ASTERISK !== character && CHAR_EXCLAMATION !== character && CHAR_VERTICAL_LINE !== character && CHAR_GREATER_THAN !== character && CHAR_SINGLE_QUOTE !== character && CHAR_DOUBLE_QUOTE !== character && CHAR_PERCENT !== character && CHAR_COLON !== character && !ESCAPE_SEQUENCES[character] && !needsHexEscape(character);
  }
  function needsHexEscape(character) {
    return !((0x00020 <= character && character <= 0x00007E) || (character === 0x00085) || (0x000A0 <= character && character <= 0x00D7FF) || (0x0E000 <= character && character <= 0x00FFFD) || (0x10000 <= character && character <= 0x10FFFF));
  }
  function writeFlowSequence(state, level, object) {
    var _result = '',
        _tag = state.tag,
        index,
        length;
    for (index = 0, length = object.length; index < length; index += 1) {
      if (writeNode(state, level, object[index], false, false)) {
        if (index !== 0)
          _result += ', ';
        _result += state.dump;
      }
    }
    state.tag = _tag;
    state.dump = '[' + _result + ']';
  }
  function writeBlockSequence(state, level, object, compact) {
    var _result = '',
        _tag = state.tag,
        index,
        length;
    for (index = 0, length = object.length; index < length; index += 1) {
      if (writeNode(state, level + 1, object[index], true, true)) {
        if (!compact || index !== 0) {
          _result += generateNextLine(state, level);
        }
        _result += '- ' + state.dump;
      }
    }
    state.tag = _tag;
    state.dump = _result || '[]';
  }
  function writeFlowMapping(state, level, object) {
    var _result = '',
        _tag = state.tag,
        objectKeyList = Object.keys(object),
        index,
        length,
        objectKey,
        objectValue,
        pairBuffer;
    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
      pairBuffer = '';
      if (index !== 0)
        pairBuffer += ', ';
      objectKey = objectKeyList[index];
      objectValue = object[objectKey];
      if (!writeNode(state, level, objectKey, false, false)) {
        continue;
      }
      if (state.dump.length > 1024)
        pairBuffer += '? ';
      pairBuffer += state.dump + ': ';
      if (!writeNode(state, level, objectValue, false, false)) {
        continue;
      }
      pairBuffer += state.dump;
      _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = '{' + _result + '}';
  }
  function writeBlockMapping(state, level, object, compact) {
    var _result = '',
        _tag = state.tag,
        objectKeyList = Object.keys(object),
        index,
        length,
        objectKey,
        objectValue,
        explicitPair,
        pairBuffer;
    if (state.sortKeys === true) {
      objectKeyList.sort();
    } else if (typeof state.sortKeys === 'function') {
      objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
      throw new YAMLException('sortKeys must be a boolean or a function');
    }
    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
      pairBuffer = '';
      if (!compact || index !== 0) {
        pairBuffer += generateNextLine(state, level);
      }
      objectKey = objectKeyList[index];
      objectValue = object[objectKey];
      if (!writeNode(state, level + 1, objectKey, true, true, true)) {
        continue;
      }
      explicitPair = (state.tag !== null && state.tag !== '?') || (state.dump && state.dump.length > 1024);
      if (explicitPair) {
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += '?';
        } else {
          pairBuffer += '? ';
        }
      }
      pairBuffer += state.dump;
      if (explicitPair) {
        pairBuffer += generateNextLine(state, level);
      }
      if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
        continue;
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += ':';
      } else {
        pairBuffer += ': ';
      }
      pairBuffer += state.dump;
      _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = _result || '{}';
  }
  function detectType(state, object, explicit) {
    var _result,
        typeList,
        index,
        length,
        type,
        style;
    typeList = explicit ? state.explicitTypes : state.implicitTypes;
    for (index = 0, length = typeList.length; index < length; index += 1) {
      type = typeList[index];
      if ((type.instanceOf || type.predicate) && (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) && (!type.predicate || type.predicate(object))) {
        state.tag = explicit ? type.tag : '?';
        if (type.represent) {
          style = state.styleMap[type.tag] || type.defaultStyle;
          if (_toString.call(type.represent) === '[object Function]') {
            _result = type.represent(object, style);
          } else if (_hasOwnProperty.call(type.represent, style)) {
            _result = type.represent[style](object, style);
          } else {
            throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
          }
          state.dump = _result;
        }
        return true;
      }
    }
    return false;
  }
  function writeNode(state, level, object, block, compact, iskey) {
    state.tag = null;
    state.dump = object;
    if (!detectType(state, object, false)) {
      detectType(state, object, true);
    }
    var type = _toString.call(state.dump);
    if (block) {
      block = (state.flowLevel < 0 || state.flowLevel > level);
    }
    var objectOrArray = type === '[object Object]' || type === '[object Array]',
        duplicateIndex,
        duplicate;
    if (objectOrArray) {
      duplicateIndex = state.duplicates.indexOf(object);
      duplicate = duplicateIndex !== -1;
    }
    if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
      compact = false;
    }
    if (duplicate && state.usedDuplicates[duplicateIndex]) {
      state.dump = '*ref_' + duplicateIndex;
    } else {
      if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
        state.usedDuplicates[duplicateIndex] = true;
      }
      if (type === '[object Object]') {
        if (block && (Object.keys(state.dump).length !== 0)) {
          writeBlockMapping(state, level, state.dump, compact);
          if (duplicate) {
            state.dump = '&ref_' + duplicateIndex + state.dump;
          }
        } else {
          writeFlowMapping(state, level, state.dump);
          if (duplicate) {
            state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
          }
        }
      } else if (type === '[object Array]') {
        if (block && (state.dump.length !== 0)) {
          writeBlockSequence(state, level, state.dump, compact);
          if (duplicate) {
            state.dump = '&ref_' + duplicateIndex + state.dump;
          }
        } else {
          writeFlowSequence(state, level, state.dump);
          if (duplicate) {
            state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
          }
        }
      } else if (type === '[object String]') {
        if (state.tag !== '?') {
          writeScalar(state, state.dump, level, iskey);
        }
      } else {
        if (state.skipInvalid)
          return false;
        throw new YAMLException('unacceptable kind of an object to dump ' + type);
      }
      if (state.tag !== null && state.tag !== '?') {
        state.dump = '!<' + state.tag + '> ' + state.dump;
      }
    }
    return true;
  }
  function getDuplicateReferences(object, state) {
    var objects = [],
        duplicatesIndexes = [],
        index,
        length;
    inspectNode(object, objects, duplicatesIndexes);
    for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
      state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
  }
  function inspectNode(object, objects, duplicatesIndexes) {
    var objectKeyList,
        index,
        length;
    if (object !== null && typeof object === 'object') {
      index = objects.indexOf(object);
      if (index !== -1) {
        if (duplicatesIndexes.indexOf(index) === -1) {
          duplicatesIndexes.push(index);
        }
      } else {
        objects.push(object);
        if (Array.isArray(object)) {
          for (index = 0, length = object.length; index < length; index += 1) {
            inspectNode(object[index], objects, duplicatesIndexes);
          }
        } else {
          objectKeyList = Object.keys(object);
          for (index = 0, length = objectKeyList.length; index < length; index += 1) {
            inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
          }
        }
      }
    }
  }
  function dump(input, options) {
    options = options || {};
    var state = new State(options);
    if (!state.noRefs)
      getDuplicateReferences(input, state);
    if (writeNode(state, 0, input, true, true))
      return state.dump + '\n';
    return '';
  }
  function safeDump(input, options) {
    return dump(input, common.extend({schema: DEFAULT_SAFE_SCHEMA}, options));
  }
  module.exports.dump = dump;
  module.exports.safeDump = safeDump;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8a", ["84", "86", "8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var common = $__require('84');
  var YAMLException = $__require('86');
  var Type = $__require('8b');
  function compileList(schema, name, result) {
    var exclude = [];
    schema.include.forEach(function(includedSchema) {
      result = compileList(includedSchema, name, result);
    });
    schema[name].forEach(function(currentType) {
      result.forEach(function(previousType, previousIndex) {
        if (previousType.tag === currentType.tag) {
          exclude.push(previousIndex);
        }
      });
      result.push(currentType);
    });
    return result.filter(function(type, index) {
      return exclude.indexOf(index) === -1;
    });
  }
  function compileMap() {
    var result = {},
        index,
        length;
    function collectType(type) {
      result[type.tag] = type;
    }
    for (index = 0, length = arguments.length; index < length; index += 1) {
      arguments[index].forEach(collectType);
    }
    return result;
  }
  function Schema(definition) {
    this.include = definition.include || [];
    this.implicit = definition.implicit || [];
    this.explicit = definition.explicit || [];
    this.implicit.forEach(function(type) {
      if (type.loadKind && type.loadKind !== 'scalar') {
        throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
      }
    });
    this.compiledImplicit = compileList(this, 'implicit', []);
    this.compiledExplicit = compileList(this, 'explicit', []);
    this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
  }
  Schema.DEFAULT = null;
  Schema.create = function createSchema() {
    var schemas,
        types;
    switch (arguments.length) {
      case 1:
        schemas = Schema.DEFAULT;
        types = arguments[0];
        break;
      case 2:
        schemas = arguments[0];
        types = arguments[1];
        break;
      default:
        throw new YAMLException('Wrong number of arguments for Schema.create function');
    }
    schemas = common.toArray(schemas);
    types = common.toArray(types);
    if (!schemas.every(function(schema) {
      return schema instanceof Schema;
    })) {
      throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
    }
    if (!types.every(function(type) {
      return type instanceof Type;
    })) {
      throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
    return new Schema({
      include: schemas,
      explicit: types
    });
  };
  module.exports = Schema;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8c", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  module.exports = new Type('tag:yaml.org,2002:str', {
    kind: 'scalar',
    construct: function(data) {
      return data !== null ? data : '';
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8d", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  module.exports = new Type('tag:yaml.org,2002:seq', {
    kind: 'sequence',
    construct: function(data) {
      return data !== null ? data : [];
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8e", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  module.exports = new Type('tag:yaml.org,2002:map', {
    kind: 'mapping',
    construct: function(data) {
      return data !== null ? data : {};
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8f", ["8a", "8c", "8d", "8e", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Schema = $__require('8a');
  module.exports = new Schema({explicit: [$__require('8c'), $__require('8d'), $__require('8e')]});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("90", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  function resolveYamlNull(data) {
    if (data === null)
      return true;
    var max = data.length;
    return (max === 1 && data === '~') || (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
  }
  function constructYamlNull() {
    return null;
  }
  function isNull(object) {
    return object === null;
  }
  module.exports = new Type('tag:yaml.org,2002:null', {
    kind: 'scalar',
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
      canonical: function() {
        return '~';
      },
      lowercase: function() {
        return 'null';
      },
      uppercase: function() {
        return 'NULL';
      },
      camelcase: function() {
        return 'Null';
      }
    },
    defaultStyle: 'lowercase'
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("91", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  function resolveYamlBoolean(data) {
    if (data === null)
      return false;
    var max = data.length;
    return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) || (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
  }
  function constructYamlBoolean(data) {
    return data === 'true' || data === 'True' || data === 'TRUE';
  }
  function isBoolean(object) {
    return Object.prototype.toString.call(object) === '[object Boolean]';
  }
  module.exports = new Type('tag:yaml.org,2002:bool', {
    kind: 'scalar',
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
      lowercase: function(object) {
        return object ? 'true' : 'false';
      },
      uppercase: function(object) {
        return object ? 'TRUE' : 'FALSE';
      },
      camelcase: function(object) {
        return object ? 'True' : 'False';
      }
    },
    defaultStyle: 'lowercase'
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("92", ["84", "8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var common = $__require('84');
  var Type = $__require('8b');
  function isHexCode(c) {
    return ((0x30 <= c) && (c <= 0x39)) || ((0x41 <= c) && (c <= 0x46)) || ((0x61 <= c) && (c <= 0x66));
  }
  function isOctCode(c) {
    return ((0x30 <= c) && (c <= 0x37));
  }
  function isDecCode(c) {
    return ((0x30 <= c) && (c <= 0x39));
  }
  function resolveYamlInteger(data) {
    if (data === null)
      return false;
    var max = data.length,
        index = 0,
        hasDigits = false,
        ch;
    if (!max)
      return false;
    ch = data[index];
    if (ch === '-' || ch === '+') {
      ch = data[++index];
    }
    if (ch === '0') {
      if (index + 1 === max)
        return true;
      ch = data[++index];
      if (ch === 'b') {
        index++;
        for (; index < max; index++) {
          ch = data[index];
          if (ch === '_')
            continue;
          if (ch !== '0' && ch !== '1')
            return false;
          hasDigits = true;
        }
        return hasDigits;
      }
      if (ch === 'x') {
        index++;
        for (; index < max; index++) {
          ch = data[index];
          if (ch === '_')
            continue;
          if (!isHexCode(data.charCodeAt(index)))
            return false;
          hasDigits = true;
        }
        return hasDigits;
      }
      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_')
          continue;
        if (!isOctCode(data.charCodeAt(index)))
          return false;
        hasDigits = true;
      }
      return hasDigits;
    }
    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_')
        continue;
      if (ch === ':')
        break;
      if (!isDecCode(data.charCodeAt(index))) {
        return false;
      }
      hasDigits = true;
    }
    if (!hasDigits)
      return false;
    if (ch !== ':')
      return true;
    return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
  }
  function constructYamlInteger(data) {
    var value = data,
        sign = 1,
        ch,
        base,
        digits = [];
    if (value.indexOf('_') !== -1) {
      value = value.replace(/_/g, '');
    }
    ch = value[0];
    if (ch === '-' || ch === '+') {
      if (ch === '-')
        sign = -1;
      value = value.slice(1);
      ch = value[0];
    }
    if (value === '0')
      return 0;
    if (ch === '0') {
      if (value[1] === 'b')
        return sign * parseInt(value.slice(2), 2);
      if (value[1] === 'x')
        return sign * parseInt(value, 16);
      return sign * parseInt(value, 8);
    }
    if (value.indexOf(':') !== -1) {
      value.split(':').forEach(function(v) {
        digits.unshift(parseInt(v, 10));
      });
      value = 0;
      base = 1;
      digits.forEach(function(d) {
        value += (d * base);
        base *= 60;
      });
      return sign * value;
    }
    return sign * parseInt(value, 10);
  }
  function isInteger(object) {
    return (Object.prototype.toString.call(object)) === '[object Number]' && (object % 1 === 0 && !common.isNegativeZero(object));
  }
  module.exports = new Type('tag:yaml.org,2002:int', {
    kind: 'scalar',
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
      binary: function(object) {
        return '0b' + object.toString(2);
      },
      octal: function(object) {
        return '0' + object.toString(8);
      },
      decimal: function(object) {
        return object.toString(10);
      },
      hexadecimal: function(object) {
        return '0x' + object.toString(16).toUpperCase();
      }
    },
    defaultStyle: 'decimal',
    styleAliases: {
      binary: [2, 'bin'],
      octal: [8, 'oct'],
      decimal: [10, 'dec'],
      hexadecimal: [16, 'hex']
    }
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("84", ["5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isNothing(subject) {
    return (typeof subject === 'undefined') || (subject === null);
  }
  function isObject(subject) {
    return (typeof subject === 'object') && (subject !== null);
  }
  function toArray(sequence) {
    if (Array.isArray(sequence))
      return sequence;
    else if (isNothing(sequence))
      return [];
    return [sequence];
  }
  function extend(target, source) {
    var index,
        length,
        key,
        sourceKeys;
    if (source) {
      sourceKeys = Object.keys(source);
      for (index = 0, length = sourceKeys.length; index < length; index += 1) {
        key = sourceKeys[index];
        target[key] = source[key];
      }
    }
    return target;
  }
  function repeat(string, count) {
    var result = '',
        cycle;
    for (cycle = 0; cycle < count; cycle += 1) {
      result += string;
    }
    return result;
  }
  function isNegativeZero(number) {
    return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
  }
  module.exports.isNothing = isNothing;
  module.exports.isObject = isObject;
  module.exports.toArray = toArray;
  module.exports.repeat = repeat;
  module.exports.isNegativeZero = isNegativeZero;
  module.exports.extend = extend;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("93", ["84", "8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var common = $__require('84');
  var Type = $__require('8b');
  var YAML_FLOAT_PATTERN = new RegExp('^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?' + '|\\.[0-9_]+(?:[eE][-+][0-9]+)?' + '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' + '|[-+]?\\.(?:inf|Inf|INF)' + '|\\.(?:nan|NaN|NAN))$');
  function resolveYamlFloat(data) {
    if (data === null)
      return false;
    if (!YAML_FLOAT_PATTERN.test(data))
      return false;
    return true;
  }
  function constructYamlFloat(data) {
    var value,
        sign,
        base,
        digits;
    value = data.replace(/_/g, '').toLowerCase();
    sign = value[0] === '-' ? -1 : 1;
    digits = [];
    if ('+-'.indexOf(value[0]) >= 0) {
      value = value.slice(1);
    }
    if (value === '.inf') {
      return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    } else if (value === '.nan') {
      return NaN;
    } else if (value.indexOf(':') >= 0) {
      value.split(':').forEach(function(v) {
        digits.unshift(parseFloat(v, 10));
      });
      value = 0.0;
      base = 1;
      digits.forEach(function(d) {
        value += d * base;
        base *= 60;
      });
      return sign * value;
    }
    return sign * parseFloat(value, 10);
  }
  var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
  function representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) {
      switch (style) {
        case 'lowercase':
          return '.nan';
        case 'uppercase':
          return '.NAN';
        case 'camelcase':
          return '.NaN';
      }
    } else if (Number.POSITIVE_INFINITY === object) {
      switch (style) {
        case 'lowercase':
          return '.inf';
        case 'uppercase':
          return '.INF';
        case 'camelcase':
          return '.Inf';
      }
    } else if (Number.NEGATIVE_INFINITY === object) {
      switch (style) {
        case 'lowercase':
          return '-.inf';
        case 'uppercase':
          return '-.INF';
        case 'camelcase':
          return '-.Inf';
      }
    } else if (common.isNegativeZero(object)) {
      return '-0.0';
    }
    res = object.toString(10);
    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
  }
  function isFloat(object) {
    return (Object.prototype.toString.call(object) === '[object Number]') && (object % 1 !== 0 || common.isNegativeZero(object));
  }
  module.exports = new Type('tag:yaml.org,2002:float', {
    kind: 'scalar',
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: 'lowercase'
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("94", ["8a", "8f", "90", "91", "92", "93", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Schema = $__require('8a');
  module.exports = new Schema({
    include: [$__require('8f')],
    implicit: [$__require('90'), $__require('91'), $__require('92'), $__require('93')]
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("95", ["8a", "94", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Schema = $__require('8a');
  module.exports = new Schema({include: [$__require('94')]});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("96", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  var YAML_TIMESTAMP_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + '-([0-9][0-9]?)' + '-([0-9][0-9]?)' + '(?:(?:[Tt]|[ \\t]+)' + '([0-9][0-9]?)' + ':([0-9][0-9])' + ':([0-9][0-9])' + '(?:\\.([0-9]*))?' + '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + '(?::([0-9][0-9]))?))?)?$');
  function resolveYamlTimestamp(data) {
    if (data === null)
      return false;
    if (YAML_TIMESTAMP_REGEXP.exec(data) === null)
      return false;
    return true;
  }
  function constructYamlTimestamp(data) {
    var match,
        year,
        month,
        day,
        hour,
        minute,
        second,
        fraction = 0,
        delta = null,
        tz_hour,
        tz_minute,
        date;
    match = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null)
      throw new Error('Date resolve error');
    year = +(match[1]);
    month = +(match[2]) - 1;
    day = +(match[3]);
    if (!match[4]) {
      return new Date(Date.UTC(year, month, day));
    }
    hour = +(match[4]);
    minute = +(match[5]);
    second = +(match[6]);
    if (match[7]) {
      fraction = match[7].slice(0, 3);
      while (fraction.length < 3) {
        fraction += '0';
      }
      fraction = +fraction;
    }
    if (match[9]) {
      tz_hour = +(match[10]);
      tz_minute = +(match[11] || 0);
      delta = (tz_hour * 60 + tz_minute) * 60000;
      if (match[9] === '-')
        delta = -delta;
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta)
      date.setTime(date.getTime() - delta);
    return date;
  }
  function representYamlTimestamp(object) {
    return object.toISOString();
  }
  module.exports = new Type('tag:yaml.org,2002:timestamp', {
    kind: 'scalar',
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("97", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  function resolveYamlMerge(data) {
    return data === '<<' || data === null;
  }
  module.exports = new Type('tag:yaml.org,2002:merge', {
    kind: 'scalar',
    resolve: resolveYamlMerge
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("98", ["@node/buffer", "8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var NodeBuffer = $__require('@node/buffer').Buffer;
  var Type = $__require('8b');
  var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';
  function resolveYamlBinary(data) {
    if (data === null)
      return false;
    var code,
        idx,
        bitlen = 0,
        max = data.length,
        map = BASE64_MAP;
    for (idx = 0; idx < max; idx++) {
      code = map.indexOf(data.charAt(idx));
      if (code > 64)
        continue;
      if (code < 0)
        return false;
      bitlen += 6;
    }
    return (bitlen % 8) === 0;
  }
  function constructYamlBinary(data) {
    var idx,
        tailbits,
        input = data.replace(/[\r\n=]/g, ''),
        max = input.length,
        map = BASE64_MAP,
        bits = 0,
        result = [];
    for (idx = 0; idx < max; idx++) {
      if ((idx % 4 === 0) && idx) {
        result.push((bits >> 16) & 0xFF);
        result.push((bits >> 8) & 0xFF);
        result.push(bits & 0xFF);
      }
      bits = (bits << 6) | map.indexOf(input.charAt(idx));
    }
    tailbits = (max % 4) * 6;
    if (tailbits === 0) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    } else if (tailbits === 18) {
      result.push((bits >> 10) & 0xFF);
      result.push((bits >> 2) & 0xFF);
    } else if (tailbits === 12) {
      result.push((bits >> 4) & 0xFF);
    }
    if (NodeBuffer)
      return new NodeBuffer(result);
    return result;
  }
  function representYamlBinary(object) {
    var result = '',
        bits = 0,
        idx,
        tail,
        max = object.length,
        map = BASE64_MAP;
    for (idx = 0; idx < max; idx++) {
      if ((idx % 3 === 0) && idx) {
        result += map[(bits >> 18) & 0x3F];
        result += map[(bits >> 12) & 0x3F];
        result += map[(bits >> 6) & 0x3F];
        result += map[bits & 0x3F];
      }
      bits = (bits << 8) + object[idx];
    }
    tail = max % 3;
    if (tail === 0) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    } else if (tail === 2) {
      result += map[(bits >> 10) & 0x3F];
      result += map[(bits >> 4) & 0x3F];
      result += map[(bits << 2) & 0x3F];
      result += map[64];
    } else if (tail === 1) {
      result += map[(bits >> 2) & 0x3F];
      result += map[(bits << 4) & 0x3F];
      result += map[64];
      result += map[64];
    }
    return result;
  }
  function isBinary(object) {
    return NodeBuffer && NodeBuffer.isBuffer(object);
  }
  module.exports = new Type('tag:yaml.org,2002:binary', {
    kind: 'scalar',
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("99", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var _toString = Object.prototype.toString;
  function resolveYamlOmap(data) {
    if (data === null)
      return true;
    var objectKeys = [],
        index,
        length,
        pair,
        pairKey,
        pairHasKey,
        object = data;
    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      pairHasKey = false;
      if (_toString.call(pair) !== '[object Object]')
        return false;
      for (pairKey in pair) {
        if (_hasOwnProperty.call(pair, pairKey)) {
          if (!pairHasKey)
            pairHasKey = true;
          else
            return false;
        }
      }
      if (!pairHasKey)
        return false;
      if (objectKeys.indexOf(pairKey) === -1)
        objectKeys.push(pairKey);
      else
        return false;
    }
    return true;
  }
  function constructYamlOmap(data) {
    return data !== null ? data : [];
  }
  module.exports = new Type('tag:yaml.org,2002:omap', {
    kind: 'sequence',
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9a", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  var _toString = Object.prototype.toString;
  function resolveYamlPairs(data) {
    if (data === null)
      return true;
    var index,
        length,
        pair,
        keys,
        result,
        object = data;
    result = new Array(object.length);
    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      if (_toString.call(pair) !== '[object Object]')
        return false;
      keys = Object.keys(pair);
      if (keys.length !== 1)
        return false;
      result[index] = [keys[0], pair[keys[0]]];
    }
    return true;
  }
  function constructYamlPairs(data) {
    if (data === null)
      return [];
    var index,
        length,
        pair,
        keys,
        result,
        object = data;
    result = new Array(object.length);
    for (index = 0, length = object.length; index < length; index += 1) {
      pair = object[index];
      keys = Object.keys(pair);
      result[index] = [keys[0], pair[keys[0]]];
    }
    return result;
  }
  module.exports = new Type('tag:yaml.org,2002:pairs', {
    kind: 'sequence',
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9b", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  function resolveYamlSet(data) {
    if (data === null)
      return true;
    var key,
        object = data;
    for (key in object) {
      if (_hasOwnProperty.call(object, key)) {
        if (object[key] !== null)
          return false;
      }
    }
    return true;
  }
  function constructYamlSet(data) {
    return data !== null ? data : {};
  }
  module.exports = new Type('tag:yaml.org,2002:set', {
    kind: 'mapping',
    resolve: resolveYamlSet,
    construct: constructYamlSet
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("87", ["8a", "95", "96", "97", "98", "99", "9a", "9b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Schema = $__require('8a');
  module.exports = new Schema({
    include: [$__require('95')],
    implicit: [$__require('96'), $__require('97')],
    explicit: [$__require('98'), $__require('99'), $__require('9a'), $__require('9b')]
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9c", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  function resolveJavascriptUndefined() {
    return true;
  }
  function constructJavascriptUndefined() {
    return undefined;
  }
  function representJavascriptUndefined() {
    return '';
  }
  function isUndefined(object) {
    return typeof object === 'undefined';
  }
  module.exports = new Type('tag:yaml.org,2002:js/undefined', {
    kind: 'scalar',
    resolve: resolveJavascriptUndefined,
    construct: constructJavascriptUndefined,
    predicate: isUndefined,
    represent: representJavascriptUndefined
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9d", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Type = $__require('8b');
  function resolveJavascriptRegExp(data) {
    if (data === null)
      return false;
    if (data.length === 0)
      return false;
    var regexp = data,
        tail = /\/([gim]*)$/.exec(data),
        modifiers = '';
    if (regexp[0] === '/') {
      if (tail)
        modifiers = tail[1];
      if (modifiers.length > 3)
        return false;
      if (regexp[regexp.length - modifiers.length - 1] !== '/')
        return false;
    }
    return true;
  }
  function constructJavascriptRegExp(data) {
    var regexp = data,
        tail = /\/([gim]*)$/.exec(data),
        modifiers = '';
    if (regexp[0] === '/') {
      if (tail)
        modifiers = tail[1];
      regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
    }
    return new RegExp(regexp, modifiers);
  }
  function representJavascriptRegExp(object) {
    var result = '/' + object.source + '/';
    if (object.global)
      result += 'g';
    if (object.multiline)
      result += 'm';
    if (object.ignoreCase)
      result += 'i';
    return result;
  }
  function isRegExp(object) {
    return Object.prototype.toString.call(object) === '[object RegExp]';
  }
  module.exports = new Type('tag:yaml.org,2002:js/regexp', {
    kind: 'scalar',
    resolve: resolveJavascriptRegExp,
    construct: constructJavascriptRegExp,
    predicate: isRegExp,
    represent: representJavascriptRegExp
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8b", ["86", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var YAMLException = $__require('86');
  var TYPE_CONSTRUCTOR_OPTIONS = ['kind', 'resolve', 'construct', 'instanceOf', 'predicate', 'represent', 'defaultStyle', 'styleAliases'];
  var YAML_NODE_KINDS = ['scalar', 'sequence', 'mapping'];
  function compileStyleAliases(map) {
    var result = {};
    if (map !== null) {
      Object.keys(map).forEach(function(style) {
        map[style].forEach(function(alias) {
          result[String(alias)] = style;
        });
      });
    }
    return result;
  }
  function Type(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function(name) {
      if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
        throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
      }
    });
    this.tag = tag;
    this.kind = options['kind'] || null;
    this.resolve = options['resolve'] || function() {
      return true;
    };
    this.construct = options['construct'] || function(data) {
      return data;
    };
    this.instanceOf = options['instanceOf'] || null;
    this.predicate = options['predicate'] || null;
    this.represent = options['represent'] || null;
    this.defaultStyle = options['defaultStyle'] || null;
    this.styleAliases = compileStyleAliases(options['styleAliases'] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
      throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
  }
  module.exports = Type;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9e", ["8b", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var esprima;
  try {
    var _require = $__require;
    esprima = _require('esprima');
  } catch (_) {
    if (typeof window !== 'undefined')
      esprima = window.esprima;
  }
  var Type = $__require('8b');
  function resolveJavascriptFunction(data) {
    if (data === null)
      return false;
    try {
      var source = '(' + data + ')',
          ast = esprima.parse(source, {range: true});
      if (ast.type !== 'Program' || ast.body.length !== 1 || ast.body[0].type !== 'ExpressionStatement' || ast.body[0].expression.type !== 'FunctionExpression') {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  function constructJavascriptFunction(data) {
    var source = '(' + data + ')',
        ast = esprima.parse(source, {range: true}),
        params = [],
        body;
    if (ast.type !== 'Program' || ast.body.length !== 1 || ast.body[0].type !== 'ExpressionStatement' || ast.body[0].expression.type !== 'FunctionExpression') {
      throw new Error('Failed to resolve function');
    }
    ast.body[0].expression.params.forEach(function(param) {
      params.push(param.name);
    });
    body = ast.body[0].expression.body.range;
    return new Function(params, source.slice(body[0] + 1, body[1] - 1));
  }
  function representJavascriptFunction(object) {
    return object.toString();
  }
  function isFunction(object) {
    return Object.prototype.toString.call(object) === '[object Function]';
  }
  module.exports = new Type('tag:yaml.org,2002:js/function', {
    kind: 'scalar',
    resolve: resolveJavascriptFunction,
    construct: constructJavascriptFunction,
    predicate: isFunction,
    represent: representJavascriptFunction
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("88", ["8a", "87", "9c", "9d", "9e", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Schema = $__require('8a');
  module.exports = Schema.DEFAULT = new Schema({
    include: [$__require('87')],
    explicit: [$__require('9c'), $__require('9d'), $__require('9e')]
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("86", ["5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  function YAMLException(reason, mark) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error()).stack || '';
    }
    this.name = 'YAMLException';
    this.reason = reason;
    this.mark = mark;
    this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');
  }
  YAMLException.prototype = Object.create(Error.prototype);
  YAMLException.prototype.constructor = YAMLException;
  YAMLException.prototype.toString = function toString(compact) {
    var result = this.name + ': ';
    result += this.reason || '(unknown reason)';
    if (!compact && this.mark) {
      result += ' ' + this.mark.toString();
    }
    return result;
  };
  module.exports = YAMLException;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9f", ["85", "89", "8b", "8a", "8f", "94", "95", "87", "88", "86", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var loader = $__require('85');
  var dumper = $__require('89');
  function deprecated(name) {
    return function() {
      throw new Error('Function ' + name + ' is deprecated and cannot be used.');
    };
  }
  module.exports.Type = $__require('8b');
  module.exports.Schema = $__require('8a');
  module.exports.FAILSAFE_SCHEMA = $__require('8f');
  module.exports.JSON_SCHEMA = $__require('94');
  module.exports.CORE_SCHEMA = $__require('95');
  module.exports.DEFAULT_SAFE_SCHEMA = $__require('87');
  module.exports.DEFAULT_FULL_SCHEMA = $__require('88');
  module.exports.load = loader.load;
  module.exports.loadAll = loader.loadAll;
  module.exports.safeLoad = loader.safeLoad;
  module.exports.safeLoadAll = loader.safeLoadAll;
  module.exports.dump = dumper.dump;
  module.exports.safeDump = dumper.safeDump;
  module.exports.YAMLException = $__require('86');
  module.exports.MINIMAL_SCHEMA = $__require('8f');
  module.exports.SAFE_SCHEMA = $__require('87');
  module.exports.DEFAULT_SCHEMA = $__require('88');
  module.exports.scan = deprecated('scan');
  module.exports.parse = deprecated('parse');
  module.exports.compose = deprecated('compose');
  module.exports.addConstructor = deprecated('addConstructor');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("49", ["9f", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var yaml = $__require('9f');
  module.exports = yaml;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9", ["@node/util", "@node/events", "78", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var util = $__require('@node/util'),
      EventEmitter = $__require('@node/events').EventEmitter,
      Factory = $__require('78'),
      factory = new Factory('report', __dirname, false);
  function Report() {
    EventEmitter.call(this);
  }
  util.inherits(Report, EventEmitter);
  factory.bindClassMethods(Report);
  var proto = {
    synopsis: function() {
      throw new Error('synopsis must be overridden');
    },
    getDefaultConfig: function() {
      return null;
    },
    writeReport: function() {
      throw new Error('writeReport: must be overridden');
    }
  };
  Object.keys(proto).forEach(function(k) {
    Report.prototype[k] = proto[k];
  });
  module.exports = Report;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a0", ["5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(flag, argv) {
    argv = argv || process.argv;
    var terminatorPos = argv.indexOf('--');
    var prefix = /^--/.test(flag) ? '' : '--';
    var pos = argv.indexOf(prefix + flag);
    return pos !== -1 && (terminatorPos !== -1 ? pos < terminatorPos : true);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a1", ["a0", "5"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasFlag = $__require('a0');
  var support = function(level) {
    if (level === 0) {
      return false;
    }
    return {
      level: level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  };
  var supportLevel = (function() {
    if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
      return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
      return 3;
    }
    if (hasFlag('color=256')) {
      return 2;
    }
    if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
      return 1;
    }
    if (process.stdout && !process.stdout.isTTY) {
      return 0;
    }
    if (process.platform === 'win32') {
      return 1;
    }
    if ('COLORTERM' in process.env) {
      return 1;
    }
    if (process.env.TERM === 'dumb') {
      return 0;
    }
    if (/^xterm-256(?:color)?/.test(process.env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
      return 1;
    }
    return 0;
  })();
  if (supportLevel === 0 && 'FORCE_COLOR' in process.env) {
    supportLevel = 1;
  }
  module.exports = process && support(supportLevel);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("30", ["9", "a1", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Report = $__require('9');
  var supportsColor = $__require('a1');
  module.exports = {
    watermarks: function() {
      return {
        statements: [50, 80],
        lines: [50, 80],
        functions: [50, 80],
        branches: [50, 80]
      };
    },
    classFor: function(type, metrics, watermarks) {
      var mark = watermarks[type],
          value = metrics[type].pct;
      return value >= mark[1] ? 'high' : value >= mark[0] ? 'medium' : 'low';
    },
    colorize: function(str, clazz) {
      if (supportsColor) {
        switch (clazz) {
          case 'low':
            str = '\x1B[91m' + str + '\x1B[0m';
            break;
          case 'medium':
            str = '\x1B[93m' + str + '\x1B[0m';
            break;
          case 'high':
            str = '\x1B[92m' + str + '\x1B[0m';
            break;
        }
      }
      return str;
    },
    defaultReportConfig: function() {
      var cfg = {};
      Report.getReportList().forEach(function(type) {
        var rpt = Report.create(type),
            c = rpt.getDefaultConfig();
        if (c) {
          cfg[type] = c;
        }
      });
      return cfg;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3d", ["@node/path", "@node/fs", "49", "30", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('@node/path'),
      fs = $__require('@node/fs'),
      existsSync = fs.existsSync || path.existsSync,
      CAMEL_PATTERN = /([a-z])([A-Z])/g,
      YML_PATTERN = /\.ya?ml$/,
      yaml = $__require('49'),
      defaults = $__require('30');
  function defaultConfig(includeBackCompatAttrs) {
    var ret = {
      verbose: false,
      instrumentation: {
        root: '.',
        extensions: ['.js'],
        'default-excludes': true,
        excludes: [],
        'embed-source': false,
        variable: '__coverage__',
        compact: true,
        'preserve-comments': false,
        'complete-copy': false,
        'save-baseline': false,
        'baseline-file': './coverage/coverage-baseline.json',
        'include-all-sources': false,
        'include-pid': false,
        'es-modules': false
      },
      reporting: {
        print: 'summary',
        reports: ['lcov'],
        dir: './coverage'
      },
      hooks: {
        'hook-run-in-context': false,
        'post-require-hook': null,
        'handle-sigint': false
      },
      check: {
        global: {
          statements: 0,
          lines: 0,
          branches: 0,
          functions: 0,
          excludes: []
        },
        each: {
          statements: 0,
          lines: 0,
          branches: 0,
          functions: 0,
          excludes: []
        }
      }
    };
    ret.reporting.watermarks = defaults.watermarks();
    ret.reporting['report-config'] = defaults.defaultReportConfig();
    if (includeBackCompatAttrs) {
      ret.instrumentation['preload-sources'] = false;
    }
    return ret;
  }
  function dasherize(word) {
    return word.replace(CAMEL_PATTERN, function(match, lch, uch) {
      return lch + '-' + uch.toLowerCase();
    });
  }
  function isScalar(v) {
    if (v === null) {
      return true;
    }
    return v !== undefined && !Array.isArray(v) && typeof v !== 'object';
  }
  function isObject(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
  }
  function mergeObjects(explicit, template) {
    var ret = {};
    Object.keys(template).forEach(function(k) {
      var v1 = template[k],
          v2 = explicit[k];
      if (Array.isArray(v1)) {
        ret[k] = Array.isArray(v2) && v2.length > 0 ? v2 : v1;
      } else if (isObject(v1)) {
        v2 = isObject(v2) ? v2 : {};
        ret[k] = mergeObjects(v2, v1);
      } else {
        ret[k] = isScalar(v2) ? v2 : v1;
      }
    });
    return ret;
  }
  function mergeDefaults(explicit, implicit) {
    return mergeObjects(explicit || {}, implicit);
  }
  function addMethods() {
    var args = Array.prototype.slice.call(arguments),
        cons = args.shift();
    args.forEach(function(arg) {
      var method = arg,
          property = dasherize(arg);
      cons.prototype[method] = function() {
        return this.config[property];
      };
    });
  }
  function InstrumentOptions(config) {
    if (config['preload-sources']) {
      console.error('The preload-sources option is deprecated, please use include-all-sources instead.');
      config['include-all-sources'] = config['preload-sources'];
    }
    this.config = config;
  }
  addMethods(InstrumentOptions, 'extensions', 'defaultExcludes', 'completeCopy', 'embedSource', 'variable', 'compact', 'preserveComments', 'saveBaseline', 'baselineFile', 'esModules', 'includeAllSources', 'includePid');
  InstrumentOptions.prototype.root = function() {
    return path.resolve(this.config.root);
  };
  InstrumentOptions.prototype.excludes = function(excludeTests) {
    var defs;
    if (this.defaultExcludes()) {
      defs = ['**/node_modules/**'];
      if (excludeTests) {
        defs = defs.concat(['**/test/**', '**/tests/**']);
      }
      return defs.concat(this.config.excludes);
    }
    return this.config.excludes;
  };
  function ReportingOptions(config) {
    this.config = config;
  }
  addMethods(ReportingOptions, 'print', 'reports', 'dir', 'reportConfig');
  function isInvalidMark(v, key) {
    var prefix = 'Watermark for [' + key + '] :';
    if (v.length !== 2) {
      return prefix + 'must be an array of length 2';
    }
    v[0] = Number(v[0]);
    v[1] = Number(v[1]);
    if (isNaN(v[0]) || isNaN(v[1])) {
      return prefix + 'must have valid numbers';
    }
    if (v[0] < 0 || v[1] < 0) {
      return prefix + 'must be positive numbers';
    }
    if (v[1] > 100) {
      return prefix + 'cannot exceed 100';
    }
    if (v[1] <= v[0]) {
      return prefix + 'low must be less than high';
    }
    return null;
  }
  ReportingOptions.prototype.watermarks = function() {
    var v = this.config.watermarks,
        defs = defaults.watermarks(),
        ret = {};
    Object.keys(defs).forEach(function(k) {
      var mark = v[k],
          message = isInvalidMark(mark, k);
      if (message) {
        console.error(message);
        ret[k] = defs[k];
      } else {
        ret[k] = mark;
      }
    });
    return ret;
  };
  function HookOptions(config) {
    this.config = config;
  }
  addMethods(HookOptions, 'hookRunInContext', 'postRequireHook', 'handleSigint');
  function Configuration(obj, overrides) {
    var config = mergeDefaults(obj, defaultConfig(true));
    if (isObject(overrides)) {
      config = mergeDefaults(overrides, config);
    }
    if (config.verbose) {
      console.error('Using configuration');
      console.error('-------------------');
      console.error(yaml.safeDump(config, {
        indent: 4,
        flowLevel: 3
      }));
      console.error('-------------------\n');
    }
    this.verbose = config.verbose;
    this.instrumentation = new InstrumentOptions(config.instrumentation);
    this.reporting = new ReportingOptions(config.reporting);
    this.hooks = new HookOptions(config.hooks);
    this.check = config.check;
  }
  function loadFile(file, overrides) {
    var defaultConfigFile = path.resolve('.istanbul.yml'),
        configObject;
    if (file) {
      if (!existsSync(file)) {
        throw new Error('Invalid configuration file specified:' + file);
      }
    } else {
      if (existsSync(defaultConfigFile)) {
        file = defaultConfigFile;
      }
    }
    if (file) {
      if (overrides && overrides.verbose === true) {
        console.error('Loading config: ' + file);
      }
      configObject = file.match(YML_PATTERN) ? yaml.safeLoad(fs.readFileSync(file, 'utf8'), {filename: file}) : $__require(path.resolve(file));
    }
    return new Configuration(configObject, overrides);
  }
  function loadObject(obj, overrides) {
    return new Configuration(obj, overrides);
  }
  module.exports = {
    loadFile: loadFile,
    loadObject: loadObject,
    defaultConfig: defaultConfig
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("40", ["7b", "@node/path", "@node/fs", "3e", "55", "7", "4b", "3b", "44", "39", "3a", "45", "46", "82", "3d", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var Module = $__require('7b'),
      path = $__require('@node/path'),
      fs = $__require('@node/fs'),
      nopt = $__require('3e'),
      which = $__require('55'),
      mkdirp = $__require('7'),
      existsSync = fs.existsSync || path.existsSync,
      inputError = $__require('4b'),
      matcherFor = $__require('3b').matcherFor,
      Instrumenter = $__require('44'),
      Collector = $__require('39'),
      formatOption = $__require('3a').formatOption,
      hook = $__require('45'),
      Reporter = $__require('46'),
      resolve = $__require('82'),
      configuration = $__require('3d');
  function usage(arg0, command) {
    console.error('\nUsage: ' + arg0 + ' ' + command + ' [<options>] <executable-js-file-or-command> [-- <arguments-to-jsfile>]\n\nOptions are:\n\n' + [formatOption('--config <path-to-config>', 'the configuration file to use, defaults to .istanbul.yml'), formatOption('--root <path> ', 'the root path to look for files to instrument, defaults to .'), formatOption('-x <exclude-pattern> [-x <exclude-pattern>]', 'one or more fileset patterns e.g. "**/vendor/**"'), formatOption('-i <include-pattern> [-i <include-pattern>]', 'one or more fileset patterns e.g. "**/*.js"'), formatOption('--[no-]default-excludes', 'apply default excludes [ **/node_modules/**, **/test/**, **/tests/** ], defaults to true'), formatOption('--hook-run-in-context', 'hook vm.runInThisContext in addition to require (supports RequireJS), defaults to false'), formatOption('--post-require-hook <file> | <module>', 'JS module that exports a function for post-require processing'), formatOption('--report <format> [--report <format>] ', 'report format, defaults to lcov (= lcov.info + HTML)'), formatOption('--dir <report-dir>', 'report directory, defaults to ./coverage'), formatOption('--print <type>', 'type of report to print to console, one of summary (default), detail, both or none'), formatOption('--verbose, -v', 'verbose mode'), formatOption('--[no-]preserve-comments', 'remove / preserve comments in the output, defaults to false'), formatOption('--include-all-sources', 'instrument all unused sources after running tests, defaults to false'), formatOption('--[no-]include-pid', 'include PID in output coverage filename')].join('\n\n') + '\n');
    console.error('\n');
  }
  function run(args, commandName, enableHooks, callback) {
    var template = {
      config: path,
      root: path,
      x: [Array, String],
      report: [Array, String],
      dir: path,
      verbose: Boolean,
      yui: Boolean,
      'default-excludes': Boolean,
      print: String,
      'self-test': Boolean,
      'hook-run-in-context': Boolean,
      'post-require-hook': String,
      'preserve-comments': Boolean,
      'include-all-sources': Boolean,
      'preload-sources': Boolean,
      i: [Array, String],
      'include-pid': Boolean
    },
        opts = nopt(template, {v: '--verbose'}, args, 0),
        overrides = {
          verbose: opts.verbose,
          instrumentation: {
            root: opts.root,
            'default-excludes': opts['default-excludes'],
            excludes: opts.x,
            'include-all-sources': opts['include-all-sources'],
            'preload-sources': opts['preload-sources'],
            'include-pid': opts['include-pid']
          },
          reporting: {
            reports: opts.report,
            print: opts.print,
            dir: opts.dir
          },
          hooks: {
            'hook-run-in-context': opts['hook-run-in-context'],
            'post-require-hook': opts['post-require-hook'],
            'handle-sigint': opts['handle-sigint']
          }
        },
        config = configuration.loadFile(opts.config, overrides),
        verbose = config.verbose,
        cmdAndArgs = opts.argv.remain,
        preserveComments = opts['preserve-comments'],
        includePid = opts['include-pid'],
        cmd,
        cmdArgs,
        reportingDir,
        reporter = new Reporter(config),
        runFn,
        excludes;
    if (cmdAndArgs.length === 0) {
      return callback(inputError.create('Need a filename argument for the ' + commandName + ' command!'));
    }
    cmd = cmdAndArgs.shift();
    cmdArgs = cmdAndArgs;
    if (!existsSync(cmd)) {
      try {
        cmd = which.sync(cmd);
      } catch (ex) {
        return callback(inputError.create('Unable to resolve file [' + cmd + ']'));
      }
    } else {
      cmd = path.resolve(cmd);
    }
    runFn = function() {
      process.argv = ["node", cmd].concat(cmdArgs);
      if (verbose) {
        console.log('Running: ' + process.argv.join(' '));
      }
      process.env.running_under_istanbul = 1;
      Module.runMain(cmd, null, true);
    };
    excludes = config.instrumentation.excludes(true);
    if (enableHooks) {
      reportingDir = path.resolve(config.reporting.dir());
      mkdirp.sync(reportingDir);
      reporter.dir = reportingDir;
      reporter.addAll(config.reporting.reports());
      if (config.reporting.print() !== 'none') {
        switch (config.reporting.print()) {
          case 'detail':
            reporter.add('text');
            break;
          case 'both':
            reporter.add('text');
            reporter.add('text-summary');
            break;
          default:
            reporter.add('text-summary');
            break;
        }
      }
      excludes.push(path.relative(process.cwd(), path.join(reportingDir, '**', '*')));
      matcherFor({
        root: config.instrumentation.root() || process.cwd(),
        includes: opts.i || config.instrumentation.extensions().map(function(ext) {
          return '**/*' + ext;
        }),
        excludes: excludes
      }, function(err, matchFn) {
        if (err) {
          return callback(err);
        }
        var coverageVar = '$$cov_' + new Date().getTime() + '$$',
            instrumenter = new Instrumenter({
              coverageVariable: coverageVar,
              preserveComments: preserveComments
            }),
            transformer = instrumenter.instrumentSync.bind(instrumenter),
            hookOpts = {
              verbose: verbose,
              extensions: config.instrumentation.extensions()
            },
            postRequireHook = config.hooks.postRequireHook(),
            postLoadHookFile;
        if (postRequireHook) {
          postLoadHookFile = path.resolve(postRequireHook);
        } else if (opts.yui) {
          postLoadHookFile = path.resolve(__dirname, '../../util/yui-load-hook');
        }
        if (postRequireHook) {
          if (!existsSync(postLoadHookFile)) {
            try {
              postLoadHookFile = resolve.sync(postRequireHook, {basedir: process.cwd()});
            } catch (ex) {
              if (verbose) {
                console.error('Unable to resolve [' + postRequireHook + '] as a node module');
              }
              callback(ex);
              return;
            }
          }
        }
        if (postLoadHookFile) {
          if (verbose) {
            console.error('Use post-load-hook: ' + postLoadHookFile);
          }
          hookOpts.postLoadHook = $__require(postLoadHookFile)(matchFn, transformer, verbose);
        }
        if (opts['self-test']) {
          hook.unloadRequireCache(matchFn);
        }
        if (config.hooks.hookRunInContext()) {
          hook.hookRunInThisContext(matchFn, transformer, hookOpts);
        }
        hook.hookRequire(matchFn, transformer, hookOpts);
        global[coverageVar] = {};
        if (config.hooks.handleSigint()) {
          process.once('SIGINT', process.exit);
        }
        process.once('exit', function() {
          var pidExt = includePid ? ('-' + process.pid) : '',
              file = path.resolve(reportingDir, 'coverage' + pidExt + '.json'),
              collector,
              cov;
          if (typeof global[coverageVar] === 'undefined' || Object.keys(global[coverageVar]).length === 0) {
            console.error('No coverage information was collected, exit without writing coverage information');
            return;
          } else {
            cov = global[coverageVar];
          }
          if (config.instrumentation.includeAllSources()) {
            matchFn.files.forEach(function(file) {
              if (!cov[file]) {
                transformer(fs.readFileSync(file, 'utf-8'), file);
                Object.keys(instrumenter.coverState.s).forEach(function(key) {
                  instrumenter.coverState.s[key] = 0;
                });
                cov[file] = instrumenter.coverState;
              }
            });
          }
          mkdirp.sync(reportingDir);
          if (config.reporting.print() !== 'none') {
            console.error('=============================================================================');
            console.error('Writing coverage object [' + file + ']');
          }
          fs.writeFileSync(file, JSON.stringify(cov), 'utf8');
          collector = new Collector();
          collector.add(cov);
          if (config.reporting.print() !== 'none') {
            console.error('Writing coverage reports at [' + reportingDir + ']');
            console.error('=============================================================================');
          }
          reporter.write(collector, true, callback);
        });
        runFn();
      });
    } else {
      runFn();
    }
  }
  module.exports = {
    run: run,
    usage: usage
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4e", ["5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = exports = abbrev.abbrev = abbrev;
  abbrev.monkeyPatch = monkeyPatch;
  function monkeyPatch() {
    Object.defineProperty(Array.prototype, 'abbrev', {
      value: function() {
        return abbrev(this);
      },
      enumerable: false,
      configurable: true,
      writable: true
    });
    Object.defineProperty(Object.prototype, 'abbrev', {
      value: function() {
        return abbrev(Object.keys(this));
      },
      enumerable: false,
      configurable: true,
      writable: true
    });
  }
  function abbrev(list) {
    if (arguments.length !== 1 || !Array.isArray(list)) {
      list = Array.prototype.slice.call(arguments, 0);
    }
    for (var i = 0,
        l = list.length,
        args = []; i < l; i++) {
      args[i] = typeof list[i] === "string" ? list[i] : String(list[i]);
    }
    args = args.sort(lexSort);
    var abbrevs = {},
        prev = "";
    for (var i = 0,
        l = args.length; i < l; i++) {
      var current = args[i],
          next = args[i + 1] || "",
          nextMatches = true,
          prevMatches = true;
      if (current === next)
        continue;
      for (var j = 0,
          cl = current.length; j < cl; j++) {
        var curChar = current.charAt(j);
        nextMatches = nextMatches && curChar === next.charAt(j);
        prevMatches = prevMatches && curChar === prev.charAt(j);
        if (!nextMatches && !prevMatches) {
          j++;
          break;
        }
      }
      prev = current;
      if (j === cl) {
        abbrevs[current] = current;
        continue;
      }
      for (var a = current.substr(0, j); j <= cl; j++) {
        abbrevs[a] = current;
        a += current.charAt(j);
      }
    }
    return abbrevs;
  }
  function lexSort(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("78", ["@node/util", "@node/path", "@node/fs", "4e", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var util = $__require('@node/util'),
      path = $__require('@node/path'),
      fs = $__require('@node/fs'),
      abbrev = $__require('4e');
  function Factory(kind, dir, allowAbbreviations) {
    this.kind = kind;
    this.dir = dir;
    this.allowAbbreviations = allowAbbreviations;
    this.classMap = {};
    this.abbreviations = null;
  }
  Factory.prototype = {
    knownTypes: function() {
      var keys = Object.keys(this.classMap);
      keys.sort();
      return keys;
    },
    resolve: function(abbreviatedType) {
      if (!this.abbreviations) {
        this.abbreviations = abbrev(this.knownTypes());
      }
      return this.abbreviations[abbreviatedType];
    },
    register: function(constructor) {
      var type = constructor.TYPE;
      if (!type) {
        throw new Error('Could not register ' + this.kind + ' constructor [no TYPE property]: ' + util.inspect(constructor));
      }
      this.classMap[type] = constructor;
      this.abbreviations = null;
    },
    create: function(type, opts) {
      var allowAbbrev = this.allowAbbreviations,
          realType = allowAbbrev ? this.resolve(type) : type,
          Cons;
      Cons = realType ? this.classMap[realType] : null;
      if (!Cons) {
        throw new Error('Invalid ' + this.kind + ' [' + type + '], allowed values are ' + this.knownTypes().join(', '));
      }
      return new Cons(opts);
    },
    loadStandard: function(dir) {
      var that = this;
      fs.readdirSync(dir).forEach(function(file) {
        if (file !== 'index.js' && file.indexOf('.js') === file.length - 3) {
          try {
            that.register($__require(path.resolve(dir, file)));
          } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack);
            throw new Error('Could not register ' + that.kind + ' from file ' + file);
          }
        }
      });
    },
    bindClassMethods: function(Cons) {
      var tmpKind = this.kind.charAt(0).toUpperCase() + this.kind.substring(1),
          allowAbbrev = this.allowAbbreviations;
      Cons.mix = Factory.mix;
      Cons.register = this.register.bind(this);
      Cons.create = this.create.bind(this);
      Cons.loadAll = this.loadStandard.bind(this, this.dir);
      Cons['get' + tmpKind + 'List'] = this.knownTypes.bind(this);
      if (allowAbbrev) {
        Cons['resolve' + tmpKind + 'Name'] = this.resolve.bind(this);
      }
    }
  };
  Factory.mix = function(cons, proto) {
    Object.keys(proto).forEach(function(key) {
      cons.prototype[key] = proto[key];
    });
  };
  module.exports = Factory;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("47", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    NAME: 'istanbul',
    VERSION: '0.4.2'
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3c", ["78", "47", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $__pathVars = $__System.get('@@cjs-helpers').getPathVars(module.id),
      __filename = $__pathVars.filename,
      __dirname = $__pathVars.dirname;
  var Factory = $__require('78'),
      factory = new Factory('command', __dirname, true);
  function Command() {}
  factory.bindClassMethods(Command);
  Command.prototype = {
    toolName: function() {
      return $__require('47').NAME;
    },
    type: function() {
      return this.constructor.TYPE;
    },
    synopsis: function() {
      return "the developer has not written a one-line summary of the " + this.type() + " command";
    },
    usage: function() {
      console.error("the developer has not provided a usage for the " + this.type() + " command");
    },
    run: function(args, callback) {
      return callback(new Error("run: must be overridden for the " + this.type() + " command"));
    }
  };
  module.exports = Command;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("@system-env", [], false, function() {
  return {
    "production": true,
    "browser": false,
    "node": true
  };
});

$__System.registerDynamic("5", ["@system-env"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var productionEnv = $__require('@system-env').production;
  var pEnv = process.env;
  pEnv.NODE_ENV = productionEnv ? 'production' : 'development';
  module.exports = global.process;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a2", ["40", "@node/util", "3c", "5"], true, function($__require, exports, module) {
  var process = $__require("5");
  var global = this,
      __define = global.define;
  global.define = undefined;
  var runWithCover = $__require('40'),
      util = $__require('@node/util'),
      Command = $__require('3c');
  function TestCommand() {
    Command.call(this);
  }
  TestCommand.TYPE = 'test';
  util.inherits(TestCommand, Command);
  Command.mix(TestCommand, {
    synopsis: function() {
      return "cover a node command only when npm_config_coverage is set. Use in an `npm test` script for conditional coverage";
    },
    usage: function() {
      runWithCover.usage(this.toolName(), this.type());
    },
    run: function(args, callback) {
      runWithCover.run(args, this.type(), !!process.env.npm_config_coverage, callback);
    }
  });
  module.exports = TestCommand;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2", ["4", "9", "3c", "3", "79", "6", "8", "d", "2f", "e", "f", "31", "32", "33", "34", "35", "36", "37", "38", "3f", "48", "4a", "4d", "a2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Store = $__require('4'),
      Report = $__require('9'),
      Command = $__require('3c');
  Store.register($__require('3'));
  Store.register($__require('79'));
  Store.register($__require('6'));
  Report.register($__require('8'));
  Report.register($__require('d'));
  Report.register($__require('2f'));
  Report.register($__require('e'));
  Report.register($__require('f'));
  Report.register($__require('31'));
  Report.register($__require('32'));
  Report.register($__require('33'));
  Report.register($__require('34'));
  Report.register($__require('35'));
  Report.register($__require('36'));
  Report.register($__require('37'));
  Command.register($__require('38'));
  Command.register($__require('3f'));
  Command.register($__require('48'));
  Command.register($__require('4a'));
  Command.register($__require('4d'));
  Command.register($__require('a2'));
  global.define = __define;
  return module.exports;
});

})
(function(factory) {
  define([], factory);
});