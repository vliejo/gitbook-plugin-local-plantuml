var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

describe('PlantUML', function() {
    it('should correctly replace by img html tag in book root', function() {
        return tester.builder()
            .withContent('This is a diagram:\n\n{% plantuml %}\nBob->Alice : hello\n{% endplantuml %}')
            .withBookJson({
                plugins: ['local-plantuml']
            })
            .withLocalPlugin(path.join(__dirname, '..'))
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<p>This is a diagram:</p>\n<p><img src="84918a9a66a4e75be00a46643eab802f.svg"></p>')
            });
    });
    it('should correctly replace nested page by img html tag in book root', function() {
        return tester.builder()
            .withBookJson({
                plugins: ['local-plantuml']
            })
            .withLocalPlugin(path.join(__dirname, '..'))
            .withContent("Linking to [nested page](nesting/nested.md)")
            .withPage(
                "nesting/nested",
                "This is a diagram:\n\n{% plantuml %}\nBob->Alice : hello\n{% endplantuml %}",
                1
            )
            .withPage(
                "notnested",
                "This is a diagram:\n\n{% plantuml %}\nBob->Alice : hello\n{% endplantuml %}",
                0
            )
            .create()
            .then(function(result) {
                assert.equal(result.get("nesting/nested.html").content, '<p>This is a diagram:</p>\n<p><img src="../84918a9a66a4e75be00a46643eab802f.svg"></p>')
            });
    });
    it('should correctly replace file reference by img html tag in book root', function() {
        return tester.builder()
            .withFile('test.puml','Bob->Alice : hello')
            .withContent('This is a diagram:\n\n{% plantuml path="test.puml" %}\ntest\n{% endplantuml %}')
            .withBookJson({
                plugins: ['local-plantuml']
            })
            .withLocalPlugin(path.join(__dirname, '..'))
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<p>This is a diagram:</p>\n<p><img src="84918a9a66a4e75be00a46643eab802f.svg"></p>')
            });
    });
});
