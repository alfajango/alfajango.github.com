---
layout: project
title: Redmine Cashboard Tasks Plugin
heading: Redmine Cashboard Tasks Plugin
tagline: Sync tasks between Redmine Issues and Cashboard Project Lists
description:
stylesheets:
github:
  title: Fork on Github
  href: https://github.com/alfajango/redmine-cashboard-tasks
---

This Redmine plugin creates integration between the Redmine Issue
tracking and [Cashboard](http://cashboardapp.com/) Project Lists and Tasks, including the ability to
add Redmine issues to Cashboard as tasks, as well as the ability to
import Cashboard tasks to Redmine as issues.

## What it does

From the Issues page, right-click any issue or multiple issues and
select "Add to Cashboard" from the context menu.

<img src="/images/redmine-cashboard-tasks/issues-context-menu-add-to-cashboard.png" style="max-width: 100%" />

When copying to Cashboard, the plugin will remember the last Cashboard project
that was used to copy issues to from the current Redmine project.
Otherwise, the plugin will fetch all open Cashboard clients and projects, allowing
you to select a Cashboard project list or to create a new project list
on Cashboard to copy the Redmine issues to.

<img src="/images/redmine-cashboard-tasks/copy-multiple.png" style="max-width: 100%" />
<img src="/images/redmine-cashboard-tasks/added-to-cashboard-success.png" style="max-width: 100%" />

The Redmine issues will be copied to Cashboard as tasks, aka "Line
Items that belong to a Project List" in the Cashboard API.

<img src="/images/redmine-cashboard-tasks/cashboard-project-list.png" style="max-width: 100%" />

The plugin also allows importing Cashboard tasks as issues in Redmine,
by adding an import link to the right sidebar on the Redmine project issues
page.

<img src="/images/redmine-cashboard-tasks/issues-sidebar-import.png" style="max-width: 100%" />

You will then be able to select the Cashboard project, project, list,
and specific tasks you would like to import.

<img src="/images/redmine-cashboard-tasks/import-from-cashboard-select.png" style="max-width: 100%" />

## Installation

1. Copy the plugin directory into the plugins directory (make sure the name is cashboard_tasks)
2. Execute plugin database migration: `rake redmine:plugins:migrate`
3. Restart Redmine

Alternatively, instead of directly copying this plugin directory, you
may add it as a submodule to Redmine:

```
cd /path/to/redmine
git clone https://github.com/alfajango/redmine-cashboard-tasks.git plugins/cashboard_tasks
rake redmine:plugins:migrate
```

Be sure to add the following environment variables to your Redmine
server, and restart Redmine:

```
CASHBOARD_SUBDOMAIN=your_cashboard_subdomain
CASHBOARD_API_KEY=your_cashboard_api_key
```
