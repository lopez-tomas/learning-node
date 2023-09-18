{
    "targets": [
        {
            "target_name": "addon",
            "sources": [ "hola.cc" ]
        }
    ],
    "include_dirs": [
        "<!(node -e \"require('nan')\")"
    ]
}