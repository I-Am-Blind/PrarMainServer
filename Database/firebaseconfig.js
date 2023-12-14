import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp({
   credential: cert({
    "type": "service_account",
    "project_id": "prar-fe0ad",
    "private_key_id": "f2c7030f2987214c4c120804f3a5d44743f159f9",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyPsPQqJm5M+m2\nduMu9LERp0qEC/othOa6HVGCUR8cy1Aa0e4AJ/75n0XHvp7KvBvWN3TYD/d6Ll4p\ntSfFEG1NY8bar0QwvOLvykyV1JHUiGzxhioc0G0a0wtzQBDLBWa8irXyC12XxApX\nrQoMeaqtMJmwmzoL4/miAgKY5N5r25JQBdIkNpi//HHlQPbVzKUxK7CZopJvm1c4\nsMgqz6ciJCn5aeqEy9Jp+D6N5Pequj7Juo9WTqhT9B5Qw2pnu79pr/nkWhnpVpMD\n9DLHFzAtuTk8SilkSr6UHzkkWjwKEEJEEZyIr/pSIdBvRiFoMH38OszZBZCFUonP\nxssUdnWnAgMBAAECggEABkg+XY3RBofaXmMipFvdG8qszn+fkdgjy6kkiiEdesXT\nAnGmCkez7bdb3cDjAYaPZ/BCGYANOwyu++2rGP/Nt724W1UfDvqxTZNF5L1TuyJo\neJC/zjktserV9foVksTozI9fqfLARIzqcmb3ujMq5/oVCKDynaBWLYwVlwRGBJYZ\nq0sQFfYhRi9tzc+bFjIwnyEzLuiwgu5mfTE9pOrhqEnNWwhE+zg+ylP0DNEyYIo5\nL6FTjEyAReRJXJFWqN9JCkIW0Ft3icA4UrUk0S0yo6+yNaH2eHadRJt+Ae/53zaX\n97o+Lbr8ilIrlW1hI0R/yblAZQwqmSP+KqLbl43YxQKBgQDXcpCEyPb1709/zQir\nQPfHv02suRKbl/3Z5Sb/iruCNYADx5HE233OmWQMsdqnqMhwnTzHZwG3M6GynfbX\nsCjJLwx+p3Eme8V7AmxfDPOcIv6Czl7uofpLMkmmgyPMdshjGpf9TPeLd66LDAm8\neBFSpOdn1/qrNNGrkxFYZd34awKBgQDTy5a7IaE28S6LcGCJvgegi4HhXCJOZ0ef\ni1DfMt7v8nIhViVbhrNU0uEbLuVKxbcrYUg/ouVc4kTMIxqJIBfk70cricuS7Qe6\nyX2u7szfslLD4JdDlAh6RBpUkoxCHSOlpG/JdnE7OkbgIhcS+yJb13p3uEHQiWLk\nMHDbBS32tQKBgQCyYOtg1VcLtpDW2naD++1q12xDRpQueQA3iS/pwf6PxyXveyuo\nlqYqCPw6OoMz713NR5JL8nAMM9Z8Iad/Wx3ZvHeW4aGgYDfYKeB6LioAq0SYHq+g\n2kF2QvORxuA76FjvHNScZz5JndTI0TW6cpq9F0V0x/CGEdxLNx/UVbsbcwKBgA1Q\nhzFMc+4YS2zIq8j9AU2+d3PLbvyu0XneMD9X21wKSdJ+r+qJFU0H1M74q8F/nHxF\nqV0WyISGVPzgWBK2ycnCoR7DkuCxtgKwGA6fRJHri/h0bg35iG7nSSB39glR+6O2\nKrDnmUa36yy79+dhkk9jxHcyRjDt8iGWSgH62WDhAoGATLFTir+9oBY9CFBGhWCX\nmjTQYVZzfX9xZtNB02VH93StAKKdOjH93IRSUw1nCIC9PgnpYwV8YCctt7My/i+E\nTn7olKb8XioaHUAUuLM/addf/TUS6nsVivvZUbIhwaMPVHFqj82wBmdd+qxdMjp1\nNY096fD/vl20yyW9mIEpP2M=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-5405s@prar-fe0ad.iam.gserviceaccount.com",
    "client_id": "108315245647396932309",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5405s%40prar-fe0ad.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  })
});

let db;
const connectDB = async () => {
  if (!db) {
    db = getFirestore();
  }
  return db;
};

export { connectDB, db };
