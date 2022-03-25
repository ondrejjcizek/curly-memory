module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5597fcc706333074ec2d86d35b4b59b4'),
  },
});
