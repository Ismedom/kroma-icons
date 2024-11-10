
if [ -z "$1" ]; then
  echo "Please provide a commit message."
  exit 1
fi


CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)


if [[ -n $(git status --porcelain) ]]; then

 
  git add .


  git commit -m "$1"

 
  git pull origin main

 
  if [ "$CURRENT_BRANCH" == "main" ]; then

    read -p "You are on the 'main' branch. Do you want to push to 'main'? (y/n): " confirm
    if [[ "$confirm" =~ ^[Yy]$ ]]; then
      git push origin main
    else
      echo "Push cancelled. No changes were pushed to 'main'."
    fi
  else
  
    git push origin "$CURRENT_BRANCH"
    echo "Changes committed, pulled from main, and pushed to '$CURRENT_BRANCH' branch."
  fi

else
  echo "No changes detected to commit."
fi
