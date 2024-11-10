:: script auto complete push to github for windows
:: run it ./filename.bat "commit change "
::
@echo off
if "%~1"=="" (
    echo Please provide a commit message.
    exit /b 1
)

for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%i

git diff --quiet
if %errorlevel% neq 0 (
    git add .
    git commit -m "%~1"
    git pull origin main
    if %errorlevel% neq 0 (
        echo Merge conflict detected. Please resolve the conflicts and press any key to continue.
        pause
        exit /b 1
    )


    if "%CURRENT_BRANCH%"=="main" (
        
        set /p confirm="You are on the 'main' branch. Do you want to push to 'main'? (y/n): "
        if /i "%confirm%"=="y" (
            git push origin main
        ) else (
            echo Push cancelled. No changes were pushed to 'main'.
        )
    ) else (
      
        git push origin %CURRENT_BRANCH%
        echo Changes committed, pulled from main, and pushed to '%CURRENT_BRANCH%' branch.
    )
) else (
    echo No changes detected to commit.
)

pause
