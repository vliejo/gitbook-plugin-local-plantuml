# Plant UML GitBook Plugin

[![Build Status](https://travis-ci.org/vliejo/gitbook-plugin-local-plantuml.svg?branch=master)](https://travis-ci.org/vliejo/gitbook-plugin-local-plantuml)

This plugin builds on the [puml](https://plugins.gitbook.com/plugin/puml) plugin, however this plugin generates the
puml images locally rather than using the service at http://www.plantuml.com/plantuml/.

This is necessary if you are using/hosting gitbook for private work and don't want your diagrams bounced off an external server.

# Issues
* Currently a new java process is started for every `plantuml` block in your markdown files. This can be a little slow.