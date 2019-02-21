# PivotTrack
### `Schema`
#### Projects
| Column | Data Type | Key | Details |
| --- | --- | --- | --- |
| `id` | Integer | Primary | Not null |
| `title` | String | | Not null, unique(scope: user_id) |
| `user_id` | Integer | Foreign | Not null, index |

#### Stories
| Column | Data Type | Key | Details |
| --- | --- | --- | --- |
| `id` | Integer | Primary | Not null |
| `description` | String | | |
| `order` | Integer |  | Not null |
| `points` | Integer |  |  |
| `status` | String | | Not null, default("Not started") |
| `title` | String |  | Not null |
| `type` | String | | Not null |
| `workflow_id` | Integer | Foreign | Not null, index |

#### Users
| Column | Data Type | Key | Details |
| --- | --- | --- | --- |
| `id` | Integer | Primary | Not null |
| `email` | String |  | Not null, unique, index |
| `password_digest` | String |  | Not null |
| `session_token` | String |  | Not null, unique, index |

#### Workflows
| Column | Data Type | Key | Details |
| --- | --- | --- | --- |
| `id` | Integer | Primary | Not null |
| `order` | Integer |  | Not null |
| `project_id` | Integer | foreign | Not null, index |
| `title` | String | | Not null, index |
