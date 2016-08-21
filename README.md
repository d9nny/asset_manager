# Asset Manager

## Introduction

### Use case
The user will have the possibility to create an asset, modify and delete it. Also, he will have the possibility to view the list of all assets stored in the system.

### Bonus points: 
- filter the asset list based on asset type
- sort the asset list alphabetically (ascending and descending).

### Asset
Assets are items of various genres. A car, for example, is a typical asset. As phones and printers.
The web app must be able to work with different types of assets.
Every asset has at least a name (only alphabetical chars), an asset type and a quantity (only integer values).
Depending on the asset type, it could also have additional, non mandatory, values that can be filled and modified by the user.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
