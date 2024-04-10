const completionSpec: Fig.Spec = {
	name: "tools",
	description: "A toolkit for analytics engineers to manage their day-to-day tasks",
	subcommands: [
		{
			name: "init",
			description: "Generate an Tools directory & configuration file in the current directory",
		},
		{
			name: "commit",
			description: "Commit all changes in the current directory using Conventional Commits format",
		},
		{
			name: "s3-sync",
			description: "Sync files to S3 using filepaths from the configuration file",
		},
		{
			name: "branch-new",
			description: "Checks out main, pulls latest changes, and creates a new branch. Can be used for Linear Ticket Connections",
		},
		{
			name: "pr-create",
			description: "Leverages the GH CLI to create a new PR with the current branch. Requires a PULL_REQUEST_TEMPLATE environment variable to be set",
			options: [
				{
					name: ["-c", "--is-cross-team"],
					description: "Swaps the PR Body Template From Data & Analytics to Cross-Team",
				}
			]
		},
		{
			name: "run",
			description: "Searches through SQL files in the models/ directory and runs the specified file. Can include production and upstream/downstream flags",
			options: [
				{
					name: ["-p", "--production"],
					description: "Run the query in production",
				},
				{
					name: ["-u", "--upstream"],
					description: "Run the query in upstream",
					args: {
						name: "level",
						description: "The level of upstreams to run from the specified model",
						default: "",
						isOptional: true,
						suggestions: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
					}
				},
				{
					name: ["-d", "--downstream"],
					description: "Run the query in downstream",
					args: {
						name: "level",
						description: "The level of downstreams to run from the specified model",
						default: "",
						isOptional: true,
						suggestions: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
					}
				},
				{
					name: ["-a", "--waterfall"],
					description: "Run the specified model, its downstreams, and its downstreams' upstreams",
				}
			]
		}
	],
};

export default completionSpec;