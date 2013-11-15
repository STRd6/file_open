(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "version": "0.1.0",
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "file_open\n=========\n\nRead data from a file input field.\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "File Open\n=========\n\nHere we create a file input field.\n\nWhenever the contents change we fire an event so JS can get access to the data.\n\n    input = document.createElement('input')\n    input.type = \"file\"\n\n    contents = document.createElement(\"textarea\")\n\n    document.body.appendChild input\n    document.body.appendChild contents\n\n    input.onchange = ->\n      reader = new FileReader()\n\n      reader.onload = (evt) ->\n        contents.innerText = evt.target.result\n\n      reader.onerror = (evt) ->\n        contents.innerText = \"error reading file\"\n\n      file = input.files[0]\n      reader.readAsText(file, \"UTF-8\")\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nentryPoint: \"main\"\nremoteDependencies: [\n  \"http://strd6.github.io/require/v0.2.2.js\"\n]\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var contents, input;\n\n  input = document.createElement('input');\n\n  input.type = \"file\";\n\n  contents = document.createElement(\"textarea\");\n\n  document.body.appendChild(input);\n\n  document.body.appendChild(contents);\n\n  input.onchange = function() {\n    var file, reader;\n    reader = new FileReader();\n    reader.onload = function(evt) {\n      return contents.innerText = evt.target.result;\n    };\n    reader.onerror = function(evt) {\n      return contents.innerText = \"error reading file\";\n    };\n    file = input.files[0];\n    return reader.readAsText(file, \"UTF-8\");\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"entryPoint\":\"main\",\"remoteDependencies\":[\"http://strd6.github.io/require/v0.2.2.js\"]};",
      "type": "blob"
    }
  },
  "entryPoint": "main",
  "dependencies": {},
  "remoteDependencies": [
    "http://strd6.github.io/require/v0.2.2.js"
  ],
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "repository": {
    "id": 14427371,
    "name": "file_open",
    "full_name": "STRd6/file_open",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://2.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/file_open",
    "description": "Read data from a file input field.",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/file_open",
    "forks_url": "https://api.github.com/repos/STRd6/file_open/forks",
    "keys_url": "https://api.github.com/repos/STRd6/file_open/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/file_open/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/file_open/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/file_open/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/file_open/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/file_open/events",
    "assignees_url": "https://api.github.com/repos/STRd6/file_open/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/file_open/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/file_open/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/file_open/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/file_open/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/file_open/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/file_open/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/file_open/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/file_open/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/file_open/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/file_open/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/file_open/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/file_open/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/file_open/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/file_open/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/file_open/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/file_open/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/file_open/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/file_open/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/file_open/merges",
    "archive_url": "https://api.github.com/repos/STRd6/file_open/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/file_open/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/file_open/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/file_open/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/file_open/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/file_open/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/file_open/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/file_open/releases{/id}",
    "created_at": "2013-11-15T15:11:49Z",
    "updated_at": "2013-11-15T15:11:49Z",
    "pushed_at": "2013-11-15T15:11:49Z",
    "git_url": "git://github.com/STRd6/file_open.git",
    "ssh_url": "git@github.com:STRd6/file_open.git",
    "clone_url": "https://github.com/STRd6/file_open.git",
    "svn_url": "https://github.com/STRd6/file_open",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "defaultBranch": "master"
  }
});