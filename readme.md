# Plant UML GitBook Plugin

[![Build Status](https://travis-ci.org/vliejo/gitbook-plugin-local-plantuml.svg?branch=master)](https://travis-ci.org/vliejo/gitbook-plugin-local-plantuml)

This plugin builds on the [puml](https://plugins.gitbook.com/plugin/puml) plugin, however this plugin generates the
puml images locally rather than using the service at http://www.plantuml.com/plantuml/.

This is necessary if you are using/hosting gitbook for private work and don't want your diagrams bounced off an external server.

You can specify the plantuml script either in the plantuml block:

 {% plantuml %}
 Bob->Alice : hello
 {% endplantuml %}

Or by referencing a separate .puml file:

 {% plantuml path='bob_alice.puml'%}
 {% endplantuml %}


# Release Notes
`1.0.1` Support for caching of output images in the os temp directory. Since the filenames are based on the hash of the diagram text, versioning should 'just work'. This also helps
with the slow-ness listed in issues by only re-rendering changed images. Thanks to @johnhug for the contribution.

# Issues
* Currently a new java process is started for every `plantuml` block in your markdown files. This can be a little slow.
