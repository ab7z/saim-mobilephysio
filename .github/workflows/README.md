# GitHub Actions - Claude Code Setup

This directory contains the GitHub Actions workflow configuration for Claude Code integration.

## Setup Instructions

To complete the setup and enable Claude Code tagging in GitHub issues and PRs:

### 1. Add ANTHROPIC_API_KEY Secret

You need to add your Anthropic API key as a GitHub secret:

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Name: `ANTHROPIC_API_KEY`
5. Value: Your Anthropic API key from https://console.anthropic.com/

**IMPORTANT**: Never commit API keys directly to the repository!

### 2. Install Claude GitHub App (Optional but Recommended)

For the best experience, install the Claude GitHub app:

1. Run `claude setup-token` in Claude Code terminal (Pro/Max users)
2. Or manually install from the Anthropic website

### 3. Usage

Once set up, you can:

- **Tag Claude in issues**: Mention `@claude` in any issue comment or description
- **Tag Claude in PRs**: Mention `@claude` in PR comments or reviews
- **Assign issues**: Assign issues to Claude for automated responses

### Example Usage

```
@claude can you help fix the bug described above?
```

```
@claude please review this PR and suggest improvements
```

## Workflow Details

The `claude.yml` workflow:
- Triggers on issue comments, PR review comments, issues opened/assigned, and PR reviews
- Only runs when `@claude` is mentioned
- Has permissions to read/write contents, issues, and pull requests
- Uses the official `anthropics/claude-code-action@v1`

## Authentication Options

You can authenticate using:
- **Anthropic API Key** (recommended for most users): `ANTHROPIC_API_KEY`
- **OAuth Token** (Pro/Max users): `CLAUDE_CODE_OAUTH_TOKEN`
- **AWS Bedrock**: Configure via custom GitHub app
- **Google Vertex AI**: Configure via custom GitHub app

## Troubleshooting

If Claude doesn't respond:
1. Verify `ANTHROPIC_API_KEY` is set in repository secrets
2. Check that the workflow file is in `.github/workflows/`
3. Ensure you're mentioning `@claude` in comments
4. Check the Actions tab for workflow run logs

## Documentation

- [Claude Code GitHub Actions Docs](https://docs.claude.com/en/docs/claude-code/github-actions)
- [claude-code-action Repository](https://github.com/anthropics/claude-code-action)
