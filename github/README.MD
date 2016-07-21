# Contributing with projects open source
## Step 1
    - Choose the project and **fork**

## Step 2
    - Copy your link the repository is **forked**
      - Clone your repository
    ```
      git clone https://linkrepo.com
    ```

## Step 3
    - Crate **branch**
    ```
      git checkout -b branchName
    ```

## Step 4
    - Commit modifications
      ```
      git add --all
      git commit -m "description"
      ```
## Step 5
    - Send the commit for repository
    ```
    git push origin branchName
    ```
## Step 6
    - Go to github repository and click in **Compare & pull request**
    - Write any comment and click in **Create Pull Request**

## Step 7
    - Getting the modifications of original repository
    ```
    git remote add upstream http://linkOriginal
    ```
    - Updating
    ```
    git fetch upstream
    git merge upstream/master master
    ```
