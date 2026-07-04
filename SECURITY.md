# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| Latest release on `main` | ✅ |
| Older tags | ❌ (please upgrade) |

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

1. Prefer [GitHub Private vulnerability reporting](https://github.com/imartinstudio/mts-x-following-list/security/advisories/new) if enabled on the repository.
2. Otherwise, open a **private** security advisory or contact the maintainer via GitHub Issues with minimal details and request a private channel.

We aim to acknowledge reports within **7 days** and will coordinate a fix and disclosure timeline.

## Scope

In scope:

- This extension's source code and released Chrome MV3 packages built from tagged releases
- Bulk unfollow automation, DOM injection, and permission usage

Out of scope:

- Vulnerabilities in x.com itself
- Abuse of bulk unfollow against accounts you do not control (expected user-initiated behavior)

## Security Expectations

- The extension must not collect, store, or transmit following-list data to third-party servers.
- Permissions in `src/manifest.json` should remain minimal and documented in `privacy/index.html`.
