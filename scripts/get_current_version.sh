PROGNAME=$0

usage() {
  cat << EOF >&2
Usage: $PROGNAME [-v <version name>] [-s <semantic>] [-f <filename>]

 -v <version name>: name of the version
 -s <semantic>: true | false
 -f <filename>: filename with extension
EOF
  exit 1
}


while getopts "v:s:f:" o; do
  case $o in
    (v)
    VERSION_NAME=$OPTARG
    ;;
    (s) 
    SEMANTIC=$OPTARG
    ;;
    (f) 
    FILE_NAME=$OPTARG
    ;;
    (*) usage
  esac
done
shift $((OPTIND-1))

if [ -z "$VERSION_NAME" ] || [ -z "$SEMANTIC" ] || [ -z "$FILE_NAME" ]
then usage
fi

version_right=$(echo $(grep '\"'$VERSION_NAME'\"' $FILE_NAME) | cut -d' ' -f2)

if [ $SEMANTIC == true ]
then echo $version_right | cut -d'"' -f2
else echo $version_right | cut -d',' -f1
fi
