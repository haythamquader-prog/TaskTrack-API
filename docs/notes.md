\# Technical Notes



\## Biggest Docker Problem



The main Docker issue was that the Dockerfile was accidentally saved as Dockerfile.txt. Docker could not find the file during the build process.



\### Solution



The file was recreated correctly as Dockerfile without any extension and the image was rebuilt successfully.



\## Most Important Git/GitHub Lesson



I learned how Git tracks project history using commits and how GitHub provides a remote repository for collaboration and backup.



Using meaningful commit messages makes project history easier to understand and maintain.



\## VPS Deployment Experience



The deployment process was completed successfully using the Render cloud platform and Docker.



\### Challenges Faced



\* Understanding the deployment workflow on a cloud VPS environment.

\* Configuring the correct application port during deployment.

\* Verifying that the Docker container was running correctly after deployment.



\### Solutions



\* Followed the Docker-based deployment workflow provided by Render.

\* Ensured that the application listens on port 3000.

\* Monitored deployment logs until the service became available.

\* Verified the application through the public deployment URL.



\### Production URL



https://tasktrack-api-r1kw.onrender.com



